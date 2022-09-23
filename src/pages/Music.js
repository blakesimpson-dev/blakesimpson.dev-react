import PropTypes from 'prop-types'
import React from 'react'
import Page from '../components/Page'
import ResponsiveCarousel from '../components/ResponsiveCarousel'
import { useMusic } from '../hooks/useMusic'

const Music = ({ setPage }) => {
  const { soundcloudIFrames, getSoundcloudIFrameSource } = useMusic()

  return (
    <Page
      setPage={setPage}
      name="Music"
      content={
        <div className="music-page">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              finibus iaculis massa ut fermentum. Ut eget aliquam ipsum.
              Suspendisse ullamcorper laoreet arcu a suscipit. Aliquam nisl
              purus, iaculis eu lobortis sit amet, pharetra ut ligula. Curabitur
              et velit et massa bibendum porttitor. Mauris laoreet vel felis et
              rutrum. Nulla facilisi. Nunc ac justo vitae ex accumsan
              ullamcorper eu id nibh. In hac habitasse platea dictumst. Ut
              sodales, odio sagittis ornare porttitor, lectus mi iaculis odio,
              eget rhoncus nulla nibh ac leo.
            </p>
          </div>
          <ResponsiveCarousel
            content={soundcloudIFrames.map((iframe, index) => {
              return (
                <iframe
                  key={index}
                  width={iframe.width}
                  height={iframe.height}
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={getSoundcloudIFrameSource(iframe)}
                />
              )
            })}
          />
        </div>
      }
    ></Page>
  )
}

Music.displayName = 'Music'

Music.propTypes = {
  setPage: PropTypes.func,
}

export default Music
