import { JSX } from "react";
import "./HighlightSection.css";

export interface IHighlightSectionProps {
  content: JSX.Element;
}

export default function HighlightSection(props: IHighlightSectionProps) {
  return <div className={`highlight-section`}>{props.content}</div>;
}
