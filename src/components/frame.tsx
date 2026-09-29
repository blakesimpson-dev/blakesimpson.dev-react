import {FaExternalLinkSquareAlt, FaFilePdf} from 'react-icons/fa';
import {SITE} from '../content';
import {Markdown} from './markdown';
import '../styles/frame.scss';

/** Fixed page chrome: copyright, instructions and the repository link. */
export function Frame() {
  return (
    <div className="frame">
      <div className="frame__copyright">{SITE.frame.copyright}</div>
      <div className="frame__instructions">
        <Markdown text={SITE.frame.instructions} inline />
      </div>
      <div className="frame__links">
        <a
          className="frame__cv"
          href={SITE.cv.href}
          target="_blank"
          rel="noreferrer"
        >
          <FaFilePdf size={18} />
          {SITE.cv.label}
        </a>
        <a href={SITE.frame.repository.href} target="_blank" rel="noreferrer">
          <FaExternalLinkSquareAlt size={18} />
          <img
            src={SITE.frame.repository.image}
            alt={SITE.frame.repository.label}
            height={18}
          />
        </a>
      </div>
    </div>
  );
}
