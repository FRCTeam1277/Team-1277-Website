import { useEffect, useState } from "react";

// Theme state management hook
export const useTheme = () => {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute("data-theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);

    // Dispatch custom event to sync other theme toggles
    window.dispatchEvent(new CustomEvent("themeChanged", { detail: newTheme }));
  };

  useEffect(() => {
    const handleThemeChange = (event: CustomEvent) => {
      setTheme(event.detail);
    };

    window.addEventListener("themeChanged", handleThemeChange as EventListener);

    return () => {
      window.removeEventListener("themeChanged", handleThemeChange as EventListener);
    };
  }, []);

  return { theme, toggleTheme };
};
