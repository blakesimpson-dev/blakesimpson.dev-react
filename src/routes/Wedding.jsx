import React from 'react'
import './wedding.scss'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom'

const Wedding = () => {
  const isPhone = useMediaQuery({ maxWidth: 480 })
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1279 })
  const isDesktop = useMediaQuery({ minWidth: 1280 })

  const history = useHistory()

  const onClickRsvp = () => {
    history.push('/rsvp')
  }

  const onClickAccomodation = () => {
    history.push('/accomodation')
  }

  return (
    <>
      <main className="wedding-main">
        <div className="splash-container">
          <div className="splash-container--title">
            {isPhone && (
              <>
                <h3>
                  We would be honoured for you to join us in
                  <br />
                  celebrating the marriage of
                </h3>
                <div>
                  <h1>Kathryn</h1>
                  <h1>+</h1>
                  <h1>Blake</h1>
                </div>
              </>
            )}
            {(isLaptop || isDesktop || isTablet) && (
              <>
                <h3>
                  We would be honoured for you to join us in celebrating the
                  marriage of
                </h3>
                <h1>Kathryn + Blake</h1>
              </>
            )}
          </div>

          <div className="splash-container--details">
            {(isPhone || isTablet) && (
              <>
                <h2>Saturday 29th of November at 4pm</h2>
                <h3>
                  Rosewood, 54 Wallcliffe Road
                  <br />
                  Margaret River
                </h3>
              </>
            )}
            {(isLaptop || isDesktop) && (
              <>
                <h2>Saturday 29th of November at 4pm</h2>
                <h3>Rosewood, 54 Wallcliffe Road, Margaret River</h3>
              </>
            )}
          </div>
        </div>
        {isPhone && (
          <div className="footer-container--mobile">
            <button className="footer-button" onClick={onClickRsvp}>
              <span>R.S.V.P.</span>
            </button>
            <button className="footer-button" onClick={onClickAccomodation}>
              <span>Accomodation</span>
            </button>
          </div>
        )}
        {(isTablet || isLaptop || isDesktop) && (
          <div className="footer-container">
            <button
              className="footer-button footer-button--left"
              onClick={onClickRsvp}
            >
              <span>R.S.V.P.</span>
            </button>
            <button
              className="footer-button footer-button--right"
              onClick={onClickAccomodation}
            >
              <span>Accomodation</span>
            </button>
          </div>
        )}
      </main>
    </>
  )
}

export default Wedding
