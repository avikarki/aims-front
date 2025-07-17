import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const loginSchema = yup.object().shape({
  // role: yup.array().min(1, "Select at least one tag"),
  username: yup.string().required("Username is required!"),
  password: yup.string().required("Password is required!"),
  rememberMe: yup.boolean().optional().default(false),
  // rememberMe: yup
  //   .boolean()
  //   .oneOf([true], "You must accept the terms")
  //   .required("This field is required"),
  // photo: yup
  //   .mixed()
  //   .required("File is required")
  //   .test("fileType", "Only image files are allowed", (value) => {
  //     return value && value.length > 0 && value[0].type.startsWith("image/");
  //   }),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email("Invalid Email!").required("Email is required!"),
  password: yup.string().required("Password is required!"),
  confirmPassword: yup
    .string()
    .required("Retype Password is required!")
    .oneOf([yup.ref("password")], "Passwords must match"),
  phoneNumber: yup
    .string()
    .required("Phone number is required!")
    .matches(phoneRegExp, "Phone number is not valid"),
});
