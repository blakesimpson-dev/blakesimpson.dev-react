import type {ReactElement} from 'react';
import {FaCaretLeft, FaCaretRight} from 'react-icons/fa';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/carousel.scss';

/** Sideways movement (px) before a touch counts as a carousel swipe. */
const SWIPE_TOLERANCE = 25;

interface ResponsiveCarouselProps {
  children: ReactElement[];
  className?: string;
  autoPlay?: boolean;
  showStatus?: boolean;
  showIndicators?: boolean;
  showThumbs?: boolean;
}

export function ResponsiveCarousel({
  children,
  className,
  autoPlay = false,
  showStatus = false,
  showIndicators = false,
  showThumbs = false,
}: ResponsiveCarouselProps) {
  return (
    <Carousel
      className={className}
      autoPlay={autoPlay}
      showStatus={showStatus}
      showIndicators={showIndicators}
      showThumbs={showThumbs}
      // Only claim a touch once it moves sideways past the tolerance, so
      // vertical swipes scroll the panel instead
      preventMovementUntilSwipeScrollTolerance
      swipeScrollTolerance={SWIPE_TOLERANCE}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="carousel-arrow carousel-arrow--prev"
          >
            <FaCaretLeft />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="carousel-arrow carousel-arrow--next"
          >
            <FaCaretRight />
          </button>
        )
      }
    >
      {children}
    </Carousel>
  );
}
