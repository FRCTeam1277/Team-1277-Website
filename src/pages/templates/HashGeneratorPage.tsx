import React, { useState } from "react";
import ContentSection from "../../components/content/ContentSection";
import TextParagraph from "../../components/content/TextParagraph";
import { generatePasswordHash } from "../../utils/hashGenerator";
import InputField from "../../components/common/InputField";

export default function HashGeneratorPage() {
  const [password, setPassword] = useState("");
  const [generatedHash, setGeneratedHash] = useState("");
  const [formattedHash, setFormattedHash] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerateHash = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;

    const hash = generatePasswordHash(password);
    const formatted = `sha256:${hash}`;

    setGeneratedHash(hash);
    setFormattedHash(formatted);
    setCopied(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <ContentSection
        title="Password Hash Generator"
        subtitle="Generate secure hashes for protected content"
        content={
          <>
            <TextParagraph text="This utility helps you generate SHA-256 hashes for use with the PasswordProtectedContent component. Enter a password below to generate its hash." />

            <TextParagraph text="Note that this is for non-critical content; Since the hash verification happens client-side this will not be very secure. Hopefully enough for the purposes of the robotomies." />

            <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
              <form onSubmit={handleGenerateHash}>
                <InputField
                  label="Password to Hash"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  required
                />

                <button
                  type="submit"
                  style={{
                    display: "block",
                    width: "100%",
                    marginTop: "1.5rem",
                    padding: "0.75rem",
                    background: "var(--primary)",
                    color: "var(--inverse-primary)",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Generate Hash
                </button>
              </form>

              {generatedHash && (
                <div style={{ marginTop: "2rem" }}>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Generated Hash:</h3>

                  <div
                    style={{
                      background: "var(--background-secondary)",
                      padding: "1rem",
                      borderRadius: "5px",
                      marginBottom: "1rem",
                    }}
                  >
                    <h4>Plain Hash:</h4>
                    <pre
                      style={{
                        overflowX: "auto",
                        padding: "0.5rem",
                        background: "var(--background-dark)",
                        borderRadius: "5px",
                        marginTop: "0.5rem",
                      }}
                    >
                      {generatedHash}
                    </pre>
                    <button
                      onClick={() => copyToClipboard(generatedHash)}
                      style={{
                        padding: "0.25rem 0.5rem",
                        marginTop: "0.5rem",
                        background: "var(--accent)",
                        color: "var(--text)",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Copy
                    </button>
                  </div>

                  <div
                    style={{
                      background: "var(--background-secondary)",
                      padding: "1rem",
                      borderRadius: "5px",
                    }}
                  >
                    <h4>Formatted for Component:</h4>
                    <pre
                      style={{
                        overflowX: "auto",
                        padding: "0.5rem",
                        background: "var(--background-dark)",
                        borderRadius: "5px",
                        marginTop: "0.5rem",
                      }}
                    >
                      {formattedHash}
                    </pre>
                    <button
                      onClick={() => copyToClipboard(formattedHash)}
                      style={{
                        padding: "0.25rem 0.5rem",
                        marginTop: "0.5rem",
                        background: "var(--accent)",
                        color: "var(--text)",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Copy
                    </button>

                    <div style={{ marginTop: "1.5rem" }}>
                      <h4>Example Component Usage:</h4>
                      <pre
                        style={{
                          overflowX: "auto",
                          padding: "0.5rem",
                          background: "var(--background-dark)",
                          borderRadius: "5px",
                          marginTop: "0.5rem",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {`<PasswordProtectedContent
  contentId="unique-id"
  passwordHash="${formattedHash}"
  title="Protected Content" 
  description="Enter password to view content"
>
  {/* Your protected content */}
</PasswordProtectedContent>`}
                      </pre>
                      {copied && (
                        <div
                          style={{
                            marginTop: "0.5rem",
                            color: "var(--accent)",
                            fontWeight: "bold",
                          }}
                        >
                          Copied to clipboard!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <TextParagraph text="Note: This hash generator runs entirely in your browser. Passwords are never sent to any server." />
          </>
        }
      />
    </>
  );
}
