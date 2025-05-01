import "./PhotoGrid.css";
import { assetPathFixer } from "../../utils/assetPath";

interface PhotoGridProps {
  imagePaths: string[];
}

export default function PhotoGrid({ imagePaths }: PhotoGridProps) {
  return (
    <div className="sponsor-grid">
      {imagePaths.map((path, index) => (
        <img key={index} src={assetPathFixer(path)} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
}
