import {useState} from 'react';
import {FaExternalLinkSquareAlt} from 'react-icons/fa';
import {ImgModal} from '../components/img_modal';
import type {ModalImage} from '../components/img_modal';
import {Markdown} from '../components/markdown';
import {Page} from '../components/page';
import type {OverlayPageProps} from '../components/page';
import {ProgressiveImg} from '../components/progressive_img';
import {ResponsiveCarousel} from '../components/responsive_carousel';
import {PROJECTS} from '../content';

export function Projects({setPage}: OverlayPageProps) {
  const [modalImage, setModalImage] = useState<ModalImage | null>(null);
  const {blurb, projects} = PROJECTS;

  return (
    <Page name="Projects" setPage={setPage}>
      <div className="projects-page">
        <div className="projects-page__blurb">
          <img className="avatar" src={blurb.avatar} alt="" />
          <div>
            <Markdown text={blurb.body} />
          </div>
        </div>
        <ImgModal
          image={modalImage}
          onClose={() => {
            setModalImage(null);
          }}
        />
        <ResponsiveCarousel>
          {projects.map(project => (
            <div key={project.id} className="projects-page__project--container">
              <div className="projects-page__project--title">
                <h2>{project.title}</h2>
              </div>
              <div className="projects-page__project--images">
                {project.images.map(image => (
                  <ProgressiveImg
                    key={image.src}
                    style={{cursor: 'pointer'}}
                    src={image.src}
                    alt={image.alt}
                    compressedSrc={image.compressedSrc}
                    onClick={() => {
                      setModalImage(image);
                    }}
                  />
                ))}
              </div>
              <div className="projects-page__project--content">
                <Markdown text={project.body} />
              </div>
              <div className="projects-page__project--links">
                {project.links.map(link => (
                  <div key={link.href}>
                    <FaExternalLinkSquareAlt style={{marginRight: '4px'}} />
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ResponsiveCarousel>
      </div>
    </Page>
  );
}
