import React from "react";
import "./InputField.css";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  textarea?: boolean;
}

export default function InputField({ label, textarea, ...props }: InputFieldProps) {
  return (
    <label className="input-field-label">
      <span className="input-field-label-text">{label}</span>
      {textarea ? (
        <textarea className="input-field" required {...(props as any)} />
      ) : (
        <input className="input-field" required {...props} />
      )}
    </label>
  );
}
