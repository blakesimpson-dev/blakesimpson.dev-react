import {ContactForm} from '../components/contact_form';
import {Markdown} from '../components/markdown';
import {Page} from '../components/page';
import type {OverlayPageProps} from '../components/page';
import {CONTACT} from '../content';

export function Contact({setPage}: OverlayPageProps) {
  return (
    <Page name="Contact" setPage={setPage}>
      <div className="contact-page">
        <div className="contact-page__blurb">
          <Markdown text={CONTACT.blurb.body} />
        </div>
        <ContactForm />
        <div className="contact-page__badges">
          {CONTACT.badges.map(badge => (
            <a
              key={badge.name}
              href={badge.href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={badge.image} alt={badge.name} />
            </a>
          ))}
        </div>
      </div>
    </Page>
  );
}
