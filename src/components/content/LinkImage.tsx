import "./LinkImage.css";
import { Link } from "react-router-dom";

interface LinkImageProps {
  url: string;
  imagePath: string;
  altText?: string;
  /**
   * Optional width (either number representing percentage or a string value)
   */
  widthPercent?: number | string;

  /**
   * Optional height (either number representing percentage or a string value)
   */
  heightPercent?: number | string;

  /**
   * Optional flag to round corners of the image
   */
  roundCorners?: boolean;
}

export default function LinkButton(props: LinkImageProps) {
  return props.url.startsWith("/") ? (
    <Link to={props.url} className="link-image">
      <img
        src={props.imagePath}
        alt={props.altText || ""}
        style={{
          width: typeof props.widthPercent === "number" ? `${props.widthPercent}%` : props.widthPercent || "90%",
          height: typeof props.heightPercent === "number" ? `${props.heightPercent}%` : props.heightPercent || "auto",
          borderRadius: props.roundCorners ? "10px" : "0",
        }}
      />
    </Link>
  ) : (
    <a href={props.url} className="link-image" target="_blank" rel="noopener noreferrer">
      <img
        src={props.imagePath}
        alt={props.altText || ""}
        style={{
          width: typeof props.widthPercent === "number" ? `${props.widthPercent}%` : props.widthPercent || "90%",
          height: typeof props.heightPercent === "number" ? `${props.heightPercent}%` : props.heightPercent || "auto",
          borderRadius: props.roundCorners ? "10px" : "0",
        }}
      />
    </a>
  );
}
