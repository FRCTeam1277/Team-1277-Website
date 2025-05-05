import "./NotFound.css";
import { Link } from "react-router-dom";
import { assetPathFixer } from "../../utils/assetPath";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <img src={assetPathFixer("/RobotomiesLogo.png")} alt="Robotomies Logo" />
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
}
