import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import "./index.css";
import HomePage from "./pages/HomePage";

/**
 * A React component that automatically scrolls the window to the top
 * whenever the route changes. This is useful for ensuring that users
 * start at the top of the page when navigating to a new route.
 */
function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * The `App` component serves as the root component of the application.
 * It handles navigation redirection based on the `redirectTo` query parameter
 * in the URL and renders the appropriate routes for the application.
 */
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectedPath = new URLSearchParams(location.search).get("redirectTo");

  useEffect(() => {
    if (redirectedPath) {
      navigate(redirectedPath, { replace: true });
    }
  }, [redirectedPath, navigate]);

  // Render the app based on the path
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

// Create the primary app component to render
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
