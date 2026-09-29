import type {ReactElement} from 'react';
import {FaCaretLeft, FaCaretRight} from 'react-icons/fa';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/carousel.scss';

interface ResponsiveCarouselProps {
  children: ReactElement[];
  /** Extra class on the carousel root, e.g. to restyle its arrows. */
  className?: string;
  autoPlay?: boolean;
  showStatus?: boolean;
  showIndicators?: boolean;
  showThumbs?: boolean;
}

/** react-responsive-carousel with round arrow buttons and no chrome. */
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
