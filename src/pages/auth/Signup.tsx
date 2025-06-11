import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loginBg from "../../assets/login-bg.svg";
import { Link } from "react-router-dom";
import PasswordField from "../../components/PasswordField";
import TextField from "../../components/TextField";
import { useForm } from "react-hook-form";
// import { RegisterForm } from "../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation";
import type { registerFormData } from "../../types";

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const submitForm = (data: registerFormData) => {
    console.log(data);
  };

  return (
    <>
      {/* <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="chase-dot"></div>
            ))}
          </div>
        </div>
      </div> */}

      <div
        className="account-pages pt-sm-5"
        style={{
          height: "100vh",
          backgroundColor: "#F8F8FB",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden" border="light">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={8}>
                      <div className="text-white p-4">
                        <h5 className="text-white">Free Register</h5>
                        <p>Get your free account now.</p>
                      </div>
                    </Col>
                    <Col xs={4} className="align-self-end">
                      <img src={loginBg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>

                <Card.Body className="pt-0">
                  <div className="p-2 pt-4">
                    <Form noValidate onSubmit={handleSubmit(submitForm)}>
                      <TextField
                        type="email"
                        name="email"
                        control={control}
                        label="Email"
                        placeholder="Enter email"
                        required
                      />

                      <PasswordField
                        name="password"
                        label="Password"
                        control={control}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                      />

                      <PasswordField
                        name="confirmPassword"
                        label="Retype Password"
                        control={control}
                        showPassword={showConfirmPassword}
                        setShowPassword={setShowConfirmPassword}
                      />

                      <TextField
                        name="phoneNumber"
                        control={control}
                        label="Phone no"
                        placeholder="Enter phone no"
                        type="tel"
                        required
                      />

                      <div className="mt-4 d-grid">
                        <Button variant="primary" type="submit">
                          Register
                        </Button>
                      </div>

                      <p className="mt-4 mb-0">
                        Already have an account?{" "}
                        <Link to="/login" className="fw-medium text-primary">
                          Login
                        </Link>
                      </p>
                    </Form>
                  </div>
                </Card.Body>
              </Card>

              <div className="mt-4 text-center">
                <p>
                  &copy; {new Date().getFullYear()} AIMS. All rights reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Signup;

// const Signup = () => {
//   return (
//     <>
//       <div id="preloader">
//         <div id="status">
//           <div className="spinner-chase">
//             <div className="chase-dot"></div>
//             <div className="chase-dot"></div>
//             <div className="chase-dot"></div>
//             <div className="chase-dot"></div>
//             <div className="chase-dot"></div>
//             <div className="chase-dot"></div>
//           </div>
//         </div>
//       </div>
//       <div className="account-pages pt-sm-5">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-8 col-lg-6 col-xl-5">
//               <div className="card overflow-hidden">
//                 <div className="bg-primary bg-soft">
//                   <div className="row">
//                     <div className="col-8">
//                       <div className="text-white p-4">
//                         <h5 className="text-white">Free Register</h5>
//                         <p>Get your free account now.</p>
//                       </div>
//                     </div>
//                     <div className="col-4 align-self-end">
//                       <img
//                         src="assets/images/login-bg.svg"
//                         alt=""
//                         className="img-fluid"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card-body pt-0">
//                   <div className="p-2 pt-4">
//                     <form
//                       className="needs-validation"
//                       noValidate
//                       action="signup-2.html"
//                     >
//                       <div className="mb-3">
//                         <label htmlFor="useremail" className="form-label">
//                           Email
//                         </label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           placeholder="Enter email"
//                           required
//                         />
//                         <div className="invalid-feedback">
//                           Please Enter Email
//                         </div>
//                       </div>

//                       <div className="mb-3">
//                         <label className="form-label">Password</label>
//                         <div className="input-group auth-pass-inputgroup">
//                           <input
//                             type="password"
//                             id="password"
//                             className="form-control"
//                           />
//                           <button
//                             className="toggle-password btn btn-light"
//                             type="button"
//                           >
//                             <i className="fa-regular fa-eye-slash"></i>
//                           </button>
//                         </div>
//                         <div className="invalid-feedback">
//                           Please Enter Password
//                         </div>
//                       </div>

//                       <div className="mb-3">
//                         <label className="form-label">Retype Password</label>
//                         <div className="input-group auth-pass-inputgroup">
//                           <input
//                             type="password"
//                             id="confirm_password"
//                             className="form-control"
//                           />
//                           <button
//                             className="toggle-password btn btn-light"
//                             type="button"
//                           >
//                             <i className="fa-regular fa-eye-slash"></i>
//                           </button>
//                         </div>
//                         <div className="invalid-feedback">
//                           Please Re-type Password
//                         </div>
//                       </div>

//                       <div className="mb-3">
//                         <label htmlFor="phone number" className="form-label">
//                           Phone no
//                         </label>
//                         <input
//                           type="number"
//                           className="form-control"
//                           placeholder="Enter phone no"
//                           required
//                         />
//                         <div className="invalid-feedback">
//                           Please Enter Phone no
//                         </div>
//                       </div>

//                       <div className="mt-4 d-grid">
//                         <button
//                           className="btn btn-primary waves-effect waves-light"
//                           type="submit"
//                         >
//                           Register
//                         </button>
//                       </div>
//                       <p className="mt-4 mb-0">
//                         Already have an account ?{" "}
//                         <a href="login.html" className="fw-medium text-primary">
//                           {" "}
//                           Signup
//                         </a>{" "}
//                       </p>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-4 text-center">
//                 <div>
//                   <p>
//                     © <script>document.write(new Date().getFullYear())</script>{" "}
//                     AIMS. All rights reserved.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;
