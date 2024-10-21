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

export const ContactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  userEmail: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(11, "Phone number must be at least 11 characters"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactInput = z.infer<typeof ContactSchema>;
