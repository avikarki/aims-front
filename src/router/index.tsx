import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthRedirect from "../components/common/AuthRedirect";
import ProtectedRoute from "../components/common/ProtectedRoute";
import ToggleModal from "../pages/demo/ToggleModal";

const Login = lazy(() => import("../pages/auth/Login"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const HomePage = lazy(() => import("../pages/demo/HomePage"));
const Post = lazy(() => import("../pages/demo/Post"));
const EmiCalculator = lazy(() => import("../pages/demo/EmiCalculator"));
const BilingualDatePicker = lazy(
  () => import("../pages/demo/BilingualDatePicker")
);
const CalculatorScreen = lazy(() => import("../pages/demo/CalculatorScreen"));

const setTitle = (title: string) => {
  document.title = `${title} - AIMS` || "AIMS";
  return null;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AuthRedirect>
        <Login />
      </AuthRedirect>
    ),
    loader: () => setTitle("Login"),
  },
  {
    path: "/register",
    element: (
      <AuthRedirect>
        <Signup />
      </AuthRedirect>
    ),
    loader: () => setTitle("Registration"),
  },

  // Start of Demo Pages Routes
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
    loader: () => setTitle("HomePage"),
  },
  {
    path: "/demo/post",
    element: <Post />,
    loader: () => setTitle("Posts"),
  },
  {
    path: "/demo/toggleModal",
    element: <ToggleModal />,
    loader: () => setTitle("Toggle Modal"),
  },
  {
    path: "/demo/calculator",
    element: <CalculatorScreen />,
    loader: () => setTitle("Calculator"),
  },
  {
    path: "/demo/datepicker",
    element: <BilingualDatePicker />,
    loader: () => setTitle("Date Picker"),
  },
  {
    path: "/demo/emicalculator",
    element: <EmiCalculator />,
    loader: () => setTitle("EMI Calculator"),
  },
  //End of Demo Pages Routes
]);

export default router;
