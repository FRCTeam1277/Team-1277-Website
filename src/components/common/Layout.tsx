import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./navigation/Navbar";

/**
 * The Layout component serves as a persistent shell around the changing page content.
 * It includes elements that should appear on every page, like the navigation bar and footer.
 * The Outlet component is where the specific page content will be rendered.
 */
export default function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="page-container" style={{ minHeight: "calc(100vh - 400px)" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
