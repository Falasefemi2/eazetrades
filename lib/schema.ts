/** @format */

import { z } from "zod";

export const RegistrationSchema = z
  .object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    userEmail: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    rePassword: z.string(),
    userSelection: z.enum(["seller", "buyer"], {
      required_error: "Please select a user type",
    }),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["rePassword"],
  });

export type RegistrationInput = z.infer<typeof RegistrationSchema>;
