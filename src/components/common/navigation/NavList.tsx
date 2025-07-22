import { Link } from "react-router-dom";
import { NavItem } from "../../../types/navigationTypes";
import { assetPathFixer } from "../../../utils/assetPath";

interface NavListProps {
  items: NavItem[];
  isActive: (path: string) => boolean;
  variant: "navbar" | "sidebar";
  openDropdowns?: Record<string, boolean>;
  onToggleDropdown?: (linkName: string) => void;
}

/**
 * Renders a list of navigation items for either navbar or sidebar
 */
export const NavList = ({ items, isActive, variant, openDropdowns = {}, onToggleDropdown }: NavListProps) => {
  const renderNavItem = (item: NavItem, index: number) => {
    const hasSubPages = item.subPages?.length;
    const isDropdownOpen = openDropdowns[item.linkName];

    if (variant === "navbar") {
      return hasSubPages ? (
        <li key={index} className="navbar__dropdown">
          <Link to={item.path} className={isActive(item.path) ? "active" : ""}>
            {item.linkIcon && <img src={assetPathFixer(item.linkIcon)} alt="" className="navbar__link-icon" />}
            {item.linkName}
            <img src={assetPathFixer("/icons/expand.png")} alt="expand" className="navbar__dropdown-icon" />
          </Link>
          <div className="navbar__dropdown-content">
            {item.subPages?.map((subItem, subIndex) => (
              <Link key={subIndex} to={subItem.path} className={isActive(subItem.path) ? "active" : ""}>
                {subItem.linkIcon && (
                  <img src={assetPathFixer(subItem.linkIcon)} alt="" className="navbar__link-icon" />
                )}
                {subItem.linkName}
              </Link>
            ))}
          </div>
        </li>
      ) : (
        <li key={index}>
          <Link to={item.path} className={isActive(item.path) ? "active" : ""}>
            {item.linkIcon && <img src={assetPathFixer(item.linkIcon)} alt="" className="navbar__link-icon" />}
            {item.linkName}
          </Link>
        </li>
      );
    }

    // Sidebar variant
    return hasSubPages ? (
      <li key={index} className={`sidebar__dropdown ${isDropdownOpen ? "open" : ""}`}>
        <div className="sidebar__dropdown-toggle" onClick={() => onToggleDropdown?.(item.linkName)}>
          <Link to={item.path} className={isActive(item.path) ? "active" : ""}>
            {item.linkIcon && <img src={assetPathFixer(item.linkIcon)} alt="" className="sidebar__link-icon" />}
            {item.linkName}
          </Link>
          <img src={assetPathFixer("/icons/expand.png")} alt="expand" className="sidebar__dropdown-icon" />
        </div>
        <ul className="sidebar__dropdown-content">
          {item.subPages?.map((subItem, subIndex) => (
            <li key={subIndex}>
              <Link to={subItem.path} className={isActive(subItem.path) ? "active" : ""}>
                {subItem.linkIcon && (
                  <img src={assetPathFixer(subItem.linkIcon)} alt="" className="sidebar__link-icon" />
                )}
                {subItem.linkName}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    ) : (
      <li key={index}>
        <Link to={item.path} className={isActive(item.path) ? "active" : ""}>
          {item.linkIcon && <img src={assetPathFixer(item.linkIcon)} alt="" className="sidebar__link-icon" />}
          {item.linkName}
        </Link>
      </li>
    );
  };

  return <>{items.map(renderNavItem)}</>;
};
