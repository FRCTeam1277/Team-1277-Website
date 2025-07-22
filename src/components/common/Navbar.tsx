import { JSX, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { assetPathFixer } from "../../utils/assetPath";

import "./Navbar.css";

/**
 * Interface for navigation item structure
 */
interface NavItem {
  linkName: string;
  path: string;
  linkIcon?: string;
  subPages?: NavItem[];
}

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
  // State to manage navbar
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  // Theme management
  const { theme, toggleTheme } = useTheme();

  // Function to check if a link is active
  const isActive = (path: string) => {
    // Get the base path from Vite/Router
    const basePath = import.meta.env.BASE_URL || "/";
    // Remove basePath from the start of the current pathname if present
    let currentPath = window.location.pathname;
    if (basePath !== "/" && currentPath.startsWith(basePath)) {
      currentPath = currentPath.slice(basePath.length - (basePath.endsWith("/") ? 1 : 0));
      if (!currentPath.startsWith("/")) currentPath = "/" + currentPath;
    }
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  // Load navigation configuration from JSON
  useEffect(() => {
    const fetchNavConfig = async () => {
      try {
        const response = await fetch(assetPathFixer("navConfig.json"));
        if (!response.ok) {
          throw new Error("Failed to load navigation configuration");
        }
        const data = await response.json();
        setNavItems(data.navItems || []);
      } catch (error) {
        console.error("Error loading navigation config:", error);
        // Fallback to empty array if JSON cannot be loaded
        setNavItems([]);
      }
    };

    fetchNavConfig();
  }, []);

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

  // Function to toggle dropdown in sidebar
  const toggleDropdown = (linkName: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [linkName]: !prev[linkName],
    }));
  };

  // Render navigation links for the main navbar
  const renderNavLinks = () => {
    return navItems.map((item, index) => {
      if (item.subPages?.length) {
        // Render dropdown menu
        return (
          <li key={index} className="navbar__dropdown">
            <Link to={item.path} className={isActive(item.path) ? "active" : ""}>
              {item.linkIcon && <img src={assetPathFixer(item.linkIcon)} alt="" className="navbar__link-icon" />}
              {item.linkName}
              <img src={assetPathFixer("/icons/expand.png")} alt="expand" className="navbar__dropdown-icon" />
            </Link>
            <div className="navbar__dropdown-content">
              {item.subPages.map((subItem, subIndex) => (
                <Link key={subIndex} to={subItem.path} className={isActive(subItem.path) ? "active" : ""}>
                  {subItem.linkIcon && (
                    <img src={assetPathFixer(subItem.linkIcon)} alt="" className="navbar__link-icon" />
                  )}
                  {subItem.linkName}
                </Link>
              ))}
            </div>
          </li>
        );
      } else {
        // Render regular link
        return (
          <li key={index}>
            <Link to={item.path} className={isActive(item.path) ? "active" : ""}>
              {item.linkIcon && <img src={assetPathFixer(item.linkIcon)} alt="" className="navbar__link-icon" />}
              {item.linkName}
            </Link>
          </li>
        );
      }
    });
  };

  // Render navigation links for the sidebar
  const renderSidebarLinks = () => {
    return navItems.map((item, index) => {
      if (item.subPages?.length) {
        // Render dropdown in sidebar
        return (
          <li key={index} className={`navbar__sidebar-dropdown ${openDropdowns[item.linkName] ? "open" : ""}`}>
            <div className="navbar__sidebar-dropdown-toggle" onClick={() => toggleDropdown(item.linkName)}>
              <Link to={item.path} className={isActive(item.path) ? "active" : ""}>
                {item.linkIcon && <img src={assetPathFixer(item.linkIcon)} alt="" className="navbar__link-icon" />}
                {item.linkName}
              </Link>
              <img src={assetPathFixer("/icons/expand.png")} alt="expand" className="navbar__dropdown-icon" />
            </div>
            <ul className="navbar__sidebar-dropdown-content">
              {item.subPages.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link to={subItem.path} className={isActive(subItem.path) ? "active" : ""}>
                    {subItem.linkIcon && (
                      <img src={assetPathFixer(subItem.linkIcon)} alt="" className="navbar__link-icon" />
                    )}
                    {subItem.linkName}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        );
      } else {
        // Render regular link in sidebar
        return (
          <li key={index}>
            <Link to={item.path} className={isActive(item.path) ? "active" : ""}>
              {item.linkIcon && <img src={assetPathFixer(item.linkIcon)} alt="" className="navbar__link-icon" />}
              {item.linkName}
            </Link>
          </li>
        );
      }
    });
  };

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
          <ul className="navbar__links">{renderNavLinks()}</ul>
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
      <div className={`navbar__sidebar ${sidebarOpen ? "open" : ""}`}>
        <header>
          <h2 className="navbar__sidebar-title">Menu</h2>
          <img
            src={assetPathFixer("/icons/closeIcon.png")}
            alt="X"
            className="navbar__close-button"
            onClick={toggleSidebar}
          />
        </header>
        <ul className="navbar__sidebar-links">{renderSidebarLinks()}</ul>
      </div>
    </>
  );
}
