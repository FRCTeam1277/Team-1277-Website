import { Link } from "react-router-dom";
import { NavItem } from "../../../types/navigationTypes";
import { assetPathFixer } from "../../../utils/assetPath";

interface NavLinkProps {
  item: NavItem;
  isActive: (path: string) => boolean;
  showDropdownIcon?: boolean;
  className?: string;
}

/**
 * Renders a single navigation link with optional icon and dropdown indicator
 */
export const NavLink = ({ item, isActive, showDropdownIcon = false, className = "" }: NavLinkProps) => {
  return (
    <Link to={item.path} className={`${isActive(item.path) ? "active" : ""} ${className}`}>
      {item.linkIcon && <img src={assetPathFixer(item.linkIcon)} alt="" className="navbar__link-icon" />}
      {item.linkName}
      {showDropdownIcon && (
        <img src={assetPathFixer("/icons/expand.png")} alt="expand" className="navbar__dropdown-icon" />
      )}
    </Link>
  );
};

interface NavDropdownProps {
  item: NavItem;
  isActive: (path: string) => boolean;
  className?: string;
}

/**
 * Renders a dropdown menu for navigation items with subpages
 */
export const NavDropdown = ({ item, isActive, className = "" }: NavDropdownProps) => {
  if (!item.subPages?.length) return null;

  return (
    <div className={`navbar__dropdown-content ${className}`}>
      {item.subPages.map((subItem, subIndex) => (
        <NavLink key={subIndex} item={subItem} isActive={isActive} />
      ))}
    </div>
  );
};
