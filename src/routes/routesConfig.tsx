import { ReactNode } from "react";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import SupportPage from "../pages/SupportPage";
import Season2025Page from "../pages/seasons/Season2025";
import TestingPage from "../pages/templates/TestingPage";
import ContactPage from "../pages/ContactPage";
import MembersPage from "../pages/members/MembersPage";
import SafetyPage from "../pages/members/SafetyPage";
import CalendarPage from "../pages/members/CalendarPage";
import MentorSignup from "../pages/members/MentorSignup";
import StudentSignup from "../pages/members/StudentSignup";
import ProgrammingPage from "../pages/members/ProgrammingPage";
import MemberShopPage from "../pages/shop/MemberShop";
import RobotCodingGuide from "../pages/members/RobotCodingGuide";
import JavaResources from "../pages/members/JavaResources";
import SoftwareTools from "../pages/members/SoftwareTools";
import HomePage from "../pages/HomePage";
import HashGeneratorPage from "../pages/templates/HashGeneratorPage";

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
  // >>>>>>>>>>>>> START OF ROUTES <<<<<<<<<<<<<<

  // ========================================================
  // Season-specific routes
  // These routes are specific to a particular season or competition year
  // They are organized under the "/seasons" path for clarity
  // ========================================================

  {
    path: "/seasons/2025",
    element: <Season2025Page />,
    label: "2025 Season",
    description: "Details about the 2025 competition season",
  },

  // ========================================================
  // General routes
  // These routes are not specific to any season or competition year
  // ========================================================

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
    path: "/about",
    element: <AboutPage />,
    label: "About Us Page",
    description: "Information about the team and its mission",
  },
  {
    path: "/contact",
    element: <ContactPage />,
    label: "Contact Page",
    description: "Contact information and form for inquiries",
  },
  {
    path: "/shop",
    element: <MemberShopPage />,
    label: "Member Shop Page",
    description: "Shop page for team members to order merchandise",
  },

  // ========================================================
  // Members routes
  // These routes are specific to members and their resources
  // ========================================================

  {
    path: "/members",
    element: <MembersPage />,
    label: "Members Page",
    description: "Main members landing page",
  },
  {
    path: "/members/safety",
    element: <SafetyPage />,
    label: "Safety Page",
    description: "Safety information for members",
  },
  {
    path: "/members/calendar",
    element: <CalendarPage />,
    label: "Calendar Page",
    description: "Team calendar (Google Calendar embed)",
  },
  {
    path: "/members/mentor-signup",
    element: <MentorSignup />,
    label: "Mentor Signup Page",
    description: "Signup info and links for mentors",
  },
  {
    path: "/members/student-signup",
    element: <StudentSignup />,
    label: "Student Signup Page",
    description: "Signup info and links for students",
  },
  {
    path: "/members/programming",
    element: <ProgrammingPage />,
    label: "Programming Page",
    description: "Programming resources for members",
  },
  {
    path: "/members/programming/robot-coding-guide",
    element: <RobotCodingGuide />,
    label: "Robot Coding Guide",
    description: "Guide for coding the robot",
  },
  {
    path: "/members/programming/java-resources",
    element: <JavaResources />,
    label: "Java Resources",
    description: "Resources for learning Java",
  },
  {
    path: "/members/programming/software-tools",
    element: <SoftwareTools />,
    label: "Software Tools",
    description: "Resources for software tools used in programming",
  },

  // >>>>>>>>>>>>> END OF ROUTES <<<<<<<<<<<<<<

  // ========================================================
  // Other routes
  // ========================================================

  {
    path: "/testing",
    element: <TestingPage />,
    label: "Testing Page",
    description: "This is a placeholder for testing purposes",
  },
  {
    path: "/admin/hash",
    element: <HashGeneratorPage />,
    label: "Hash Generator",
    description: "Generate password hashes for client-side use with obfuscation.",
  },

  // This must be the last route - it catches all unmatched paths
  {
    path: "*",
    element: <NotFoundPage />,
    label: "404 Not Found",
    description: "Displayed when no matching route is found",
  },
];

export default routes;
