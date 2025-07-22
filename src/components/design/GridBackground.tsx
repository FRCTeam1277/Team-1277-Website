import type { JSX } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import "./GridBackground.css";
import { ANIMATION, DEFAULT_CONFIG } from "./GridBackgroundConstants";
import { drawGridWithEffects, prepareDrawingContext } from "./GridBackgroundDrawing";
import { createRipple } from "./GridBackgroundRippleEffect";
import type { CanvasSize, GridBackgroundProps, Position, Ripple } from "./GridBackgroundTypes";
import { isWithinBounds } from "./GridBackgroundUtils";

/**
 * GridBackground component that creates an interactive grid overlay with mouse-following glow effects
 * and click-triggered ripple animations. Optimized for performance with canvas rendering and requestAnimationFrame
 *
 * @param props - Configuration options for the grid background
 * @returns {JSX.Element} The grid background component
 */
export default function GridBackground({
  gridSize = DEFAULT_CONFIG.GRID_SIZE,
  gridColor = DEFAULT_CONFIG.GRID_COLOR,
  lightGlowColor = DEFAULT_CONFIG.LIGHT_GLOW_COLOR,
  darkGlowColor = DEFAULT_CONFIG.DARK_GLOW_COLOR,
  glowRadius = DEFAULT_CONFIG.GLOW_RADIUS,
  gridOpacity = DEFAULT_CONFIG.GRID_OPACITY,
  glowIntensity = DEFAULT_CONFIG.GLOW_INTENSITY,
  showGrid = DEFAULT_CONFIG.SHOW_GRID,
  zIndex = DEFAULT_CONFIG.Z_INDEX,
  enableRipples = DEFAULT_CONFIG.ENABLE_RIPPLES,
  rippleDurationRange = DEFAULT_CONFIG.RIPPLE_DURATION_RANGE,
  rippleMaxRadiusRange = DEFAULT_CONFIG.RIPPLE_MAX_RADIUS_RANGE,
  rippleIntensity = DEFAULT_CONFIG.RIPPLE_INTENSITY,
}: GridBackgroundProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef<Position>(ANIMATION.DEFAULT_MOUSE_POSITION);
  const ripples = useRef<Ripple[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const [canvasSize, setCanvasSize] = useState<CanvasSize>({ width: 0, height: 0 });
  const isDarkMode = useTheme().theme === "dark";

  // Determine which glow color to use based on theme
  const currentGlowColor = isDarkMode ? darkGlowColor || lightGlowColor : lightGlowColor || darkGlowColor;

  /**
   * Updates canvas size based on window dimensions
   */
  const updateCanvasSize = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setCanvasSize({ width, height });
  }, []);

  /**
   * Handles mouse movement with throttling for performance
   */
  const handleMouseMove = useCallback((event: MouseEvent) => {
    mousePosition.current = {
      x: event.clientX,
      y: event.clientY,
    };
  }, []);

  /**
   * Handles click events to create ripple effects
   */
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (!enableRipples) return;

      const clickPosition: Position = {
        x: event.clientX,
        y: event.clientY,
      };

      // Only create ripples for clicks within the canvas bounds
      if (isWithinBounds(clickPosition, canvasSize.width, canvasSize.height)) {
        const newRipple = createRipple(clickPosition, rippleMaxRadiusRange, rippleDurationRange);
        ripples.current.push(newRipple);
      }
    },
    [enableRipples, canvasSize.width, canvasSize.height, rippleMaxRadiusRange, rippleDurationRange]
  );

  /**
   * Draws the grid and effects on the canvas
   */
  const drawGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawingContext = prepareDrawingContext(
      ctx,
      canvasSize,
      mousePosition.current,
      ripples.current,
      gridColor,
      currentGlowColor || gridColor
    );

    drawGridWithEffects(drawingContext, gridSize, glowRadius, gridOpacity, glowIntensity, showGrid, rippleIntensity);
  }, [
    canvasSize,
    gridSize,
    gridColor,
    currentGlowColor,
    glowRadius,
    gridOpacity,
    glowIntensity,
    showGrid,
    rippleIntensity,
  ]);

  /**
   * Animation loop using requestAnimationFrame for smooth performance
   */
  const animate = useCallback(() => {
    drawGrid();
    animationFrameId.current = requestAnimationFrame(animate);
  }, [drawGrid]);

  // Set up canvas size and event listeners
  useEffect(() => {
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    if (enableRipples) {
      window.addEventListener("click", handleClick, { passive: true });
    }

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (enableRipples) {
        window.removeEventListener("click", handleClick);
      }
    };
  }, [updateCanvasSize, handleMouseMove, handleClick, enableRipples]);

  // Start animation loop
  useEffect(() => {
    if (canvasSize.width > 0 && canvasSize.height > 0) {
      animate();
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, canvasSize]);

  // Update canvas resolution when size changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvasSize.width > 0 && canvasSize.height > 0) {
      // Set actual canvas size for crisp rendering
      canvas.width = canvasSize.width;
      canvas.height = canvasSize.height;

      // Set display size via CSS
      canvas.style.width = `${canvasSize.width}px`;
      canvas.style.height = `${canvasSize.height}px`;
    }
  }, [canvasSize]);

  return <canvas ref={canvasRef} className="grid-background" style={{ zIndex }} aria-hidden="true" />;
}
