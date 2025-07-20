import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import type { FallbackProps } from "react-error-boundary";
import { ToastContainer } from "react-toastify";
import Spinner from "./components/utility/Spinner";
import "./App.css";

function RootErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <h2>Something went wrong</h2>
      <p>{error?.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function RootFallback() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner />
    </div>
  );
}
export default function App() {
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <Suspense fallback={<RootFallback />}>
        <div className="font-primary text-sm text-text">
          <RouterProvider router={router} />
          <ToastContainer />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
