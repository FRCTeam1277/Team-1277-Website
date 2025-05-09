import React from "react";
import "./Checkbox.css";

interface CheckboxProps {
  /**
   * The label text to display next to the checkbox
   */
  label: string;

  /**
   * Name attribute for the input element
   */
  name: string;

  /**
   * Whether the checkbox is checked
   */
  checked: boolean;

  /**
   * Change event handler
   */
  onChange: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * Whether the checkbox is required
   */
  required?: boolean;

  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;

  /**
   * Additional CSS class names
   */
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  checked,
  onChange,
  required = false,
  disabled = false,
  className = "",
}) => {
  const checkboxClasses = ["checkbox-container", className].join(" ");

  return (
    <label className={checkboxClasses}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="checkbox-input"
      />
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default Checkbox;
