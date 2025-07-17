import { useForm } from "react-hook-form";
import loginImg from "../../assets/login-bg.svg";
import ReusableButton from "../../components/common/ReusableButton";
import FormInputPassword from "../../components/form/FormInputPassword";
import FormInputText from "../../components/form/FormInputText";
import type { registerFormData } from "../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation";
import { Link } from "react-router-dom";

const Signup = () => {
  const { handleSubmit, control } = useForm<registerFormData>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const submitForm = (data: registerFormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-7">
      <div className="bg-white shadow-md rounded-md pb-5 w-full max-w-md">
        <div className="flex items-center justify-between mb-6 rounded-t-md bg-indigo-500 pl-5 pt-2">
          <div className="text-white">
            <h2 className="text-xl">Free Registration</h2>
            <p>Get your free account now.</p>
          </div>
          <img
            className="max-w-full h-30"
            src={loginImg}
            alt="Login Illustration"
          />
        </div>

        <form
          onSubmit={handleSubmit(submitForm)}
          noValidate
          className="px-7 flex flex-col"
        >
          <FormInputText
            type="email"
            name="email"
            control={control}
            label="Email"
            placeholder="Enter email"
          />

          <FormInputPassword
            name="password"
            label="Password"
            control={control}
          />

          <FormInputPassword
            name="confirmPassword"
            label="Retype Password"
            control={control}
            placeholder="Enter password again"
          />

          <FormInputText
            name="phoneNumber"
            control={control}
            label="Phone no"
            placeholder="Enter phone no"
            type="tel"
          />

          <ReusableButton type="submit" className="my-5">
            Register
          </ReusableButton>
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <span>
          <Link to="/login" className="text-indigo-500 font-semibold">
            Login
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Signup;
