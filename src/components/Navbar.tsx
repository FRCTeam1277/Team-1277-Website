import { JSX, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

/**
 * The `Navbar` component renders a responsive navigation bar with a logo, navigation links,
 * and a collapsible sidebar for mobile devices. It includes functionality for detecting
 * active links and managing window resize events to adapt to mobile viewports.
 *
 * Features:
 * - Displays a logo and navigation links.
 * - Highlights the active link based on the current URL.
 * - Toggles a sidebar menu for mobile devices with a hamburger icon.
 * - Dynamically adjusts to mobile or desktop view based on window width.
 * - Adds a `scrolled` class to the navbar when scrolling down.
 *
 * @returns {JSX.Element} The rendered `Navbar` component.
 */
export default function Navbar(): JSX.Element {
  // State to manage sidebar open/close
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  let lastScrollY = window.scrollY;

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return window.location.pathname === path;
    }
    return window.location.pathname.startsWith(path);
  };

  // Event listener to check if window is resized to mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // Event listener to detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrollingDown ? "scrolled" : ""}`}>
        {/* Left-aligned Logo Image */}
        <div className="navbar__logo">
          <Link to="/">
            <img src="/RobotomiesLogo.png" alt="Logo" />
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="navbar__links">
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/2025-Dive" className={isActive("/2025-Dive") ? "active" : ""}>
              2025: Dive
            </Link>
          </li>
          {/* TODO Make dropdown menus, also make them dropdown menus in sidebar */}
          <li>
            <Link to="/">Past Seasons</Link>
          </li>
          <li>
            <Link to="/">Members</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/support" className={isActive("/support") ? "active" : ""}>
              Support
            </Link>
          </li>
        </ul>
        {/* Hamburger Icon for Mobile */}
        <div className="navbar__hamburger" onClick={toggleSidebar}>
          <img src="/icons/MenuIcon.png" alt="Menu" />
        </div>
      </nav>

      {/* Sidebar opened when navbar is collapsed */}
      <div className={`navbar__sidebar ${sidebarOpen ? "open" : ""}`}>
        {/* The [x] button to close the sidebar */}
        <img src="/icons/closeIcon.png" alt="x" className="navbar__close-button" onClick={toggleSidebar} />
        <p className="navbar__sidebar-title">Menu</p>
        <ul className="navbar__sidebar-links">
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
