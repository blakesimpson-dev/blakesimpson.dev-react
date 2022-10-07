// import React, { useRef, useState } from 'react'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import '../styles/contact-form.scss'

const ContactForm = () => {
  // const form = useRef()
  // const [isSubmitted, setSubmitted] = useState(false)

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   setTimeout(() => {
  //     setSubmitted(true)
  //   }, 100)
  // }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="contact-form"
      action="/success"
    >
      <input type="hidden" name="form-name" value="contact" />
      <h1>Send me a message</h1>
      <div className="contact-form__input">
        <label htmlFor="name">
          Your name<em>*</em>
        </label>
        <input id="name" name="name" type="text" autoFocus required />
      </div>
      <div className="contact-form__input">
        <label htmlFor="email">
          Your email<em>*</em>
        </label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className="contact-form__textarea">
        <label htmlFor="message">
          Message<em>*</em>
        </label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit">
        <FaEnvelope />
        &nbsp;Send
      </button>
      {/* {isSubmitted && (
        <span>Thank you for reaching out to me. I will be in touch soon.</span>
      )}
      {!isSubmitted && (
        <>
          <input type="hidden" name="form-name" value="contactForm" />
          <h1>Send me a message</h1>
          <div className="contact-form__input">
            <label htmlFor="name">
              Your name<em>*</em>
            </label>
            <input id="name" name="name" type="text" autoFocus required />
          </div>
          <div className="contact-form__input">
            <label htmlFor="email">
              Your email<em>*</em>
            </label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="contact-form__textarea">
            <label htmlFor="message">
              Message<em>*</em>
            </label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit">
            <FaEnvelope />
            &nbsp;Send
          </button>
        </>
      )} */}
    </form>
  )
}

export default ContactForm
