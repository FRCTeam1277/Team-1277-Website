import "./PhotoGrid.css";
import { assetPathFixer } from "../../utils/assetPath";

interface PhotoGridItem {
  imagePath: string;
  /**
   * Optional link to open the page of the sponsor in a new tab
   */
  link?: string;
}

interface PhotoGridProps {
  items: PhotoGridItem[];
}

export default function PhotoGrid({ items }: PhotoGridProps) {
  return (
    <div className="sponsor-grid">
      {items.map((item, index) => (
        <img
          key={index}
          src={assetPathFixer(item.imagePath)}
          alt={`Photo ${index + 1}`}
          onClick={() => item.link && window.open(item.link, "_blank")}
          style={item.link ? { cursor: "pointer" } : {}}
        />
      ))}
    </div>
  );
}
