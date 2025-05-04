import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <img src="/RobotomiesLogo.png" alt="Robotomies Logo" />
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <a href="/">Go to Homepage</a>
    </div>
  );
}
