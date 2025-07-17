import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthRedirect from "../components/common/AuthRedirect";

const Login = lazy(() => import("../pages/auth/Login"));
const Dashboard = lazy(() => import("../pages/demo/Dashboard"));
const ProtectedRoute = lazy(
  () => import("../components/common/ProtectedRoute")
);
const UserManagement = lazy(() => import("../pages/UserManagement"));
const AssignRoles = lazy(() => import("../pages/AssignRoles"));
const RoleGroups = lazy(() => import("../pages/RoleGroups"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const HomePage = lazy(() => import("../pages/demo/HomePage"));
// const Page2 = lazy(() => import("../pages/testPages/Page2"));
const Post = lazy(() => import("../pages/demo/Post"));
const EmiCalculator = lazy(() => import("../pages/demo/EmiCalculator"));
// const BilingualDateField = lazy(
//   () => import("../components/bilingualdate/BilingualDateField")
// );
const CalculatorScreen = lazy(() => import("../pages/demo/CalculatorScreen"));
// const Page1 = lazy(() => import("../pages/testPages/Post"));
const BilingualDatePicker = lazy(
  () => import("../components/BilingualDatePicker")
);
const ModalOverModal = lazy(() => import("../components/ModalOverModal"));
// const ExampleComponent = lazy(
//   () => import("../pages/testPages/centralized/ExampleComponent")
// );

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
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
    loader: () => setTitle("Dashboard"),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    loader: () => setTitle("Dashboard"),
  },
  {
    path: "/manageuser",
    element: (
      <ProtectedRoute requiredRoles={["AccountEditor"]}>
        <UserManagement />
      </ProtectedRoute>
    ),
    loader: () => setTitle("Manage User"),
  },
  {
    path: "/managerole",
    element: (
      <ProtectedRoute requiredRoles={["AccountEditor"]}>
        <AssignRoles />
      </ProtectedRoute>
    ),
    loader: () => setTitle("Manage Roles"),
  },
  {
    path: "/managegroup",
    element: (
      <ProtectedRoute requiredRoles={["AccountEditor"]}>
        <RoleGroups />
      </ProtectedRoute>
    ),
    loader: () => setTitle("Manage Group"),
  },

  // For Demo purposes
  {
    path: "/demo/calculator",
    element: <CalculatorScreen />,
    loader: () => setTitle("Calculator"),
  },
  {
    path: "/demo/homepage",
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
    element: <ModalOverModal />,
    loader: () => setTitle("Toggle Modal"),
  },
  {
    path: "/demo/datepicker",
    element: <BilingualDatePicker />,
    // element: <BilingualDateField />,
    loader: () => setTitle("Date Picker"),
  },
  {
    path: "/demo/emicalculator",
    element: <EmiCalculator />,
    loader: () => setTitle("EMI Calculator"),
  },
]);

export default router;
