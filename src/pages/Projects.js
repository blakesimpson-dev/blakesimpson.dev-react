import PropTypes from 'prop-types'
import React from 'react'
import Page from '../components/Page'
import ResponsiveCarousel from '../components/ResponsiveCarousel'
import { useGames } from '../hooks/useGames'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const Projects = ({ setPage }) => {
  const { gameData } = useGames()

  return (
    <Page
      setPage={setPage}
      name="Projects"
      content={
        <div className="projects-page">
          <div className="projects-page__blurb">
            <img className="avatar" src="/images/project-avatar.png" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              finibus iaculis massa ut fermentum. Ut eget aliquam ipsum.
              Suspendisse ullamcorper laoreet arcu a suscipit. Aliquam nisl
              purus, iaculis eu lobortis sit amet, pharetra ut ligula. Curabitur
              et velit et massa bibendum porttitor. Mauris laoreet vel felis et
              rutrum. Nulla facilisi. Nunc ac justo vitae ex accumsan
              ullamcorper eu id nibh. In hac habitasse platea dictumst. Ut
              sodales, odio sagittis ornare porttitor, lectus mi iaculis odio,
              eget rhoncus nulla nibh ac leo.
            </p>
          </div>
          <ResponsiveCarousel
            content={gameData.map((item, index) => {
              return (
                <div
                  key={`project-${index}`}
                  className="projects-page__project--container"
                >
                  <div className="projects-page__project--title">
                    {item.title}
                  </div>
                  <div className="projects-page__project--images">
                    {item.images}
                  </div>
                  <div className="projects-page__project--content">
                    {item.content}
                  </div>
                  <div className="projects-page__project--links">
                    {item.links.map((item, index) => {
                      return (
                        <div key={`link-${index}`}>
                          <FaExternalLinkSquareAlt
                            style={{ marginRight: '4px' }}
                          />
                          {item}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          />
        </div>
      }
    ></Page>
  )
}

Projects.displayName = 'Projects'

Projects.propTypes = {
  setPage: PropTypes.func,
}

export default Projects
