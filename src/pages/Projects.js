import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import ImgModal from '../components/ImgModal'
import Page from '../components/Page'
import ProgressiveImg from '../components/ProgressiveImg'
import ResponsiveCarousel from '../components/ResponsiveCarousel'
import { useProjects } from '../hooks/useProjects'

const Projects = ({ setPage }) => {
  const { projectData } = useProjects()
  const imgModal = useRef()
  const [imgModalSrc, setImgModalSrc] = useState(null)
  const [isImgModalOpen, setIsImgModalOpen] = useState(false)

  const openImgModal = (imgModalSrc) => {
    setImgModalSrc(imgModalSrc)
    setIsImgModalOpen(true)
  }

  const closeImgModal = () => {
    setImgModalSrc(null)
    setIsImgModalOpen(false)
  }

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
          <ImgModal
            innerRef={imgModal}
            src={imgModalSrc}
            isImgModalOpen={isImgModalOpen}
            closeImgModal={closeImgModal}
          />
          {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="modal__panel"
            overlayClassName="modal__overlay"
          >
            <div className="overlay__header">
              <h1>{modalContent}</h1>
              <button className="button--cancel" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>
            <div className="modal__content">
              <img src={modalContent} />
            </div>
          </Modal> */}
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
                    {item.images.map((image, index) => {
                      return (
                        <ProgressiveImg
                          onClick={() => openImgModal(image.src)}
                          key={`${item.id}-modal-button-${index}`}
                          style={{ cursor: 'pointer' }}
                          alt={image.alt}
                          src={image.src}
                          compressedSrc={image.compressedSrc}
                        />
                      )
                    })}
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
