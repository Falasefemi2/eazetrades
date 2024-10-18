/** @format */

"use server";

import axios from "axios"; // Import axios
import { RegistrationInput, RegistrationSchema } from "@/lib/schema";

export async function registerUser(values: RegistrationInput) {
  const validated = RegistrationSchema.safeParse(values);

  console.log({ validated });

  if (!validated.success) {
    return {
      status: 400,
      message: "Validation failed",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  console.log("Request payload:", values); // Log the request payload

  try {
    const response = await axios.post(
      "https://api.eazetrades.ng/api/auth/submitRegistrationDetails",
      {
        fullName: values.fullName,
        userEmail: values.userEmail,
        password: values.password,
        rePassword: values.rePassword,
        userSelection: values.userSelection,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log({ response });

    return {
      status: response.status,
      message: "Registration successful",
    };
  } catch (error) {
    console.error("Error during registration:", error); // Log the error
    // Check if the error is an Axios error
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error during registration:",
        error.response?.data || error.message
      );
      return {
        status: error.response?.status || 500,
        message: error.response?.data.message || "Registration failed",
        errors: error.response?.data.errors || {
          server: ["Unknown error occurred"],
        },
      };
    } else {
      console.error("Error during registration:", error); // Log the error
      return {
        status: 500,
        message: "Something went wrong",
        errors: { server: ["Internal server error"] },
      };
    }
  }
}
