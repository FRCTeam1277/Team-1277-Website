/**
 * Type definitions for GridBackground component
 */

/**
 * Type for defining a range with min and max values
 */
export type Range = readonly [min: number, max: number];

/**
 * Props for the GridBackground component
 */
export interface GridBackgroundProps {
  /** Size of each grid cell in pixels */
  gridSize?: number;
  /** Color of the grid lines */
  gridColor?: string;
  /** Color of the glow effect for light theme */
  lightGlowColor?: string;
  /** Color of the glow effect for dark theme */
  darkGlowColor?: string;
  /** Maximum radius of the glow effect in grid cells */
  glowRadius?: number;
  /** Opacity of the grid lines (0-1) */
  gridOpacity?: number;
  /** Maximum intensity of the glow effect (0-1) */
  glowIntensity?: number;
  /** Whether to show the grid lines */
  showGrid?: boolean;
  /** CSS z-index for the component */
  zIndex?: number;
  /** Whether to enable ripple effects on click */
  enableRipples?: boolean;
  /** Duration range of ripple animation in milliseconds [min, max] */
  rippleDurationRange?: Range;
  /** Maximum radius range of ripple effect in pixels [min, max] */
  rippleMaxRadiusRange?: Range;
  /** Intensity of ripple effect (0-1) */
  rippleIntensity?: number;
}

/**
 * Interface for mouse/click position
 */
export interface Position {
  x: number;
  y: number;
}

/**
 * Interface for canvas dimensions
 */
export interface CanvasSize {
  width: number;
  height: number;
}

/**
 * Interface for a single ripple effect
 */
export interface Ripple {
  /** Position where the ripple started */
  position: Position;
  /** Timestamp when the ripple was created */
  startTime: number;
  /** Maximum radius the ripple will reach */
  maxRadius: number;
  /** Duration of this specific ripple */
  duration: number;
  /** Unique identifier for the ripple */
  id: number;
}

/**
 * Interface for drawing context and parameters
 */
export interface DrawingContext {
  ctx: CanvasRenderingContext2D;
  canvasSize: CanvasSize;
  mousePosition: Position;
  ripples: Ripple[];
  currentTime: number;
  resolvedGridColor: string;
  resolvedGlowColor: string;
}

/**
 * Interface for glow calculation parameters
 */
export interface GlowParams {
  cellCenter: Position;
  mousePosition: Position;
  ripples: Ripple[];
  currentTime: number;
  gridSize: number;
  glowRadius: number;
  glowIntensity: number;
  rippleIntensity: number;
}
