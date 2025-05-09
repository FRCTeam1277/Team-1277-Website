import React, { useState } from "react";
import "./CodeView.css";

interface CodeViewProps {
  /**
   * Code to display
   */
  code: string;

  /**
   * Optional title or label
   */
  title?: string;

  /**
   * Whether to allow copying the code
   */
  allowCopy?: boolean;

  /**
   * Optional language for syntax highlighting
   */
  language?: string;

  /**
   * Text shown when successfully copied
   */
  copiedMessage?: string;
}

const CodeView: React.FC<CodeViewProps> = ({
  code,
  title,
  allowCopy = true,
  language = "",
  copiedMessage = "Copied to clipboard!",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="code-view neuromorphic-inset">
      <div className="code-view-header">
        {title && <div className="code-view-title">{title}</div>}
        {allowCopy && (
          <button className="code-view-copy-button" onClick={handleCopy} aria-label="Copy code">
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>
      <pre className={`code-view-code ${language}`}>
        <code>{code}</code>
      </pre>
      {copied && <div className="code-view-copied-message">{copiedMessage}</div>}
    </div>
  );
};

export default CodeView;
