/**
 * Interface for navigation item structure
 */
export interface NavItem {
  linkName: string;
  path: string;
  linkIcon?: string;
  subPages?: NavItem[];
}

/**
 * Interface for navigation configuration loaded from JSON
 */
export interface NavConfig {
  navItems: NavItem[];
}

/**
 * Interface for dropdown state management
 */
export interface DropdownState {
  [linkName: string]: boolean;
}
