import "./PhotoGrid.css";

interface PhotoGridProps {
  imagePaths: string[];
}

export default function PhotoGrid({ imagePaths }: PhotoGridProps) {
  return (
    <div className="photo-grid">
      {imagePaths.map((path, index) => (
        <img key={index} src={path} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
}
