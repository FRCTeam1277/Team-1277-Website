import { ReactNode } from "react";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import SupportPage from "../pages/SupportPage";
import Season2025Page from "../pages/seasons/Season2025";

// Route configuration interface - this makes it easy to understand what properties each route should have
export interface RouteConfig {
  path: string; // URL path for the route (e.g., "/support" or "/seasons/2025")
  element: ReactNode; // React component to render for this route
  exact?: boolean; // Whether the path must match exactly
  label?: string; // Optional: Human-readable name for the route (useful for documentation)
  description?: string; // Optional: Description of what this page contains
}

/**
 * Central route configuration for the application
 *
 * TO ADD A NEW ROUTE:
 * 1. Import the page component at the top of this file
 * 2. Add a new object to this array with the required path and element properties
 *
 * Example:
 * { path: "/new-page", element: <NewPageComponent /> }
 */
export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <HomePage />,
    label: "Home Page",
    description: "Main landing page for the website",
  },
  {
    path: "/support",
    element: <SupportPage />,
    label: "Support Page",
    description: "Information about supporting the team",
  },
  {
    path: "/seasons/2025",
    element: <Season2025Page />,
    label: "2025 Season",
    description: "Details about the 2025 competition season",
  },
  // Add new routes above this line

  // This must be the last route - it catches all unmatched paths
  {
    path: "*",
    element: <NotFoundPage />,
    label: "404 Not Found",
    description: "Displayed when no matching route is found",
  },
];

export default routes;
