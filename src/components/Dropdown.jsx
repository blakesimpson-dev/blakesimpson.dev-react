import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { FaCaretDown, FaCaretUp, FaCheck } from 'react-icons/fa'
import '../styles/dropdown.scss'

const Dropdown = ({ headerContent, items, setSelectedItem }) => {
  const [isOpen, setIsOpen] = useState()

  const selectItem = (item) => {
    const { id } = item
    setIsOpen(false)
    setSelectedItem(id)
  }

  return (
    <div className="dropdown-wrapper">
      <button
        type="button"
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="dropdown-header--content">{headerContent}</div>
        {isOpen ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
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
              <div className="dropdown-list-item--content">{item.name}</div>
              {item.selected && <FaCheck size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

Dropdown.displayName = 'Dropdown'

Dropdown.propTypes = {
  headerContent: PropTypes.string,
  items: PropTypes.array,
  setSelectedItem: PropTypes.func,
}

export default Dropdown
