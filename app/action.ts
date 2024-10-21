/** @format */

"use server";

import { RegistrationInput, RegistrationSchema } from "@/lib/schema";
interface RegistrationResponse {
  status: string; // "200"
  message: string; // e.g. "Mail sent successfully. Check your mail!"
  validation: boolean;
  result: any[]; // Empty array as shown in the response
}

export async function registerUser(
  values: RegistrationInput
): Promise<RegistrationResponse> {
  try {
    // Create a FormData object
    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("userEmail", values.userEmail);
    formData.append("password", values.password);
    formData.append("rePassword", values.rePassword);
    formData.append("userSelection", values.userSelection);

    // Log the form data for debugging
    console.log("FormData payload:", Array.from(formData.entries()));

    const response = await fetch(
      "https://api.eazetrades.ng/api/auth/submitRegistrationDetails",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0", // Try adding this header
        },
        body: formData, // Pass the FormData object
      }
    );

    const responseData: RegistrationResponse = await response.json();
    console.log({ responseData });
    return responseData; // Return the raw data as it is from the API
  } catch (error) {
    console.error("Registration error:", error);
    throw error; // Just throw the error, handling can be done elsewhere
  }
}

interface OtpValidationResponse {
  status: string;
  message: string;
  validation: boolean;
  result: any[]; // Usually empty or contains additional data
}

export async function validateOtp(
  userEmail: string,
  otp: string
): Promise<OtpValidationResponse> {
  try {
    // Extracting the individual OTP digits from the input string
    const [tokenOne, tokenTwo, tokenThree, tokenFour, tokenFive, tokenSix] =
      otp.split("");

    // Formatting the data to send to the server
    const payload = {
      userEmail,
      tokenOne,
      tokenTwo,
      tokenThree,
      tokenFour,
      tokenFive,
      tokenSix,
    };

    console.log("Sending OTP validation payload:", payload);

    const response = await fetch(
      "https://api.eazetrades.ng/api/auth/validateRegistrationToken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const responseData: OtpValidationResponse = await response.json();
    console.log("OTP Validation Response:", responseData);

    return responseData; // Return the API response
  } catch (error) {
    console.error("OTP validation error:", error);
    throw error; // Handle error
  }
}
