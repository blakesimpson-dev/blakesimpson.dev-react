import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom'

const Accomodation = () => {
  const isPhone = useMediaQuery({ maxWidth: 480 })
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1279 })
  const isDesktop = useMediaQuery({ minWidth: 1280 })

  const history = useHistory()

  const onClickRsvp = () => {
    history.push('/rsvp')
  }

  const onClickHome = () => {
    history.push('/wedding')
  }

  const onClickAccomodationOne = () => {
    window.location.href = 'https://www.margaretrivermotel.com.au/'
  }

  const onClickAccomodationTwo = () => {
    window.location.href = 'https://leeuwinapartments.com.au/'
  }

  const onClickAccomodationThree = () => {
    window.location.href =
      'https://www.margaretriver.com/plan-your-trip/accommodation/grande-escape-resort/'
  }

  const onClickRosewoodMap = () => {
    window.location.href =
      'https://www.rosewoodguesthouse.com.au/map-and-directions.html'
  }

  return (
    <>
      <main className="wedding-main">
        <div className="accomodation-container">
          {isDesktop && (
            <>
              <div className="accomodation-container--top">
                <img
                  src="/images/wedding/accomodation1.png"
                  alt="accomodation-one"
                  onClick={onClickAccomodationOne}
                />
                <img
                  src="/images/wedding/accomodation2.png"
                  alt="accomodation-two"
                  onClick={onClickAccomodationTwo}
                />
                <img
                  src="/images/wedding/accomodation3.png"
                  alt="accomodation-three"
                  onClick={onClickAccomodationThree}
                />
              </div>
              <div className="accomodation-container--bottom">
                <img
                  id="map"
                  src="/images/wedding/rosewood.png"
                  alt="rosewood"
                  onClick={onClickRosewoodMap}
                />
              </div>
            </>
          )}

          {isLaptop && (
            <>
              <div className="accomodation-container--left">
                <img
                  src="/images/wedding/accomodation1.png"
                  alt="accomodation-one"
                  onClick={onClickAccomodationOne}
                />
                <img
                  src="/images/wedding/accomodation2.png"
                  alt="accomodation-two"
                  onClick={onClickAccomodationTwo}
                />
                <img
                  src="/images/wedding/accomodation3.png"
                  alt="accomodation-three"
                  onClick={onClickAccomodationThree}
                />
              </div>
              <div className="accomodation-container--right">
                <img
                  id="map"
                  src="/images/wedding/rosewood.png"
                  alt="rosewood"
                  onClick={onClickRosewoodMap}
                />
              </div>
            </>
          )}
          {(isPhone || isTablet) && (
            <>
              <div className="accomodation-container--centre">
                <img
                  src="/images/wedding/accomodation1.png"
                  alt="accomodation-one"
                  onClick={onClickAccomodationOne}
                />
                <img
                  src="/images/wedding/accomodation2.png"
                  alt="accomodation-two"
                  onClick={onClickAccomodationTwo}
                />
                <img
                  src="/images/wedding/accomodation3.png"
                  alt="accomodation-three"
                  onClick={onClickAccomodationThree}
                />
                <img
                  id="map"
                  src="/images/wedding/rosewood.png"
                  alt="rosewood"
                  onClick={onClickRosewoodMap}
                />
              </div>
            </>
          )}
        </div>
        {isPhone && (
          <div className="footer-container--mobile">
            <button className="footer-button" onClick={onClickRsvp}>
              <span>R.S.V.P.</span>
            </button>
            <button className="footer-button" onClick={onClickHome}>
              <span>Home</span>
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
              onClick={onClickHome}
            >
              <span>Home</span>
            </button>
          </div>
        )}
      </main>
    </>
  )
}

export default Accomodation
