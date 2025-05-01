import "./SectionImage.css";
import { assetPathFixer } from "../../utils/assetPath";

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
}

export default function SectionImage({ imagePath, caption, altText = "" }: SectionImageProps) {
  return (
    <div className="section-image-container section-image-wrapper">
      <img src={assetPathFixer(imagePath)} alt={altText || caption || "Section image"} className="section-image" />
      {caption && <figcaption>{caption}</figcaption>}
    </div>
  );
}
