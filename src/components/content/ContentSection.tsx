import { JSX } from "react";

import "./ContentSection.css";

export interface IContentSectionProps {
  title: string;
  subtitle?: string;
  preheading?: string;
  content: JSX.Element;
  centerText?: boolean;
}

export default function ContentSection(props: IContentSectionProps) {
  return (
    <div className={`content-section ${props.centerText ? "centered-section" : ""}`}>
      <div className="content-section_header">
        {props.preheading && <h4>{props.preheading}</h4>}
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
      {props.content}
    </div>
  );
}
