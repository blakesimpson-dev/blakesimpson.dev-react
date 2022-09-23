import PropTypes from 'prop-types'
import React from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ResponsiveCarousel = ({ content, autoPlay, showStatus }) => {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(90px - 1rem)',
    width: '2rem',
    height: '2rem',
    padding: '0',
    borderRadius: '50%',
  }

  return (
    <Carousel
      autoPlay={autoPlay}
      showStatus={showStatus}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 0 }}
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
            style={{ ...arrowStyles, right: 0 }}
          >
            <FaCaretRight />
          </button>
        )
      }
    >
      {content}
    </Carousel>
  )
}

ResponsiveCarousel.displayName = 'Carousel'

ResponsiveCarousel.propTypes = {
  content: PropTypes.element,
  autoPlay: PropTypes.bool,
  showStatus: PropTypes.bool,
}

ResponsiveCarousel.defaultProps = {
  autoPlay: false,
  showStatus: false,
}

export default ResponsiveCarousel
