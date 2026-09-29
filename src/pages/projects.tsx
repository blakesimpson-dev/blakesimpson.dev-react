import React, {useState} from 'react';
import {FaExternalLinkSquareAlt} from 'react-icons/fa';
import {ImgModal} from '../components/img_modal';
import type {ModalImage} from '../components/img_modal';
import Page from '../components/page';
import {ProgressiveImg} from '../components/progressive_img';
import ResponsiveCarousel from '../components/responsive_carousel';
import {PROJECTS} from '../content';
import {Markdown} from '../components/markdown';

const Projects = ({setPage}) => {
  const [modalImage, setModalImage] = useState<ModalImage | null>(null);

  return (
    <Page
      setPage={setPage}
      name="Projects"
      content={
        <div className="projects-page">
          <div className="projects-page__blurb">
            <img className="avatar" src={PROJECTS.blurb.avatar} />
            <div>
              <Markdown text={PROJECTS.blurb.body} />
            </div>
          </div>
          <ImgModal
            image={modalImage}
            onClose={() => {
              setModalImage(null);
            }}
          />
          <ResponsiveCarousel
            content={PROJECTS.projects.map((item, index) => {
              return (
                <div
                  key={`project-${index}`}
                  className="projects-page__project--container"
                >
                  <div className="projects-page__project--title">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="projects-page__project--images">
                    {item.images.map((image, index) => {
                      return (
                        <ProgressiveImg
                          onClick={() => {
                            setModalImage(image);
                          }}
                          key={`${item.id}-modal-button-${index}`}
                          style={{cursor: 'pointer'}}
                          alt={image.alt}
                          src={image.src}
                          compressedSrc={image.compressedSrc}
                        />
                      );
                    })}
                  </div>
                  <div className="projects-page__project--content">
                    <Markdown text={item.body} />
                  </div>
                  <div className="projects-page__project--links">
                    {item.links.map((link, index) => {
                      return (
                        <div key={`link-${index}`}>
                          <FaExternalLinkSquareAlt
                            style={{marginRight: '4px'}}
                          />
                          <a href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          />
        </div>
      }
    />
  );
};

Projects.displayName = 'Projects';

export default Projects;
