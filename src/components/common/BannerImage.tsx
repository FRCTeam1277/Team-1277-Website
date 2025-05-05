import { JSX } from "react";
import { assetPathFixer } from "../../utils/assetPath";

import "./Banner.css";

interface IBannerImageProps {
  imagePath: string;
}

/**
 * A functional component that renders a banner image.
 *
 * @param {IBannerImageProps} props - The properties for the BannerImage component.
 * @param {string} props.imagePath - The path to the image to be displayed.
 * @returns {JSX.Element} The rendered banner image element.
 */
export default function BannerImage({ imagePath }: IBannerImageProps): JSX.Element {
  return <img src={assetPathFixer(imagePath)} alt="Banner" className="banner__image" />;
}
