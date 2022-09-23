import React, { useState, useRef } from 'react'
import '../styles/contact-form.scss'
import { FaEnvelope } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const serviceId = 'service_jzx694n'
const templateId = 'template_yt1xkh2'
const publicKey = 'krpJ-SYhO0dBVSINd'

const ContactForm = () => {
  const form = useRef()
  const [isSubmitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result)
        setTimeout(() => {
          setSubmitted(true)
        }, 100)
      },
      (error) => {
        console.log(error)
      },
    )
  }

  return (
    <form
      className="contact-form"
      ref={form}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      {isSubmitted && (
        <span>Thank you for reaching out to me. I will be in touch soon.</span>
      )}
      {!isSubmitted && (
        <>
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
      )}
    </form>
  )
}

export default ContactForm
