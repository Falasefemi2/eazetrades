/** @format */

"use server";

import { RegistrationInput, RegistrationSchema } from "@/lib/schema";
// interface RegistrationResponse {
//   status: string; // "200"
//   message: string; // e.g. "Mail sent successfully. Check your mail!"
//   validation: boolean;
//   result: any[]; // Empty array as shown in the response
// }

// interface ApiResponse {
//   status: number;
//   message: string;
//   data?: RegistrationResponse;
//   errors?: Record<string, string[]>;
// }

// export async function registerUser(
//   values: RegistrationInput
// ): Promise<ApiResponse> {
//   try {
//     const formattedData = {
//       fullName: values.fullName,
//       userEmail: values.userEmail,
//       password: values.password,
//       rePassword: values.rePassword,
//       userSelection: values.userSelection,
//     };

//     const response = await fetch(
//       "https://api.eazetrades.ng/api/auth/submitRegistrationDetails",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(formattedData),
//       }
//     );

//     const responseData: RegistrationResponse = await response.json();

//     // Handle the case where we get a 200 status in the API response
//     if (responseData.status === "200") {
//       return {
//         status: 200,
//         message: responseData.message,
//         data: {
//           status: responseData.status,
//           message: responseData.message,
//           validation: responseData.validation,
//           result: responseData.result || [], // Ensure we always have an array
//         },
//       };
//     }

//     // Handle non-200 API responses
//     return {
//       status: parseInt(responseData.status) || 400,
//       message: responseData.message || "Registration failed",
//       data: responseData,
//     };
//   } catch (error) {
//     console.error("Registration error:", error);

//     if (error instanceof TypeError && error.message === "Failed to fetch") {
//       return {
//         status: 503,
//         message: "Network error: Unable to connect to the server",
//         errors: {
//           server: ["Please check your internet connection"],
//         },
//       };
//     }

//     return {
//       status: 500,
//       message:
//         error instanceof Error ? error.message : "An unknown error occurred",
//       errors: {
//         server: ["Registration failed. Please try again later."],
//       },
//     };
//   }
// }

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
    const formattedData = {
      fullName: values.fullName,
      userEmail: values.userEmail,
      password: values.password,
      rePassword: values.rePassword,
      userSelection: values.userSelection,
    };

    console.log(JSON.stringify(formattedData)); // Log the request payload

    const response = await fetch(
      "https://api.eazetrades.ng/api/auth/submitRegistrationDetails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0", // Try adding this header
        },
        body: JSON.stringify(formattedData),
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

interface ValidationInput {
  userEmail: string;
  otp: string;
}

export async function validateOTP(input: ValidationInput) {
  try {
    // Split the OTP string into individual characters
    const [tokenOne, tokenTwo, tokenThree, tokenFour, tokenFive, tokenSix] =
      input.otp.split("");

    const apiPayload = {
      userEmail: input.userEmail,
      tokenOne,
      tokenTwo,
      tokenThree,
      tokenFour,
      tokenFive,
      tokenSix,
    };

    const response = await fetch(
      "https://api.eazetrades.ng/api/auth/validateRegistrationToken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiPayload),
      }
    );

    if (!response.ok) {
      if (response.status === 503) {
        return {
          success: false,
          error: "Server unavailable. Please try again later.",
        };
      }
      if (response.status === 400) {
        return {
          success: false,
          error: "Invalid verification code. Please try again.",
        };
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("OTP validation error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
