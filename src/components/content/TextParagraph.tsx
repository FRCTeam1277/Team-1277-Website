import React from "react";
import "./TextParagraph.css";

interface TextParagraphProps {
  /**
   * The text content to display
   * Can include markdown-style links like "View [link text](https://example.com)"
   */
  text: string;

  /**
   * Whether to use primary color styling
   */
  primary?: boolean;

  /**
   * Whether to make the text bold
   */
  bold?: boolean;

  /**
   * Whether to center the text
   */
  centered?: boolean;

  /**
   * Whether to use emphasis styling (italic)
   */
  emphasis?: boolean;
}

export default function TextParagraph({
  text,
  primary = false,
  bold = false,
  centered = false,
  emphasis = false,
}: TextParagraphProps) {
  // Function to parse and replace markdown-style links with actual <a> tags
  const parseLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    // Split the text by link pattern
    const parts = text.split(linkRegex);
    const result: React.ReactNode[] = [];

    // If there are no links, return the original text
    if (parts.length === 1) {
      return text;
    }

    // Process parts to reconstruct text with links
    for (let i = 0; i < parts.length; i++) {
      if (i % 3 === 0) {
        // Text part
        if (parts[i]) {
          result.push(parts[i]);
        }
      } else if (i % 3 === 1) {
        // Link text
        const linkText = parts[i];
        const linkUrl = parts[i + 1];
        result.push(
          <a key={i} href={linkUrl} target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        );
      }
      // Skip URL parts (i % 3 === 2) as they are processed with the link text
    }

    return result;
  };

  // Build class names based on props
  const classNames = [
    primary ? "primary" : "",
    bold ? "bold" : "",
    centered ? "centered" : "",
    emphasis ? "emphasis" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (emphasis) {
    return <em className={classNames}>{parseLinks(text)}</em>;
  }

  return <p className={classNames}>{parseLinks(text)}</p>;
}
