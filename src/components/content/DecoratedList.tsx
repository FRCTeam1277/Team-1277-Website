import "./DecoratedList.css";

interface ListItem {
  /**
   * The title for the list item
   */
  title: string;

  /**
   * The description text for the list item
   */
  description: string;
}

interface DecoratedListProps {
  /**
   * Array of list items with titles and descriptions
   */
  items: ListItem[];
}

export default function DecoratedList({ items }: DecoratedListProps) {
  return (
    <ul className="decorated-list decorated-list-component">
      {items.map((item, index) => (
        <li key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
