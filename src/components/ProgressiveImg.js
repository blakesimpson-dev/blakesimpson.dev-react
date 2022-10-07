import React, { useState, useEffect } from 'react'
import PropType from 'prop-types'

const ProgressiveImg = ({ compressedSrc, src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(compressedSrc || src)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImgSrc(src)
    }
  }, [src])

  const loadClass =
    compressedSrc && imgSrc === compressedSrc
      ? 'image--loading'
      : 'image--loaded'

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={alt || ''}
      className={`${loadClass}`}
    />
  )
}

ProgressiveImg.propTypes = {
  compressedSrc: PropType.string,
  src: PropType.string,
  alt: PropType.string,
}

export default ProgressiveImg
