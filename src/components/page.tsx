import type {ReactNode} from 'react';
import {FaTimes} from 'react-icons/fa';
import type {SetPage} from '../constants/pages';

/** Props shared by the pages shown in the overlay. */
export interface OverlayPageProps {
  setPage: SetPage;
}

interface PageProps extends OverlayPageProps {
  name: string;
  children: ReactNode;
}

/** Overlay page layout: title, close button (back to Home) and content. */
export function Page({name, setPage, children}: PageProps) {
  return (
    <>
      <div className="overlay__header">
        <h1>{name}</h1>
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
