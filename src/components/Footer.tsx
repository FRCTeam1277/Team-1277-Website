import { JSX, useState } from "react";

import "./Footer.css";

export default function Footer(): JSX.Element {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute("data-theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <footer>
      <div className="footer__content">
        <p>© 2025 Groton-Dunstable Regional High School Robotics Team</p>
        <p>FRC Team 1277 | The Robotomies</p>
      </div>
      <div className="footer__socials">
        <a href="https://www.instagram.com/robotomies/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://www.facebook.com/robotomies/" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://github.com/FRCTeam1277/" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
      <div className="footer__theme-toggle">
        <button onClick={toggleTheme}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
      </div>
    </footer>
  );
}
