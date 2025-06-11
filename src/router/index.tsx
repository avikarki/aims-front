import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ModalOverModal from "../centralizedTest/ModalOverModal";

const Login = lazy(() => import("../pages/auth/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const ProtectedRoute = lazy(() => import("../components/ProtectedRoute"));
const UserManagement = lazy(() => import("../pages/UserManagement"));
const AssignRoles = lazy(() => import("../pages/AssignRoles"));
const RoleGroups = lazy(() => import("../pages/RoleGroups"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const HomePage = lazy(() => import("../pages/testPages/HomePage"));
// const Page2 = lazy(() => import("../pages/testPages/Page2"));
const Client = lazy(() => import("../pages/testPages/Client"));
const EmiCalculator = lazy(() => import("../pages/EmiCalculator"));
// const BilingualDateField = lazy(
//   () => import("../components/bilingualdate/BilingualDateField")
// );
const CalculatorScreen = lazy(() => import("../components/CalculatorScreen"));
// const Page1 = lazy(() => import("../pages/testPages/Client"));
const BilingualDatePicker = lazy(
  () => import("../components/BilingualDatePicker")
);
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
    element: <Login />,
    loader: () => setTitle("Login"),
  },
  {
    path: "/register",
    element: <Signup />,
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
    element: <HomePage />,
    loader: () => setTitle("HomePage"),
  },
  {
    path: "/demo/client",
    element: <Client />,
    loader: () => setTitle("Client"),
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
