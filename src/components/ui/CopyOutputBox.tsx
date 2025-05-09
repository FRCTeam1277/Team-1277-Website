import React, { useState } from "react";
import "./CopyOutputBox.css";

interface CopyOutputBoxProps {
  /**
   * Text to display and copy
   */
  text: string;

  /**
   * Label for the output box
   */
  label: string;

  /**
   * Text shown when successfully copied
   */
  copiedMessage?: string;
}

const CopyOutputBox: React.FC<CopyOutputBoxProps> = ({ text, label, copiedMessage = "Copied to clipboard!" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="copy-output-box">
      <div className="copy-output-label">{label}</div>
      <div className="copy-output-container">
        <div className="copy-output-text">{text}</div>
        <button className="copy-button" onClick={handleCopy} aria-label="Copy to clipboard">
          Copy
        </button>
      </div>
      {copied && <div className="copy-output-success">{copiedMessage}</div>}
    </div>
  );
};

export default CopyOutputBox;
