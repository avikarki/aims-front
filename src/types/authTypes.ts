import * as yup from "yup";
import { loginSchema, registerSchema } from "../validation";

// export type loginForm = {
//   username: string;
//   password: string;
//   rememberMe?: boolean;
// };

// export type RegisterForm = {
//   email: string;
//   password: string;
//   confirmPassword: string;
//   phoneNumber: string;
// };

export type loginFormData = yup.InferType<typeof loginSchema>;
export type registerFormData = yup.InferType<typeof registerSchema>;
