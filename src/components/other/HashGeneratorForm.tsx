import React, { useState } from "react";
import { generatePasswordHash } from "../../utils/hashGenerator";
import InputField from "../common/InputField";
import Button from "../common/Button";
import CopyOutputBox from "./CopyOutputBox";
import CodeView from "./CodeView";
import "./HashGeneratorForm.css";

const HashGeneratorForm: React.FC = () => {
  const [password, setPassword] = useState("");
  const [generatedHash, setGeneratedHash] = useState("");
  const [formattedHash, setFormattedHash] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleGenerateHash = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;

    const hash = generatePasswordHash(password);
    const formatted = `sha256:${hash}`;

    setGeneratedHash(hash);
    setFormattedHash(formatted);
    setShowResults(true);
  };

  const exampleCode = (hash: string) => {
    return `<PasswordProtectedContent
  contentId="unique-id"
  passwordHash="${hash}"
  title="Protected Content" 
  description="Enter password to view content"
>
  {/* Your protected content */}
</PasswordProtectedContent>`;
  };

  return (
    <div className="hash-generator-form">
      <form onSubmit={handleGenerateHash}>
        <InputField
          label="Password to Hash"
          type="text"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="off"
          required
        />

        <Button type="submit" variant="positive" style="solid" className="hash-generator-submit">
          Generate Hash
        </Button>
      </form>

      {showResults && (
        <div className="hash-generator-results">
          <h3 className="hash-result-heading">Generated Hash:</h3>

          <CopyOutputBox label="Plain Hash:" text={generatedHash} />

          <CopyOutputBox label="Formatted for Component:" text={formattedHash} />

          <div className="hash-generator-example">
            <h4>Example Component Usage:</h4>
            <CodeView code={exampleCode(formattedHash)} language="tsx" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HashGeneratorForm;
