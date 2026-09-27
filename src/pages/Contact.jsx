import PropTypes from 'prop-types'
import React from 'react'
import ContactForm from '../components/ContactForm'
import Page from '../components/Page'

const Contact = ({ setPage }) => {
  return (
    <Page
      setPage={setPage}
      name="Contact"
      content={
        <div className="contact-page">
          <div className="contact-page__blurb">
            <img
              src="/images/mail-anim.gif"
              height="90px"
              style={{ marginRight: '2rem' }}
            />
            <p>
              Thank you for taking the time to view my portfolio. If you have
              any questions or would like to discuss a role, please do not
              hesitate to contact me using the methods below.
            </p>
          </div>
          <ContactForm />
          <div className="contact-page__badges">
            <a
              href="https://github.com/blakesimpson-dev"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
            </a>
            <a
              href="https://twitter.com/Kataplexia_AU"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
            </a>

            <a
              href="https://www.linkedin.com/in/blake-simpson-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
            </a>
          </div>
        </div>
      }
    ></Page>
  )
}

Contact.displayName = 'Contact'

Contact.propTypes = {
  setPage: PropTypes.func,
}

export default Contact
