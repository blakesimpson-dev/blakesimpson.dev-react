import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import '../styles/contact-form.scss'

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="contact-form"
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
    </form>
  )
}

export default ContactForm
