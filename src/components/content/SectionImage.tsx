import "./SectionImage.css";

interface SectionImageProps {
  /**
   * Path to the image file
   */
  imagePath: string;

  /**
   * Optional caption text to display under the image
   */
  caption?: string;

  /**
   * Optional alt text for the image
   */
  altText?: string;

  /**
   * Optional width and height for the image
   */
  widthPercent?: number | string;
  heightPercent?: number | string;

  /**
   * Optional flag to disable clicking on the image
   */
  disableClick?: boolean;
}

export default function SectionImage(props: SectionImageProps) {
  const handleImageClick = () => {
    if (!props.disableClick) {
      window.open(props.imagePath, "_blank");
    }
  };

  return (
    <div className="section-image-container section-image-wrapper">
      <img
        src={props.imagePath}
        alt={props.altText || props.caption || "Section image"}
        className="section-image"
        style={{
          width: typeof props.widthPercent === "number" ? `${props.widthPercent}%` : props.widthPercent || "90%",
          height: typeof props.heightPercent === "number" ? `${props.heightPercent}%` : props.heightPercent || "auto",
          cursor: props.disableClick ? "default" : "pointer",
        }}
        onClick={handleImageClick}
      />
      {props.caption && <figcaption>{props.caption}</figcaption>}
    </div>
  );
}
