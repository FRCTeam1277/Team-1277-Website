import "./ContentSection.css";

interface LinkButtonProps {
  url: string;
  textContent: string;
  outline?: boolean;
  uncolored?: boolean;
  icon?: string;
  invertIcon?: boolean;
  disableShadow?: boolean;
}

export default function LinkButton(props: LinkButtonProps) {
  return (
    <a
      href={props.url}
      className={`link-button ${props.outline ? "outline" : ""} ${props.uncolored ? "uncolored" : ""} ${
        props.disableShadow ? "disable-shadow" : ""
      } `}
    >
      {props.icon && <img src={props.icon} alt="?" style={{ filter: props.invertIcon ? "invert(1)" : "none" }} />}
      {props.textContent}
    </a>
  );
}
