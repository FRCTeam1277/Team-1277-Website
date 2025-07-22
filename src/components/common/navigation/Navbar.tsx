import { JSX } from "react";
import { Link } from "react-router-dom";
import { useDropdowns, useNavigation, useSidebar, useViewport } from "../../../hooks/useNavigation";
import { useTheme } from "../../../hooks/useTheme";
import { assetPathFixer } from "../../../utils/assetPath";
import { isActivePath } from "../../../utils/navigationUtils";
import { NavList } from "./NavList";
import Sidebar from "./Sidebar";

import "./Navbar.css";

/**
 * The `Navbar` component renders a responsive navigation bar with a logo, navigation links,
 * and a collapsible sidebar for mobile devices. It includes functionality for detecting
 * active links and managing window resize events to adapt to mobile viewports.
 *
 * Features:
 * - Dynamically loads navigation from a JSON configuration file
 * - Displays a logo and navigation links
 * - Supports dropdown menus for navigation categories
 * - Optional icons for navigation items
 * - Highlights the active link based on the current URL
 * - Toggles a sidebar menu for mobile devices with hamburger icon
 * - Dynamically adjusts to mobile or desktop view based on window width
 * - Adds a `scrolled` class to the navbar when scrolling down
 *
 * @returns {JSX.Element} The rendered `Navbar` component
 */
export default function Navbar(): JSX.Element {
  // Custom hooks for managing state
  const { navItems } = useNavigation();
  const { openDropdowns, toggleDropdown } = useDropdowns();
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const { isScrollingDown } = useViewport();

  // Theme management
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className={`navbar ${isScrollingDown ? "scrolled" : ""}`}>
        {/* Left-aligned Logo Image */}
        <div className="navbar__logo">
          <Link to="/">
            <img src={assetPathFixer("/RobotomiesLogo.png")} alt="Logo" />
          </Link>
        </div>
        <div className="nav-right-ui">
          {/* Navigation Links */}
          <ul className="navbar__links">
            <NavList items={navItems} isActive={isActivePath} variant="navbar" />
          </ul>
          {/* Right side controls */}
          <div className="navbar__controls">
            {/* Theme Toggle Button */}
            <button className="navbar__theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <img
                src={assetPathFixer(theme === "light" ? "/icons/dark-mode.png" : "/icons/light-mode.png")}
                alt={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                className="navbar__theme-icon"
              />
            </button>
            {/* Hamburger Icon for Mobile */}
            <div className="navbar__hamburger" onClick={toggleSidebar}>
              <img src={assetPathFixer("/icons/MenuIcon.png")} alt="Menu" />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar opened when navbar is collapsed */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={toggleSidebar}
        navItems={navItems}
        openDropdowns={openDropdowns}
        onToggleDropdown={toggleDropdown}
        isActive={isActivePath}
      />
    </>
  );
}
