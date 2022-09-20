import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FaCaretUp } from 'react-icons/fa'
import { FaCaretDown } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import '../styles/dropdown.scss'

const Dropdown = ({ items, setSelectedItem }) => {
  const [isOpen, setIsOpen] = useState()
  const [headerContent, setHeaderContent] = useState()

  const selectItem = (item) => {
    const { name, id } = item
    setHeaderContent(name)
    setIsOpen(false)
    setSelectedItem(id)
  }

  useEffect(() => {
    setHeaderContent(items[0].name)
  }, [])

  return (
    <div className="dropdown-wrapper">
      <button
        type="button"
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="dropdown-header-content">{headerContent}</div>
        {isOpen ? <FaCaretUp size={28} /> : <FaCaretDown size={28} />}
      </button>
      {isOpen && (
        <div role="list" className="dropdown-list">
          {items.map((item) => (
            <button
              type="button"
              className="dropdown-list-item"
              key={item.id}
              onClick={() => selectItem(item)}
            >
              {item.name} {item.selected && <FaCheck />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

Dropdown.displayName = 'Dropdown'

Dropdown.propTypes = {
  items: PropTypes.array,
  setSelectedItem: PropTypes.func,
}

export default Dropdown
