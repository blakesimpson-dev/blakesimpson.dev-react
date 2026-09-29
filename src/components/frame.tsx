import React from 'react';
import {FaExternalLinkSquareAlt} from 'react-icons/fa';
import {SITE} from '../content';
import {Markdown} from './markdown';
import '../styles/frame.scss';

const Frame = () => {
  return (
    <div className="frame">
      <div className="frame__copyright">{SITE.frame.copyright}</div>
      <div className="frame__instructions">
        <Markdown text={SITE.frame.instructions} inline />
      </div>
      <div className="frame__links">
        <a href={SITE.frame.repository.href} target="_blank" rel="noreferrer">
          <FaExternalLinkSquareAlt size={18} />
          <img
            src={SITE.frame.repository.image}
            alt={SITE.frame.repository.label}
            height="18px"
          />
        </a>
      </div>
    </div>
  );
};

export default Frame;
