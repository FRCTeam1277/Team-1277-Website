import React from "react";
import { Link } from "react-router-dom";
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

  /**
   * Whether to use uppercase styling
   * */
  uppercase?: boolean;

  /**
   * Whether to not have margin on bottom
   * */
  removeMargin?: boolean;
}

export default function TextParagraph({
  text,
  primary = false,
  bold = false,
  centered = false,
  emphasis = false,
  uppercase = false,
  removeMargin = false,
}: TextParagraphProps) {
  // Function to parse and replace markdown-style links with actual <a> tags and handle newlines
  const parseLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    // Split the text by link pattern
    const parts = text.split(linkRegex);
    const result: React.ReactNode[] = [];

    // If there are no links, return the original text with newlines handled
    if (parts.length === 1) {
      return parts[0].split(/\n/g).map((line, idx, arr) => (idx < arr.length - 1 ? [line, <br key={idx} />] : line));
    }

    for (let i = 0; i < parts.length; i++) {
      if (i % 3 === 0) {
        // Text part, handle newlines
        if (parts[i]) {
          const lines = parts[i].split(/\n/g);
          lines.forEach((line, idx) => {
            if (line) result.push(line);
            if (idx < lines.length - 1) result.push(<br key={`br-${i}-${idx}`} />);
          });
        }
      } else if (i % 3 === 1) {
        // Link text
        const linkText = parts[i];
        const linkUrl = parts[i + 1];
        const externalplz = linkUrl.startsWith("/members/docs/") || linkUrl.startsWith("/programming/docs/");
        if (linkUrl.startsWith("/") && !externalplz) {
          result.push(
            <Link key={i} to={linkUrl}>
              {linkText}
            </Link>
          );
        } else if (externalplz || linkUrl.startsWith("/")) {
          result.push(
            <a key={i} href={linkUrl}>
              {linkText}
            </a>
          );
        } else {
          result.push(
            <a key={i} href={linkUrl} target="_blank" rel="noopener noreferrer">
              {linkText}
            </a>
          );
        }
      }
      // Skip URL parts (i % 3 === 2) as they are processed with the link text
    }

    return result;
  };

  // Build class names based on props
  const classNames = [
    "text-paragraph",
    primary ? "primary" : "",
    bold ? "bold" : "",
    centered ? "centered" : "",
    emphasis ? "emphasis" : "",
    uppercase ? "uppercase" : "",
    removeMargin ? "remove-margin" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (emphasis) {
    return <em className={classNames}>{parseLinks(text)}</em>;
  }

  return <p className={classNames}>{parseLinks(text)}</p>;
}
