import { ANIMATION } from "./GridBackgroundConstants";
import type { GlowParams, Position, Range, Ripple } from "./GridBackgroundTypes";
import {
  applyEasing,
  calculateDistance,
  clamp,
  generateRippleId,
  randomInRange
} from "./GridBackgroundUtils";

/**
 * Ripple effect management and calculations
 */

/**
 * Creates a new ripple at the specified position with random duration and radius
 */
export function createRipple(
  position: Position,
  maxRadiusRange: Range,
  durationRange: Range
): Ripple {
  return {
    position,
    startTime: Date.now(),
    maxRadius: randomInRange(maxRadiusRange),
    duration: randomInRange(durationRange),
    id: generateRippleId()
  };
}

/**
 * Filters out expired ripples based on their individual durations
 */
export function filterActiveRipples(ripples: Ripple[], currentTime: number): Ripple[] {
  return ripples.filter((ripple) => currentTime - ripple.startTime < ripple.duration);
}

/**
 * Calculates the current radius of a ripple based on its age and individual duration
 */
export function calculateRippleRadius(ripple: Ripple, currentTime: number): number {
  const age = currentTime - ripple.startTime;
  const progress = clamp(age / ripple.duration, 0, 1);

  // Start from 0 and expand to maxRadius
  // progress = 0 → radius = 0 (just started)
  // progress = 1 → radius = maxRadius (fully expanded)
  const easedProgress = applyEasing(progress, 1.0);
  const radius = easedProgress * ripple.maxRadius;

  return radius;
}

/**
 * Calculates the alpha (opacity) of a ripple based on its age and individual duration
 */
export function calculateRippleAlpha(
  ripple: Ripple,
  currentTime: number,
  intensity: number
): number {
  const age = currentTime - ripple.startTime;

  // If ripple has expired, return 0
  if (age >= ripple.duration) {
    return 0;
  }

  // Keep consistent intensity throughout the ripple's life
  // The fading should happen based on distance from wave front, not time
  return intensity * 0.8;
}

/**
 * Calculates ripple influence on a cell based on distance and timing using individual ripple duration
 */
export function calculateRippleInfluence(
  cellCenter: Position,
  ripple: Ripple,
  currentTime: number,
  intensity: number
): number {
  const age = currentTime - ripple.startTime;
  const progress = clamp(age / ripple.duration, 0, 1);

  // Calculate current radius directly: starts at 0, expands to maxRadius
  const currentRadius = progress * ripple.maxRadius;

  // Distance from click point to this cell
  const distance = calculateDistance(cellCenter, ripple.position);

  // Create a moving wave front
  const waveThickness = 60;
  const distanceFromWave = Math.abs(distance - currentRadius);

  // Only affect cells near the current expanding radius
  if (distanceFromWave < waveThickness) {
    const waveIntensity = 1 - distanceFromWave / waveThickness;
    const rippleAlpha = (1 - progress) * intensity; // Fade as ripple ages
    return waveIntensity * rippleAlpha * 2.0;
  }

  return 0;
}

/**
 * Calculates combined glow intensity from mouse hover and ripple effects
 */
export function calculateCombinedGlow(params: GlowParams): number {
  const {
    cellCenter,
    mousePosition,
    ripples,
    currentTime,
    gridSize,
    glowRadius,
    glowIntensity,
    rippleIntensity
  } = params;

  let totalGlow = 0;

  // Calculate mouse hover glow
  const mouseDistance = calculateDistance(mousePosition, cellCenter);
  const maxMouseDistance = glowRadius * gridSize;

  if (mouseDistance < maxMouseDistance) {
    const normalizedDistance = mouseDistance / maxMouseDistance;
    const mouseGlow = applyEasing(normalizedDistance, ANIMATION.EASING_POWER) * glowIntensity;
    totalGlow += mouseGlow;
  }

  // Calculate ripple glow effects
  for (const ripple of ripples) {
    const rippleInfluence = calculateRippleInfluence(
      cellCenter,
      ripple,
      currentTime,
      rippleIntensity
    );
    totalGlow += rippleInfluence;
  }

  return clamp(totalGlow, 0, 1);
}
