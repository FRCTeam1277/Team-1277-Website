import React, { ReactNode, useEffect, useState } from "react";
import { SHA256 } from "crypto-js";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
import "./PasswordProtectedContent.css";

interface PasswordProtectedContentProps {
  /**
   * The content to be protected by a password
   */
  children: ReactNode;

  /**
   * SHA-256 hash of the password
   * Use the pattern "sha256:hash" where hash is the SHA-256 hash of the password
   * This adds a layer of security as the actual password is never stored in the code
   */
  passwordHash: string;

  /**
   * A unique ID for this protected content to differentiate multiple protected sections
   */
  contentId: string;

  /**
   * Title to display on the password form
   */
  title?: string;

  /**
   * Description to display below the title on the password form
   */
  description?: string;

  /**
   * How long (in milliseconds) the authentication is valid
   * Default: 3600000 (1 hour)
   */
  authValidityMs?: number;

  /**
   * Message to display when incorrect password is entered
   * Default: "Incorrect password. Please try again."
   */
  errorMessage?: string;
}

export default function PasswordProtectedContent({
  children,
  passwordHash,
  contentId,
  title = "Protected Content",
  description = "This content requires a password to view.",
  authValidityMs = 3600000, // Default to 1 hour
  errorMessage = "Incorrect password. Please try again.",
}: PasswordProtectedContentProps) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showError, setShowError] = useState(false);

  // Generate storage key using contentId
  const storageKey = `robotomies-auth-${contentId}`;

  // Check for existing auth on component mount
  useEffect(() => {
    const storedAuth = sessionStorage.getItem(storageKey);
    if (storedAuth) {
      try {
        const authData = JSON.parse(storedAuth);
        const currentTime = new Date().getTime();

        // Check if the stored auth is still valid
        if (currentTime < authData.expiresAt) {
          setIsAuthenticated(true);
        } else {
          // Clear expired auth
          sessionStorage.removeItem(storageKey);
        }
      } catch (e) {
        // If there's a parsing error, reset the auth
        sessionStorage.removeItem(storageKey);
      }
    }
  }, [storageKey]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setShowError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Hash the entered password
    const hashedPassword = SHA256(password).toString();

    // Expected format: "sha256:hash"
    const expectedHash = passwordHash.startsWith("sha256:") ? passwordHash.substring(7) : passwordHash;

    if (hashedPassword === expectedHash) {
      // Set authentication in session storage with expiration time
      const expiresAt = new Date().getTime() + authValidityMs;
      sessionStorage.setItem(storageKey, JSON.stringify({ authenticated: true, expiresAt }));

      setIsAuthenticated(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="password-protected">
      <div className="password-protected-form neuromorphic">
        <h2>{title}</h2>
        <p>{description}</p>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            name="password"
            autoComplete="off"
            required
          />

          {showError && <div className="password-error">{errorMessage}</div>}

          <Button type="submit" variant="positive" style="translucent" className="password-submit-button">
            Unlock Content
          </Button>
        </form>
      </div>
    </div>
  );
}
