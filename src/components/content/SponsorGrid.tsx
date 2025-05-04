import "./PhotoGrid.css";

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
          src={item.imagePath}
          alt={`Photo ${index + 1}`}
          onClick={() => item.link && window.open(item.link, "_blank")}
          style={item.link ? { cursor: "pointer" } : {}}
        />
      ))}
    </div>
  );
}
