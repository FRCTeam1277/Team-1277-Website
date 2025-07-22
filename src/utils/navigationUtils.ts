import { NavConfig, NavItem } from "../types/navigationTypes";
import { assetPathFixer } from "./assetPath";

/**
 * Function to check if a navigation link is active based on the current URL
 * @param path - The path to check against
 * @returns boolean indicating if the path is active
 */
export const isActivePath = (path: string): boolean => {
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

/**
 * Loads navigation configuration from JSON file
 * @returns Promise<NavItem[]> - Array of navigation items
 */
export const fetchNavigationConfig = async (): Promise<NavItem[]> => {
  try {
    const response = await fetch(assetPathFixer("navConfig.json"));
    if (!response.ok) {
      throw new Error("Failed to load navigation configuration");
    }
    const data: NavConfig = await response.json();
    return data.navItems || [];
  } catch (error) {
    console.error("Error loading navigation config:", error);
    // Fallback to empty array if JSON cannot be loaded
    return [];
  }
};

/**
 * Toggles a dropdown state in the given state object
 * @param currentState - Current dropdown state
 * @param linkName - Name of the link to toggle
 * @returns New dropdown state
 */
export const toggleDropdownState = (
  currentState: Record<string, boolean>,
  linkName: string
): Record<string, boolean> => {
  return {
    ...currentState,
    [linkName]: !currentState[linkName],
  };
};
