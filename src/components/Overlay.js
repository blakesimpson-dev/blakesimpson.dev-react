import PropTypes from 'prop-types'
import React from 'react'

const Overlay = ({ page, setPage }) => {
  return (
    <>
      {page == 'Projects' && (
        <>
          <div className="dot">
            <h1>Projects</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus iaculis massa ut fermentum. Ut eget aliquam ipsum.
            Suspendisse ullamcorper laoreet arcu a suscipit. Aliquam nisl purus,
            iaculis eu lobortis sit amet, pharetra ut ligula. Curabitur et velit
            et massa bibendum porttitor. Mauris laoreet vel felis et rutrum.
            Nulla facilisi. Nunc ac justo vitae ex accumsan ullamcorper eu id
            nibh. In hac habitasse platea dictumst. Ut sodales, odio sagittis
            ornare porttitor, lectus mi iaculis odio, eget rhoncus nulla nibh ac
            leo.
            <button onClick={() => setPage('Home')}>exit</button>
          </div>
        </>
      )}
      {page == 'Music' && (
        <>
          <div className="dot">
            <h1>Music</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus iaculis massa ut fermentum. Ut eget aliquam ipsum.
            Suspendisse ullamcorper laoreet arcu a suscipit. Aliquam nisl purus,
            iaculis eu lobortis sit amet, pharetra ut ligula. Curabitur et velit
            et massa bibendum porttitor. Mauris laoreet vel felis et rutrum.
            Nulla facilisi. Nunc ac justo vitae ex accumsan ullamcorper eu id
            nibh. In hac habitasse platea dictumst. Ut sodales, odio sagittis
            ornare porttitor, lectus mi iaculis odio, eget rhoncus nulla nibh ac
            leo.
            <button onClick={() => setPage('Home')}>exit</button>
          </div>
        </>
      )}
      {page == 'About' && (
        <>
          <div className="dot">
            <h1>About</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus iaculis massa ut fermentum. Ut eget aliquam ipsum.
            Suspendisse ullamcorper laoreet arcu a suscipit. Aliquam nisl purus,
            iaculis eu lobortis sit amet, pharetra ut ligula. Curabitur et velit
            et massa bibendum porttitor. Mauris laoreet vel felis et rutrum.
            Nulla facilisi. Nunc ac justo vitae ex accumsan ullamcorper eu id
            nibh. In hac habitasse platea dictumst. Ut sodales, odio sagittis
            ornare porttitor, lectus mi iaculis odio, eget rhoncus nulla nibh ac
            leo.
            <button onClick={() => setPage('Home')}>exit</button>
          </div>
        </>
      )}
      {page == 'Contact' && (
        <>
          <div className="dot">
            <h1>Contact</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus iaculis massa ut fermentum. Ut eget aliquam ipsum.
            Suspendisse ullamcorper laoreet arcu a suscipit. Aliquam nisl purus,
            iaculis eu lobortis sit amet, pharetra ut ligula. Curabitur et velit
            et massa bibendum porttitor. Mauris laoreet vel felis et rutrum.
            Nulla facilisi. Nunc ac justo vitae ex accumsan ullamcorper eu id
            nibh. In hac habitasse platea dictumst. Ut sodales, odio sagittis
            ornare porttitor, lectus mi iaculis odio, eget rhoncus nulla nibh ac
            leo.
            <button onClick={() => setPage('Home')}>exit</button>
          </div>
        </>
      )}
    </>
  )
}

Overlay.displayName = 'Overlay'

Overlay.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func,
}

export default Overlay
