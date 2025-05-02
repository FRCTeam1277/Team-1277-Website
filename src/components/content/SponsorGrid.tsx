import "./PhotoGrid.css";

interface PhotoGridProps {
  imagePaths: string[];

  /**
   * Optional link to open the page of the sponsor in a new tab
   */
  link?: string[];
}

export default function PhotoGrid({ imagePaths, link }: PhotoGridProps) {
  return (
    <div className="sponsor-grid">
      {imagePaths.map((path, index) => (
        <img
          key={index}
          src={path}
          alt={`Photo ${index + 1}`}
          onClick={() => {
            if (link) {
              window.open(link[index], "_blank");
            }
          }}
          style={link ? { cursor: "pointer" } : {}}
        />
      ))}
    </div>
  );
}
