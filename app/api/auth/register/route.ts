/** @format */

// app/api/auth/register/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, userEmail, password, rePassword, userSelection } = body;

    // Basic validation (to ensure required fields are present)
    if (!fullName || !userEmail || !password || !rePassword || !userSelection) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // Perform any logic or external API calls here
    const response = await fetch(
      "https://apiazeetrades.ng/api/auth/submitRegistrationDetails",
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
      // Handle the error response from the external API
      const errorData = await response.json();
      return NextResponse.json(
        {
          message: errorData.message || "Failed to submit registration details",
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Return success response
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in POST /api/auth/register:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
