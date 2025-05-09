import React from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "positive" | "warning" | "negative";
export type ButtonStyle = "solid" | "translucent";

interface ButtonProps {
  /**
   * Button text content
   */
  children: React.ReactNode;

  /**
   * Color variant of the button
   */
  variant?: ButtonVariant;

  /**
   * Style of the button (solid or translucent)
   */
  style?: ButtonStyle;

  /**
   * Button type attribute
   */
  type?: "button" | "submit" | "reset";

  /**
   * Click handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Disabled state
   */
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  style = "solid",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) => {
  const buttonClasses = ["button", `button-${variant}`, `button-${style}`, className].join(" ");

  return (
    <button type={type} className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
