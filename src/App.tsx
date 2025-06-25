import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import type { FallbackProps } from "react-error-boundary";
import { Stack } from "react-bootstrap";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";

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
    <Stack
      direction="horizontal"
      className="justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Loader variant="primary" height="50px" width="50px" borderWidth="5px" />
    </Stack>
  );
}

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <Suspense fallback={<RootFallback />}>
        <RouterProvider router={router} />
        <ToastContainer />
      </Suspense>
    </ErrorBoundary>
  );
}

// export default function App() {
//   return <TestNavbar />;
// }

// App.tsx
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Container, Navbar, Nav, Button } from "react-bootstrap";
// import { useShortcut } from "./pages/testPages/centralized/useShortcuts";
// import { SHORTCUTS } from "./pages/testPages/centralized/shortcuts";
// import HelpModal from "./pages/testPages/centralized/HelpModal";
// import HomePage from "./pages/testPages/centralized/HomePage";
// import DashboardPage from "./pages/testPages/centralized/DashboardPage";
// import ProfilePage from "./pages/testPages/centralized/ProfilePage";

// const App: React.FC = () => {
//   const [showHelp, setShowHelp] = useState(false);

//   // Register global help shortcut
//   useShortcut("MODALS", "HELP", () => setShowHelp(true));

//   return (
//     <Router>
//       <div className="d-flex flex-column min-vh-100">
//         <Navbar bg="dark" variant="dark" expand="lg">
//           <Container>
//             <Navbar.Brand href="/">Shortcut App</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto">
//                 <Nav.Link href="/">Home</Nav.Link>
//                 <Nav.Link href="/dashboard">Dashboard</Nav.Link>
//                 <Nav.Link href="/profile">Profile</Nav.Link>
//               </Nav>
//               <Button
//                 variant="outline-light"
//                 onClick={() => setShowHelp(true)}
//                 className="ms-2"
//               >
//                 Help ({SHORTCUTS.MODALS.HELP.key})
//               </Button>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//         <Container className="flex-grow-1 py-4">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/dashboard" element={<DashboardPage />} />
//             <Route path="/profile" element={<ProfilePage />} />
//           </Routes>
//         </Container>

//         <footer className="bg-dark text-white py-3">
//           <Container>
//             <div className="text-center">
//               Press '{SHORTCUTS.MODALS.HELP.key}' for help
//             </div>
//           </Container>
//         </footer>

//         <HelpModal show={showHelp} onHide={() => setShowHelp(false)} />
//       </div>
//     </Router>
//   );
// };

// export default App;
