/** @format */

// /** @format */

"use server";

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

interface ApiResponse {
  status: string;
  message: string;
  validation: boolean;
  result: any[];
}

export async function submitRegistration(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const userEmail = formData.get("userEmail") as string;
  const password = formData.get("password") as string;
  const rePassword = formData.get("rePassword") as string;
  const userSelection = formData.get("userSelection") as "buyer" | "supplier";

  const response = await fetch(
    "https://api.eazetrades.ng/api/auth/submitRegistrationDetails",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        userEmail,
        password,
        rePassword,
        userSelection,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }

  return await response.json();
}

export async function submitLogin(formData: FormData) {
  const userEmail = formData.get("userEmail") as string;
  const password = formData.get("password") as string;

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

  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }

  return await response.json();
}
