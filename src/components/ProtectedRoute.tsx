import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  requiredRoles = [],
}: {
  children: JSX.Element;
  requiredRoles?: string[];
}) {
  const token = localStorage.getItem("token");
  const userRoles = JSON.parse(localStorage.getItem("roles") || "[]");

  const hasAccess =
    requiredRoles.length === 0 ||
    requiredRoles.some((role) => userRoles.includes(role));

  return token && hasAccess ? children : <Navigate to="/login" />;
}
