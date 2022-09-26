import PropTypes from 'prop-types'
import React from 'react'
import Page from '../components/Page'
import ResponsiveCarousel from '../components/ResponsiveCarousel'
import { useProjects } from '../hooks/useProjects'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const Projects = ({ setPage }) => {
  const { projectData } = useProjects()

  return (
    <Page
      setPage={setPage}
      name="Projects"
      content={
        <div className="projects-page">
          <div className="projects-page__blurb">
            <img className="avatar" src="/images/project-avatar.png" />
            <div>
              <p>
                From installing an Arduino on a steering column to read out
                input for a racing game, to building enterprise mining
                applications to be deployed globally, I have had a broad
                exposure to different fascets of software development whilst at
                work. I enjoy working with hardware greatly, but what I find
                most rewarding is creating clean and compelling user experiences
                whilst balancing both deliverables and constraints.
              </p>
            </div>
          </div>
          <ResponsiveCarousel
            content={projectData.map((item, index) => {
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
