import PropTypes from 'prop-types'
import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Page = ({ setPage, name, content }) => {
  return (
    <>
      <div className="overlay__header">
        <h1>{name}</h1>
        <button className="button--cancel" onClick={() => setPage('Home')}>
          <FaTimes />
        </button>
      </div>
      <div className="overlay__seperator" />
      <div className="overlay__content">{content}</div>
    </>
  )
}

Page.displayName = 'Page'

Page.propTypes = {
  setPage: PropTypes.func,
  name: PropTypes.string,
  content: PropTypes.element,
}

export default Page
