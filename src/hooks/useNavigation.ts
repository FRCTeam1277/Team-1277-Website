import { useEffect, useState } from "react";
import { DropdownState, NavItem } from "../types/navigationTypes";
import { fetchNavigationConfig, toggleDropdownState } from "../utils/navigationUtils";

/**
 * Custom hook for managing navigation data and loading state
 */
export const useNavigation = () => {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNavigation = async () => {
      setIsLoading(true);
      const items = await fetchNavigationConfig();
      setNavItems(items);
      setIsLoading(false);
    };

    loadNavigation();
  }, []);

  return { navItems, isLoading };
};

/**
 * Custom hook for managing dropdown states
 */
export const useDropdowns = () => {
  const [openDropdowns, setOpenDropdowns] = useState<DropdownState>({});

  const toggleDropdown = (linkName: string) => {
    setOpenDropdowns((prev) => toggleDropdownState(prev, linkName));
  };

  const closeAllDropdowns = () => {
    setOpenDropdowns({});
  };

  return {
    openDropdowns,
    toggleDropdown,
    closeAllDropdowns,
  };
};

/**
 * Custom hook for managing sidebar state
 */
export const useSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return {
    sidebarOpen,
    toggleSidebar,
    closeSidebar,
  };
};

/**
 * Custom hook for detecting mobile viewport and scroll state
 */
export const useViewport = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  return { isMobile, isScrollingDown };
};
