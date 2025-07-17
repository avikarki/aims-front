import { type JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

interface AuthRedirectProps {
  children: JSX.Element;
  redirectPath?: string;
}

export default function AuthRedirect({
  children,
  redirectPath = "/",
}: AuthRedirectProps) {
  const location = useLocation();
  const token = useAppSelector((state) => state.auth.accessToken);

  if (token) {
    return (
      <Navigate
        to={location.state?.from || redirectPath}
        replace
        state={{ redirectedFrom: location.pathname }}
      />
    );
  }

  return children;
}

// import { Navigate, useLocation } from "react-router-dom";
// import { useTokenValidation } from "../hooks/useTokenValidation";
// import Loader from "./Loader";

// export default function AuthRedirect({
//   children,
//   redirectPath = "/demo/homepage",
// }: {
//   children: React.ReactNode;
//   redirectPath?: string;
// }) {
//   const location = useLocation();
//   const { access: isAccessValid, refresh: isRefreshValid } =
//     useTokenValidation();

//   if (isAccessValid === null || isRefreshValid === null) {
//     return <Loader variant="primary" />;
//   }

//   // If either token is valid, redirect away from auth pages
//   if (isAccessValid || isRefreshValid) {
//     return <Navigate to={location.state?.from || redirectPath} replace />;
//   }

//   return <>{children}</>;
// }
