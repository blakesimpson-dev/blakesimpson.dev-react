import type {CSSProperties, ReactElement} from 'react';
import {FaCaretLeft, FaCaretRight} from 'react-icons/fa';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ARROW_STYLES: CSSProperties = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 2.25rem)',
  width: '2rem',
  height: '2rem',
  padding: '0',
  borderRadius: '50%',
};

interface ResponsiveCarouselProps {
  children: ReactElement[];
  autoPlay?: boolean;
  showStatus?: boolean;
  showIndicators?: boolean;
  showThumbs?: boolean;
}

/** react-responsive-carousel with round arrow buttons and no chrome. */
export function ResponsiveCarousel({
  children,
  autoPlay = false,
  showStatus = false,
  showIndicators = false,
  showThumbs = false,
}: ResponsiveCarouselProps) {
  return (
    <Carousel
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
            style={{...ARROW_STYLES, left: 0}}
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
            style={{...ARROW_STYLES, right: 0}}
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
