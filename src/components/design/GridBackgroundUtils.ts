import { CANVAS } from "./GridBackgroundConstants";
import type { Position, Range } from "./GridBackgroundTypes";

/**
 * Utility functions for GridBackground component
 */

/**
 * Calculates the distance between two positions
 */
export function calculateDistance(pos1: Position, pos2: Position): number {
  return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
}

/**
 * Converts a normalized value (0-1) to a hex alpha string
 */
export function alphaToHex(alpha: number): string {
  return Math.round(alpha * CANVAS.MAX_ALPHA)
    .toString(CANVAS.HEX_BASE)
    .padStart(CANVAS.HEX_PADDING, "0");
}

/**
 * Applies easing function for smooth falloff
 */
export function applyEasing(normalizedValue: number, power: number = 2): number {
  return 1 - Math.pow(normalizedValue, power);
}

/**
 * Resolves CSS custom properties (variables) to actual color values
 */
export function resolveCSSVariable(colorValue: string): string {
  if (colorValue.startsWith("var(")) {
    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue(colorValue.slice(4, -1)).trim();
  }
  return colorValue;
}

/**
 * Clamps a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Generates a unique ID for ripples
 */
let rippleIdCounter = 0;
export function generateRippleId(): number {
  return ++rippleIdCounter;
}

/**
 * Calculates the center position of a grid cell
 */
export function getCellCenter(col: number, row: number, gridSize: number): Position {
  return {
    x: col * gridSize + gridSize / 2,
    y: row * gridSize + gridSize / 2
  };
}

/**
 * Checks if a position is within the canvas bounds
 */
export function isWithinBounds(position: Position, width: number, height: number): boolean {
  return position.x >= 0 && position.x <= width && position.y >= 0 && position.y <= height;
}

/**
 * Generates a random number within a given range [min, max]
 */
export function randomInRange(range: Range): number {
  const [min, max] = range;
  return Math.random() * (max - min) + min;
}
