import { NavItem } from "../../../types/navigationTypes";
import { assetPathFixer } from "../../../utils/assetPath";
import { NavList } from "./NavList";

import { JSX } from "react";
import "./Sidebar.css";

/**
 * Interface for Sidebar component props
 */
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  openDropdowns: Record<string, boolean>;
  onToggleDropdown: (linkName: string) => void;
  isActive: (path: string) => boolean;
}

/**
 * The `Sidebar` component renders a collapsible sidebar navigation menu for mobile devices.
 * It includes navigation links with dropdown support and manages its own visibility state.
 *
 * Features:
 * - Collapsible sidebar that slides in from the right
 * - Support for dropdown menus with toggle functionality
 * - Active link highlighting
 * - Close button functionality
 * - Icon support for navigation items
 *
 * @param {SidebarProps} props - The props for the Sidebar component
 * @returns {JSX.Element} The rendered `Sidebar` component
 */
export default function Sidebar({
  isOpen,
  onClose,
  navItems,
  openDropdowns,
  onToggleDropdown,
  isActive,
}: SidebarProps): JSX.Element {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <header>
        <h2 className="sidebar__title">Menu</h2>
        <img src={assetPathFixer("/icons/closeIcon.png")} alt="X" className="sidebar__close-button" onClick={onClose} />
      </header>
      <ul className="sidebar__links">
        <NavList
          items={navItems}
          isActive={isActive}
          variant="sidebar"
          openDropdowns={openDropdowns}
          onToggleDropdown={onToggleDropdown}
        />
      </ul>
    </div>
  );
}
