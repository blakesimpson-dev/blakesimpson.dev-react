import PropTypes from 'prop-types'
import React from 'react'
import Page from '../components/Page'

const About = ({ setPage }) => {
  return (
    <Page
      setPage={setPage}
      name="About"
      content={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus
          iaculis massa ut fermentum. Ut eget aliquam ipsum. Suspendisse
          ullamcorper laoreet arcu a suscipit. Aliquam nisl purus, iaculis eu
          lobortis sit amet, pharetra ut ligula. Curabitur et velit et massa
          bibendum porttitor. Mauris laoreet vel felis et rutrum. Nulla
          facilisi. Nunc ac justo vitae ex accumsan ullamcorper eu id nibh. In
          hac habitasse platea dictumst. Ut sodales, odio sagittis ornare
          porttitor, lectus mi iaculis odio, eget rhoncus nulla nibh ac leo.
        </>
      }
    ></Page>
  )
}

About.displayName = 'About'

About.propTypes = {
  setPage: PropTypes.func,
}

export default About
