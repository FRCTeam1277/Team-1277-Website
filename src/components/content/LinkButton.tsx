interface LinkButtonProps {
  href: string;
  textContent: string;
  outline?: boolean;
  uncolored?: boolean;
  icon?: string;
}

export default function LinkButton(props: LinkButtonProps) {
  return (
    <a
      href={props.href}
      className={`link-button ${props.outline ? "outline" : ""} ${props.uncolored ? "uncolored" : ""}`}
    >
      {props.icon && <img src={props.icon} alt="?" />}
      {props.textContent}
    </a>
  );
}
