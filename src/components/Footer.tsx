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
        <a href="https://www.instagram.com/robotomies1277/" target="_blank" rel="noopener noreferrer">
          <span>
            <img src="/socials/instagram.png" alt="Instagram icon" />
            <span className="social-text">Instagram</span>
          </span>
        </a>
        <a href="https://www.facebook.com/team1277" target="_blank" rel="noopener noreferrer">
          <span>
            <img src="/socials/facebook.png" alt="Facebook icon" />
            <span className="social-text">Facebook</span>
          </span>
        </a>
        <a href="https://github.com/FRCTeam1277/" target="_blank" rel="noopener noreferrer">
          <span>
            <img src="/socials/github.png" alt="Github icon" />
            <span className="social-text">Github</span>
          </span>
        </a>
      </div>
      <div className="footer__theme-toggle">
        <button onClick={toggleTheme}>
          <img
            src={theme === "light" ? "/icons/dark-mode.png" : "/icons/light-mode.png"}
            alt={theme === "light" ? "Dark mode icon" : "Light mode icon"}
            className="theme-icon"
          />
          <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </button>
      </div>
    </footer>
  );
}
