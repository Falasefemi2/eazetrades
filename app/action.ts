/** @format */

"use server";

import {
  ContactInput,
  RegistrationInput,
  RegistrationSchema,
  SignInInput,
} from "@/lib/schema";
import { revalidatePath } from "next/cache";
interface RegistrationResponse {
  status: string; // "200"
  message: string; // e.g. "Mail sent successfully. Check your mail!"
  validation: boolean;
  result: {
    message: string; // This is the message you're expecting
  };
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
    // Extracting the individual OTP digits
    const [tokenOne, tokenTwo, tokenThree, tokenFour, tokenFive, tokenSix] =
      otp.split("");

    const formData = new FormData();
    formData.append("userEmail", userEmail);
    formData.append("tokenOne", tokenOne);
    formData.append("tokenTwo", tokenTwo);
    formData.append("tokenThree", tokenThree);
    formData.append("tokenFour", tokenFour);
    formData.append("tokenFive", tokenFive);
    formData.append("tokenSix", tokenSix);

    // Log the form data for debugging
    console.log("FormData payload:", Array.from(formData.entries()));

    const response = await fetch(
      "https://api.eazetrades.ng/api/auth/validateRegistrationToken",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0", // Adding this header to match the working function
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Server response:", response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData: OtpValidationResponse = await response.json();
    console.log("OTP Validation Response:", responseData);

    return responseData;
  } catch (error) {
    console.error("OTP validation error:", error);
    throw error;
  }
}

interface ContactFormResponse {
  status: string; // e.g. "200"
  message: string; // e.g. "Request successful" or "Something went wrong"
  validation: boolean;
  result: {
    message: string; // This is the message you're expecting
  };
}

interface ContactFormInput {
  fullName: string;
  userEmail: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

export async function submitContactForm(
  values: ContactFormInput
): Promise<ContactFormResponse> {
  try {
    // Create a FormData object
    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("userEmail", values.userEmail);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("subject", values.subject);
    formData.append("message", values.message);

    console.log(
      "Submitting contact form data:",
      Array.from(formData.entries())
    ); // Log FormData entries for debugging

    const response = await fetch(
      "https://api.eazetrades.ng/api/contact/submitUserContactDetails",
      {
        method: "POST",
        // Note: Do not set the 'Content-Type' header as the browser will set the correct boundary for multipart/form-data
        body: formData,
      }
    );

    const responseData: ContactFormResponse = await response.json();
    console.log("Contact Form Response:", responseData);

    return responseData; // Return the API response
  } catch (error) {
    console.error("Contact form submission error:", error);
    throw error; // Rethrow error for further handling
  }
}

interface SubscriptionFormResponse {
  status: string;
  message: string;
  validation: boolean;
  result: {
    message: string; // This is the message you're expecting
  };
}

export async function subscribeUser(
  values: string
): Promise<SubscriptionFormResponse> {
  try {
    const formData = new FormData();
    formData.append("userEmail", values);

    const response = await fetch(
      "https://api.eazetrades.ng/api/contact/submitUserSubscriptionEmail",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData: SubscriptionFormResponse = await response.json();
    console.log("Subscription Form Response:", responseData);

    return responseData;
  } catch (error) {
    if (error instanceof TypeError && error.message === "fetch failed") {
      console.error("Network error - Unable to reach the server");
      throw new Error(
        "Unable to connect to the server. Please check your internet connection."
      );
    }
    console.error("Subscription form submission error:", error);
    throw error;
  }
}

interface SignInUserResponse {
  status: string;
  message: string;
  validation: boolean;
  result: {
    message: string;
  };
}

export async function SignInUser(
  values: SignInInput
): Promise<SignInUserResponse> {
  try {
    const formData = new FormData();
    formData.append("userEmail", values.userEmail);
    formData.append("password", values.password);
    console.log({ formData });

    const response = await fetch(
      "https://api.eazetrades.ng/api/auth/submitLoginDetails",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0", // Try adding this header
        },
        body: formData, // Pass the FormData object
      }
    );

    const responseData: SignInUserResponse = await response.json();
    console.log("Sign In User Response:", responseData);

    return responseData;
  } catch (error) {
    console.error("Sign in user error:", error);
    throw error;
  }
}
