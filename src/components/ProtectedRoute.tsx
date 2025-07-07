import type { JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

// function isTokenValid(token: string | null): boolean {
//   if (!token) return false;

//   try {
//     const payload = JSON.parse(atob(token.split(".")[1]));
//     console.log("Expiration time: ", payload.exp);
//     return payload.exp * 1000 > Date.now();
//   } catch {
//     return false;
//   }
// }

export default function ProtectedRoute({
  children,
  requiredRoles = [],
}: {
  children: JSX.Element;
  requiredRoles?: string[];
}) {
  const location = useLocation();
  const token = useAppSelector((state) => state.auth.accessToken);
  const userRoles = JSON.parse(localStorage.getItem("roles") || "[]");

  const hasAccess =
    requiredRoles.length === 0 ||
    requiredRoles.some((role) => userRoles.includes(role));

  // console.log("Token: ", !token && !isTokenValid(token));

  if (!token) {
    console.warn("[ProtectedRoute] No token found, redirecting to login");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if (!isTokenValid(token)) {
  //   console.error("[ProtectedRoute] Invalid token format");
  //   return <Navigate to="/login" replace />;
  // }

  if (!hasAccess) {
    console.warn(
      `[ProtectedRoute] Role check failed. Required: ${requiredRoles}, Has: ${userRoles}`
    );
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

// // export default function ProtectedRoute({
// //   children,
// //   requiredRoles = [],
// // }: {
// //   children: JSX.Element;
// //   requiredRoles?: string[];
// // }) {
// //   const token = useAppSelector((state) => state.auth.accessToken);
// //   // const token =
// //   //   JSON.parse(localStorage.getItem("auth") as any)?.accessToken ||
// //   //   JSON.parse(sessionStorage.getItem("auth") as any)?.accessToken;
// //   const userRoles = JSON.parse(localStorage.getItem("roles") || "[]");

// //   const hasAccess =
// //     requiredRoles.length === 0 ||
// //     requiredRoles.some((role) => userRoles.includes(role));

// //   return token && hasAccess ? children : <Navigate to="/login" replace />;
// // }

// // interface ProtectedRouteProps {
// //   children: JSX.Element;
// //   requiredRoles?: string[];
// // }

// // export default function ProtectedRoute({
// //   children,
// //   requiredRoles = []
// // }: ProtectedRouteProps) {
// //   const location = useLocation();
// //   const token = useAppSelector(selectCurrentToken);

// //   // 1. Check token in Redux (primary source)
// //   const authData = JSON.parse(localStorage.getItem("auth") || "null") ||
// //                   JSON.parse(sessionStorage.getItem("auth") || "null");

// //   // 2. Combined check (Redux + storage fallback)
// //   const effectiveToken = token || authData?.token;

// //   // 3. DEBUG: Add these logs to identify the issue
// //   console.log("[ProtectedRoute] Current token:", effectiveToken);
// //   console.log("[ProtectedRoute] Auth data:", authData);

// //   if (!effectiveToken) {
// //     console.warn("[ProtectedRoute] No token found, redirecting to login");
// //     return <Navigate to="/login" state={{ from: location }} replace />;
// //   }

// //   // 4. Verify token structure (JWT format)
// //   const isJWTValid = (token: string) => {
// //     try {
// //       const parts = token.split('.');
// //       return parts.length === 3 &&
// //              !!JSON.parse(atob(parts[1]));
// //     } catch {
// //       return false;
// //     }
// //   };

// //   if (!isJWTValid(effectiveToken)) {
// //     console.error("[ProtectedRoute] Invalid token format");
// //     return <Navigate to="/login" replace />;
// //   }

// //   // 5. Role check (if required)
// //   const userRoles = authData?.user?.roles || [];
// //   const hasRequiredRoles = requiredRoles.length === 0 ||
// //                          requiredRoles.some(r => userRoles.includes(r));

// //   if (!hasRequiredRoles) {
// //     console.warn(`[ProtectedRoute] Role check failed. Required: ${requiredRoles}, Has: ${userRoles}`);
// //     return <Navigate to="/unauthorized" replace />;
// //   }

// //   return children;
// // }

// import { Navigate, useLocation } from "react-router-dom";
// import { useAppSelector } from "../app/hooks";
// import { useTokenValidation } from "../hooks/useTokenValidation";
// import { useRefreshTokenMutation } from "../features/api/apiSlice";
// import Loader from "./Loader";
// import { selectTokens } from "../features/auth/authSlice";

// export default function ProtectedRoute({
//   children,
//   requiredRoles = [],
// }: {
//   children: React.ReactNode;
//   requiredRoles?: string[];
// }) {
//   const location = useLocation();
//   const { accessToken, refreshToken } = useAppSelector(selectTokens);
//   const { access: isAccessValid, refresh: isRefreshValid } =
//     useTokenValidation();
//   // const userRoles = useAppSelector((state) => state.auth.user?.roles) || [];
//   const userRoles = JSON.parse(localStorage.getItem("roles") || "[]");

//   const [triggerRefresh] = useRefreshTokenMutation();

//   // Loading state while validating
//   if (isAccessValid === null || isRefreshValid === null) {
//     return <Loader variant="primary" />;
//   }

//   // Handle token refresh flow
//   if (!isAccessValid && isRefreshValid && refreshToken) {
//     const handleRefresh = async () => {
//       try {
//         await triggerRefresh({ refreshToken }).unwrap();
//         // After successful refresh, the component will re-render with new tokens
//         return null; // Stay on current render
//       } catch {
//         return <Navigate to="/login" state={{ from: location }} replace />;
//       }
//     };
//     return handleRefresh();
//   }

//   // If both tokens are invalid
//   if (!isAccessValid && !isRefreshValid) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // Check roles if needed
//   const hasAccess =
//     requiredRoles.length === 0 ||
//     requiredRoles.some((role) => userRoles.includes(role));

//   if (!hasAccess) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return <>{children}</>;
// }
