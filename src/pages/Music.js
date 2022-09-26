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
          <div className="music-page__blurb">
            <img className="avatar" src="/images/kataplexia-avatar.png" />
            <div>
              <h1>KATAPLEXIA // キャタプレクシア</h1>
              <p>
                I have been performing, creating and enjoying music for over a
                decade, having toured Europe, America and Japan. These days I
                primarily create chiptunes using a piece of software called{' '}
                <a
                  href="https://www.littlesounddj.com/lsd/index.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  Little Sound DJ
                </a>
                . I have recently started to use the new{' '}
                <a
                  href="https://dirtywave.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dirtywave M8 Tracker
                </a>{' '}
                and see myself pursuing this more in the future.
              </p>
            </div>
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
