/** @format */

"use server";

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

  try {
    const response = await fetch(
      "https://api.example.org/api/auth/submitRegistrationDetails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: values.fullName,
          userEmail: values.userEmail,
          password: values.password,
          rePassword: values.rePassword,
          userSelection: values.userSelection,
        }),
      }
    );

    const data = await response.json();
    console.log({ data });

    if (!response.ok) {
      return {
        status: response.status,
        message: "Registration failed",
        errors: data.errors,
      };
    }

    return {
      status: 200,
      message: "Registration successful",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong",
      errors: { server: ["Internal server error"] },
    };
  }
}
