import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loginBg from "../../assets/login-bg.svg";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import TextField from "../../components/TextField";
import { Link, useNavigate } from "react-router-dom";
import PasswordField from "../../components/PasswordField";
// import { loginForm } from "../../types";
import { loginSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckboxField from "../../components/CheckboxField";
import type { loginFormData } from "../../types";
import { useLoginMutation } from "../../features/api/apiSlice";
import { useAppDispatch } from "../../app/hooks";
import { setCredentials } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import ButtonLoader from "../../components/ButtonLoader";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
      console.log(data);
      const { username, password, rememberMe } = data;
      const credentials = { username, password };
      const response = await login(credentials).unwrap();
      console.log("Login Response: ", response);
      dispatch(setCredentials({ ...response, persist: rememberMe }));
      navigate("/demo/homepage");
      toast.success("Logged in!");
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
      console.error("Login error: ", err);
    }
  };

  return (
    <>
      <div
        className="account-pages pt-sm-5"
        style={{
          height: "100vh",
          display: "flex",
          // backgroundColor: "#F8F8FB",
          alignItems: "center",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xl={5} lg={6} md={8}>
              <Card className="overflow-hidden">
                <Card.Body>
                  <div className="bg-primary bg-soft">
                    <Row>
                      <Col xs={8}>
                        <div className="text-white p-4">
                          <h5 className="text-white">Welcome back!</h5>
                          <p>Login to your account now.</p>
                        </div>
                      </Col>
                      <Col xs={4} className="align-self-end">
                        <img src={loginBg} alt="" className="img-fluid" />
                      </Col>
                    </Row>
                  </div>

                  <div className="p-2 pt-3">
                    <Form
                      noValidate
                      className="form-horizontal"
                      onSubmit={handleSubmit(submitForm)}
                    >
                      <TextField
                        type="text"
                        name="username"
                        control={control}
                        label="Username"
                        placeholder="Enter username"
                        required
                      />

                      <PasswordField
                        name="password"
                        label="Password"
                        control={control}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                      />
                      <CheckboxField
                        name="rememberMe"
                        control={control}
                        label="Remember me"
                        required
                      />

                      <div className="mt-3 d-grid">
                        <Button
                          variant="primary"
                          type="submit"
                          disabled={logging}
                        >
                          {logging ? (
                            <ButtonLoader text="Logging In" />
                          ) : (
                            "Log In"
                          )}
                        </Button>
                      </div>

                      <div className="mt-4 text-center">
                        <a href="forget.html" className="text-muted">
                          Forgot your password?
                        </a>
                      </div>
                    </Form>
                  </div>
                </Card.Body>
              </Card>

              <div className="mt-4 text-center">
                <p>
                  Don't have an account?{" "}
                  <Link to="/register" className="fw-medium text-primary">
                    Register now.
                  </Link>
                </p>
              </div>
              <div className="mt-4 text-center">
                <p>
                  Please click on the link to view demo{" "}
                  <Link to="/demo/homepage" className="fw-medium text-primary">
                    Click Here
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
