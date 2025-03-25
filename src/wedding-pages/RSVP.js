import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom'

const Accomodation = () => {
  const isPhone = useMediaQuery({ maxWidth: 480 })
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1279 })
  const isDesktop = useMediaQuery({ minWidth: 1280 })

  const history = useHistory()

  const onClickHome = () => {
    history.push('/wedding')
  }

  const onClickAccomodation = () => {
    history.push('/accomodation')
  }

  return (
    <>
      <main className="wedding-main">
        <div className="splash-container">
          <div className="wedding-contact-form__container">
            <form
              name="wedding-contact"
              method="POST"
              data-netlify="true"
              className="wedding-contact-form"
            >
              <input type="hidden" name="form-name" value="wedding-contact" />

              <div className="wedding-contact-form__input">
                <label htmlFor="rsvp">
                  RSVP<em>*</em>
                </label>
                <select id="rsvp" name="rsvp" required>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="wedding-contact-form__input">
                <label htmlFor="name">
                  Name/s<em>*</em>
                </label>
                <input id="name" name="name" type="text" autoFocus required />
              </div>

              <div className="wedding-contact-form__input">
                <label htmlFor="email">
                  Email<em>*</em>
                </label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="wedding-contact-form__input">
                <label htmlFor="phone">
                  Phone number<em></em>
                </label>
                <input id="phone" name="phone" type="tel" optional />
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        {isPhone && (
          <div className="footer-container--mobile">
            <button className="footer-button" onClick={onClickHome}>
              <span>Home</span>
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
              onClick={onClickHome}
            >
              <span>Home</span>
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

export default Accomodation
