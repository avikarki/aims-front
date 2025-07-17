import { useForm, type SubmitHandler } from "react-hook-form";
import type { loginFormData } from "../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from "../../features/api/apiSlice";
import { useAppDispatch } from "../../app/hooks";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { loginSchema } from "../../validation";
import loginImg from "../../assets/login-bg.svg";
import FormInputText from "../../components/form/FormInputText";
import FormInputPassword from "../../components/form/FormInputPassword";
import FormInputCheckbox from "../../components/form/FormInputCheckbox";
import ReusableButton from "../../components/common/ReusableButton";
import Spinner from "../../components/utility/Spinner";

const Login = () => {
  const { control, handleSubmit } = useForm<loginFormData>({
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    resolver: yupResolver(loginSchema),
  });
  const [login, { isLoading: logging }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitForm: SubmitHandler<loginFormData> = async (data) => {
    try {
      const { username, password, rememberMe } = data;
      const credentials = { username, password };
      const response = await login(credentials).unwrap();
      dispatch(setCredentials({ ...response, persist: rememberMe }));
      navigate("/");
      toast.success("Logged in!");
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
      console.error("Login error: ", err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-7">
        <div className="bg-white shadow-md rounded-md p-5 w-full max-w-md">
          <div className="flex items-center justify-between mb-6 bg-indigo-500 pl-5 pt-2">
            <div className="text-white">
              <h2 className="text-xl">Welcome back!</h2>
              <p>Login to your account now</p>
            </div>
            <img
              className="max-w-full h-30"
              src={loginImg}
              alt="Login Illustration"
            />
          </div>

          <form
            onSubmit={handleSubmit(submitForm)}
            className="px-2 flex flex-col"
          >
            <FormInputText
              name="username"
              label="Username"
              control={control}
              placeholder="Enter Username"
            />
            <FormInputPassword
              name="password"
              label="Password"
              control={control}
            />
            <FormInputCheckbox
              name="rememberMe"
              label="Remember me"
              control={control}
            />
            <ReusableButton type="submit" disabled={logging}>
              {logging ? (
                <>
                  <Spinner size="w-5 h-5" color="border-white" /> Logging in...
                </>
              ) : (
                "Log In"
              )}
            </ReusableButton>
          </form>

          <p className="text-indigo-500 text-center mt-5 font-semibold">
            <a href="#">Forgot your password?</a>
          </p>
        </div>
        <p>
          Don't have an account?{" "}
          <span>
            <Link to="/register" className="text-indigo-500 font-semibold">
              Register now
            </Link>
          </span>
        </p>
        <p>
          Link to demo{" "}
          <span>
            <Link to="/" className="text-indigo-500 font-semibold">
              Click Here
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
