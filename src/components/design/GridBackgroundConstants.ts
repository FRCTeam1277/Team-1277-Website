/**
 * Constants for GridBackground component
 */

/** Default configuration values */
export const DEFAULT_CONFIG = {
  /** Size of each grid cell in pixels */
  GRID_SIZE: 50,
  /** Color of the grid lines */
  GRID_COLOR: "var(--grid-color)",
  /** Color of the glow effect for light theme */
  LIGHT_GLOW_COLOR: "#ec303f",
  /** Color of the glow effect for dark theme */
  DARK_GLOW_COLOR: "#87101c",
  /** Maximum radius of the glow effect in grid cells */
  GLOW_RADIUS: 4.5,
  /** Opacity of the grid lines (0-1) */
  GRID_OPACITY: 0.3,
  /** Maximum intensity of the glow effect (0-1) */
  GLOW_INTENSITY: 0.5,
  /** Whether to show the grid lines */
  SHOW_GRID: true,
  /** CSS z-index for the component */
  Z_INDEX: -1,
  /** Whether to enable ripple effects on click */
  ENABLE_RIPPLES: true,
  /** Duration range of ripple animation in milliseconds [min, max] */
  RIPPLE_DURATION_RANGE: [500, 1100] as const,
  /** Maximum radius range of ripple effect in pixels [min, max] */
  RIPPLE_MAX_RADIUS_RANGE: [300, 800] as const,
  /** Intensity of ripple effect (0-1) */
  RIPPLE_INTENSITY: 0.7,
} as const;

/** Animation and performance constants */
export const ANIMATION = {
  /** Minimum glow alpha threshold for rendering */
  MIN_GLOW_ALPHA: 0.01,
  /** Minimum ripple alpha threshold for rendering */
  MIN_RIPPLE_ALPHA: 0.005,
  /** Default mouse position when not hovering */
  DEFAULT_MOUSE_POSITION: { x: -1000, y: -1000 },
  /** Easing power for smooth falloff calculations */
  EASING_POWER: 2,
} as const;

/** Canvas rendering constants */
export const CANVAS = {
  /** Canvas line width for grid lines */
  LINE_WIDTH: 1,
  /** Hex padding for alpha values */
  HEX_PADDING: 2,
  /** Base for hex conversion */
  HEX_BASE: 16,
  /** Maximum alpha value for calculations */
  MAX_ALPHA: 255,
} as const;
