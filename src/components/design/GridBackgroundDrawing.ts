import { ANIMATION, CANVAS } from "./GridBackgroundConstants";
import { calculateCombinedGlow, filterActiveRipples } from "./GridBackgroundRippleEffect";
import type { DrawingContext, GlowParams } from "./GridBackgroundTypes";
import { alphaToHex, getCellCenter, resolveCSSVariable } from "./GridBackgroundUtils";

/**
 * Drawing utilities for GridBackground component
 */

/**
 * Draws the complete grid with glow and ripple effects
 */
export function drawGridWithEffects(
  context: DrawingContext,
  gridSize: number,
  glowRadius: number,
  gridOpacity: number,
  glowIntensity: number,
  showGrid: boolean,
  rippleIntensity: number
): void {
  const { ctx, canvasSize, mousePosition, currentTime } = context;
  const { width, height } = canvasSize;

  // Filter active ripples using individual durations
  const activeRipples = filterActiveRipples(context.ripples, currentTime);

  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  // Calculate grid dimensions
  const cols = Math.ceil(width / gridSize) + 1;
  const rows = Math.ceil(height / gridSize) + 1;

  // Resolve CSS variables with fallbacks
  const resolvedGridColor = resolveCSSVariable(context.resolvedGridColor) || "#ababc4";
  const resolvedGlowColor = resolveCSSVariable(context.resolvedGlowColor) || "#5c5ced";

  // Draw grid cells with effects
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const x = col * gridSize;
      const y = row * gridSize;
      const cellCenter = getCellCenter(col, row, gridSize);

      // Calculate combined glow from mouse and ripples
      const glowParams: GlowParams = {
        cellCenter,
        mousePosition,
        ripples: activeRipples,
        currentTime,
        gridSize,
        glowRadius,
        glowIntensity,
        rippleIntensity
      };

      const totalGlowAlpha = calculateCombinedGlow(glowParams);

      // Draw glow effect if intensity is above threshold
      if (totalGlowAlpha > ANIMATION.MIN_GLOW_ALPHA) {
        drawGlowEffect(ctx, x, y, gridSize, resolvedGlowColor, totalGlowAlpha);
      }

      // Draw grid lines if enabled
      if (showGrid && gridOpacity > 0) {
        drawGridCell(ctx, x, y, gridSize, resolvedGridColor, gridOpacity);
      }
    }
  }

  // Update the ripples array in the context (remove expired ones)
  context.ripples.splice(0, context.ripples.length, ...activeRipples);
}

/**
 * Draws a glow effect for a single cell
 */
function drawGlowEffect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  gridSize: number,
  glowColor: string,
  alpha: number
): void {
  ctx.fillStyle = `${glowColor}${alphaToHex(alpha)}`;
  ctx.fillRect(x, y, gridSize, gridSize);
}

/**
 * Draws the grid lines for a single cell
 */
function drawGridCell(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  gridSize: number,
  gridColor: string,
  opacity: number
): void {
  ctx.strokeStyle = `${gridColor}${alphaToHex(opacity)}`;
  ctx.lineWidth = CANVAS.LINE_WIDTH;
  ctx.strokeRect(x, y, gridSize, gridSize);
}

/**
 * Prepares the drawing context with resolved colors
 */
export function prepareDrawingContext(
  ctx: CanvasRenderingContext2D,
  canvasSize: { width: number; height: number },
  mousePosition: { x: number; y: number },
  ripples: DrawingContext["ripples"],
  gridColor: string,
  glowColor: string
): DrawingContext {
  return {
    ctx,
    canvasSize,
    mousePosition,
    ripples,
    currentTime: Date.now(),
    resolvedGridColor: gridColor,
    resolvedGlowColor: glowColor
  };
}
