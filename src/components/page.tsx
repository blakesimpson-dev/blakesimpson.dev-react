import type {ReactNode} from 'react';
import {FaTimes} from 'react-icons/fa';
import type {SetPage} from '../constants/pages';

/** Props shared by the pages shown in the overlay. */
export interface OverlayPageProps {
  setPage: SetPage;
}

interface PageProps extends OverlayPageProps {
  name: string;
  /** Small avatar beside the title; compact mode shows it here instead of in the page blurb. */
  avatar?: string;
  children: ReactNode;
}

/** Overlay page layout: title, close button (back to Home) and content. */
export function Page({name, avatar, setPage, children}: PageProps) {
  return (
    <>
      <div className="overlay__header">
        <div className="overlay__title">
          {avatar && <img className="overlay__avatar" src={avatar} alt="" />}
          <h1>{name}</h1>
        </div>
        <button
          className="button--cancel"
          onClick={() => {
            setPage('Home');
          }}
        >
          <FaTimes />
        </button>
      </div>
      <div className="overlay__separator" />
      <div className="overlay__content">{children}</div>
    </>
  );
}
