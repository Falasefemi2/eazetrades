/** @format */

// /** @format */

"use server";

import { z } from "zod";

export async function submitContact(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const userEmail = formData.get("userEmail") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const response = await fetch(
    "https://api.eazetrades.ng/api/contact/submitUserContactDetails",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        userEmail,
        phoneNumber,
        subject,
        message,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }

  return await response.json();
}

// interface ApiResponse {
//   status: string;
//   message: string;
//   validation: boolean;
//   result: any[];
// }

// export async function submitContact(formData: FormData): Promise<ApiResponse> {
//   const fullName = formData.get("fullName") as string;
//   const userEmail = formData.get("userEmail") as string;
//   const phoneNumber = formData.get("phoneNumber") as string;
//   const subject = formData.get("subject") as string;
//   const message = formData.get("message") as string;

//   const response = await fetch(
//     "https://api.eazetrades.ng/api/contact/submitUserContactDetails",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         fullName,
//         userEmail,
//         phoneNumber,
//         subject,
//         message,
//       }),
//     }
//   );

//   const data: ApiResponse = await response.json();

//   if (data.status !== "200") {
//     throw new Error(data.message || "Failed to submit contact form");
//   }

//   return data;
// }

// export async function submitRegistration(formData: FormData) {
//   try {
//     const response = await fetch(
//       "https://api.eazetrades.ng/api/auth/submitRegistrationDetails",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(Object.fromEntries(formData)),
//       }
//     );

//     const data = await response.json();

//     if (!response.ok) {
//       return {
//         status: response.status,
//         message: data.message || "Failed to submit registration details",
//       };
//     }

//     return {
//       status: 200,
//       message: "Registration successful",
//       data: data,
//     };
//   } catch (error) {
//     console.error("Registration error:", error);
//     return {
//       status: 500,
//       message: "An unexpected error occurred",
//     };
//   }
// }

// export async function submitLogin(formData: FormData) {
//   const userEmail = formData.get("userEmail") as string;
//   const password = formData.get("password") as string;

//   const response = await fetch(
//     "https://api.eazetrades.ng/api/auth/submitLoginDetails",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userEmail,
//         password,
//       }),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to submit contact form");
//   }

//   return await response.json();
// }

export async function submitLogin(formData: FormData) {
  const userEmail = formData.get("userEmail") as string;
  const password = formData.get("password") as string;

  // Email and password validation remains the same...

  try {
    const response = await fetch(
      "https://api.eazetrades.ng/api/auth/submitLoginDetails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          password,
        }),
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}

const ForgetPasswordSchema = z.object({
  userEmail: z.string().email("Invalid email address"),
});

export async function submitForgetPassword(formData: FormData) {
  const validatedFields = ForgetPasswordSchema.safeParse({
    userEmail: formData.get("userEmail"),
  });

  if (!validatedFields.success) {
    return { error: "Invalid email address" };
  }

  const { userEmail } = validatedFields.data;

  try {
    const response = await fetch(
      "https://api.eazetrades.ng/api/auth/submitPasswordResetDetails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail }),
      }
    );

    const data = await response.json();

    if (response.ok && data.status === "200") {
      return { success: "Password reset email sent successfully" };
    } else {
      return { error: data.message || "Failed to send password reset email" };
    }
  } catch (error) {
    console.error("Password reset error:", error);
    return { error: "An unexpected error occurred" };
  }
}

type ApiResponse = {
  status: string;
  message: string;
  validation: boolean;
  result: any[];
};

const SignUpSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    userEmail: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    rePassword: z.string(),
    userSelction: z.enum(["buyer", "seller"]),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["rePassword"],
  });

type SignUpData = z.infer<typeof SignUpSchema>;

export async function submitRegistrationDetails(formData: FormData): Promise<{
  success: boolean;
  data?: ApiResponse;
  error?: string | z.ZodError;
}> {
  try {
    const validatedFields = SignUpSchema.parse({
      fullName: formData.get("fullName"),
      userEmail: formData.get("userEmail"),
      password: formData.get("password"),
      rePassword: formData.get("rePassword"),
      userSelction: formData.get("userSelction"),
    });

    console.log({ validatedFields });

    const response = await fetch(
      "https://api.eazetrades.ng/api/auth/submitRegistrationDetails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFields),
      }
    );

    const data: ApiResponse = await response.json();
    console.log({ data });

    if (data.status !== "200") {
      throw new Error(data.message || "An error occurred during registration");
    }

    return { success: true, data };
  } catch (error) {
    console.error({ error });
    if (error instanceof z.ZodError) {
      return { success: false, error };
    }
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}
