import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * The Layout component serves as a persistent shell around the changing page content.
 * It includes elements that should appear on every page, like the navigation bar and footer.
 * The Outlet component is where the specific page content will be rendered.
 */
export default function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="page-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
