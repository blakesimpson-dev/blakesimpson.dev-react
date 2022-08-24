import PropTypes from 'prop-types'
import React from 'react'

const Menu = ({ page, setPage }) => {
  return (
    <div className="menu">
      <div>blakesimpson.dev</div>
      <div>
        <button onClick={() => setPage('Music')}>Music</button>
        <button onClick={() => setPage('Projects')}>Projects</button>
        <button onClick={() => setPage('About')}>About</button>
        <button onClick={() => setPage('Contact')}>Contact</button>
      </div>
    </div>
  )
}

Menu.displayName = 'Menu'

Menu.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func,
}

export default Menu
