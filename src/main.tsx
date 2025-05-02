import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import routes from "./routes/routesConfig";
import Layout from "./components/Layout";

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
      // Only navigate if it's a valid path (starts with /)
      if (redirectedPath.startsWith("/")) {
        navigate(redirectedPath, { replace: true });
      } else {
        console.warn("Invalid redirect path:", redirectedPath);
      }
    }
  }, [redirectedPath, navigate]);

  // Render the app based on the routes defined in routesConfig.tsx
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={`route-${index}-${route.path}`} path={route.path} element={route.element} />
          ))}
        </Route>
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
