import "./PhotoGrid.css";
import { getAssetPath } from "../../utils/assetPath";

interface PhotoGridProps {
  imagePaths: string[];
}

export default function PhotoGrid({ imagePaths }: PhotoGridProps) {
  return (
    <div className="photo-grid">
      {imagePaths.map((path, index) => (
        <img key={index} src={getAssetPath(path)} alt={`Photo ${index + 1}`} className="neuromorphic" />
      ))}
    </div>
  );
}
