// filepath: c:\Dev\RobotomiesWebsite\src\components\content\ImageCarousel.tsx
import { useEffect, useState, useRef } from "react";
import "./ImageCarousel.css";
import { assetPathFixer } from "../../utils/assetPath";

interface CarouselImage {
  /**
   * Path to the image file
   */
  path: string;

  /**
   * Optional caption to display with the image
   */
  caption?: string;

  /**
   * Optional alt text for accessibility
   */
  alt?: string;
}

interface ImageCarouselProps {
  /**
   * Array of image objects to display in the carousel
   */
  images: CarouselImage[];

  /**
   * Whether to enable autoscrolling through images
   */
  autoScroll?: boolean;

  /**
   * Time in milliseconds between automatic image transitions
   * Only used when autoScroll is true
   */
  autoScrollTimeMS?: number;

  /**
   * Optional CSS class to apply to the carousel container
   */
  className?: string;
}

export default function ImageCarousel({
  images,
  autoScroll = false,
  autoScrollTimeMS: autoScrollTime = 3000,
  className = "",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(autoScroll);
  const intervalRef = useRef<number | null>(null);

  // Clear any existing interval when component unmounts
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Set up or clear autoscrolling based on isAutoScrolling state
  useEffect(() => {
    if (isAutoScrolling && images.length > 1) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoScrollTime);
    } else if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoScrolling, autoScrollTime, images.length]);

  // Navigation functions
  const goToPrevious = () => {
    if (isAutoScrolling) {
      setIsAutoScrolling(false);
    }
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    if (isAutoScrolling) {
      setIsAutoScrolling(false);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    if (isAutoScrolling) {
      setIsAutoScrolling(false);
    }
    setCurrentIndex(index);
  };

  const openImageInNewTab = (imagePath: string) => {
    window.open(assetPathFixer(imagePath), "_blank", "noopener,noreferrer");
  };

  // Don't render if no images
  if (!images.length) {
    return null;
  }

  return (
    <div className={`image-carousel ${className}`}>
      <div className="carousel-container">
        {/* Counter display */}
        <div className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Previous button */}
        <button className="carousel-arrow carousel-arrow-prev" onClick={goToPrevious}>
          <img
            src={assetPathFixer("/icons/expand.png")}
            alt="Previous"
            className="carousel-arrow-icon"
            style={{ transform: "rotate(90deg)" }}
          />
        </button>

        {/* Image slides */}
        {images.map((image, index) => (
          <div key={`slide-${index}`} className={`carousel-slide ${index === currentIndex ? "active" : ""}`}>
            <img src={assetPathFixer(image.path)} alt={image.alt || `Slide ${index + 1}`} className="carousel-image" />
            {image.caption && (
              <div className="carousel-caption">
                <div className="carousel-caption-text">{image.caption}</div>
                <button
                  className="carousel-link-button"
                  onClick={() => openImageInNewTab(image.path)}
                  aria-label="Open image in new tab"
                >
                  <img src={assetPathFixer("/icons/link.png")} alt="Open in new tab" className="carousel-link-icon" />
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Next button */}
        <button className="carousel-arrow carousel-arrow-next" onClick={goToNext}>
          <img
            src={assetPathFixer("/icons/expand.png")}
            alt="Next"
            className="carousel-arrow-icon"
            style={{ transform: "rotate(-90deg)" }}
          />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={`indicator-${index}`}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
