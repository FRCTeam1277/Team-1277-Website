import { JSX } from "react";

import "./Banner.css";

interface BannerImageProps {
  imagePath: string;
}

/**
 * A functional component that renders a banner image.
 *
 * @param {BannerImageProps} props - The properties for the BannerImage component.
 * @param {string} props.imagePath - The path to the image to be displayed.
 * @returns {JSX.Element} The rendered banner image element.
 */
export default function BannerImage({ imagePath }: BannerImageProps): JSX.Element {
  return <img src={imagePath} alt="Banner" className="banner__image" />;
}
