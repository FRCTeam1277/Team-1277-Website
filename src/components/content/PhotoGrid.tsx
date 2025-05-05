import "./PhotoGrid.css";
import { assetPathFixer } from "../../utils/assetPath";

interface PhotoGridProps {
  imagePaths: string[];
  maintainOriginalAspectRatio?: boolean;
}

export default function PhotoGrid({ imagePaths, maintainOriginalAspectRatio }: PhotoGridProps) {
  const handleImageClick = (imagePath: string) => {
    window.open(imagePath, "_blank");
  };

  return (
    <div className="photo-grid">
      {imagePaths.map((path, index) => (
        <img
          key={index}
          src={assetPathFixer(path)}
          alt={`Photo ${index + 1}`}
          className="neuromorphic"
          onClick={() => handleImageClick(path)}
          style={{
            cursor: "pointer",
            aspectRatio: maintainOriginalAspectRatio ? "initial" : 3 / 2,
            objectFit: maintainOriginalAspectRatio ? "contain" : "cover",
          }}
        />
      ))}
    </div>
  );
}
