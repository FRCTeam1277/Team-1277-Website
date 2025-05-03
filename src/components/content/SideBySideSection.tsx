import { ReactNode } from "react";
import "./SideBySideSection.css";

export interface ISideBySideSectionProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  gap?: string | number;
}

export default function SideBySideSection(props: ISideBySideSectionProps) {
  const gapStyle = props.gap !== undefined ? { gap: typeof props.gap === "number" ? `${props.gap}px` : props.gap } : {};

  return (
    <div className="side-by-side-section" style={gapStyle}>
      <div className="side-by-side-item">{props.leftContent}</div>
      <div className="side-by-side-item">{props.rightContent}</div>
    </div>
  );
}
