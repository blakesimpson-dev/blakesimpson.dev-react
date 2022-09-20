import React from 'react'
import '../styles/frame.scss'

const Frame = () => {
  return (
    <div className="frame">
      <div className="frame__copyright">
        ©2022 — Blake Simpson. All rights reserved.
      </div>
      <div className="frame__links">
        <a
          href="https://github.com/blakesimpson-dev/blakesimpson.dev-react"
          target="_blank" rel="noreferrer"
        >
          View page on Github
        </a>
      </div>
    </div>
  )
}

export default Frame
