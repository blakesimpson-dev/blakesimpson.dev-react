import {ContactForm} from '../components/contact_form';
import {BlurbHeading} from '../components/blurb_heading';
import {Markdown} from '../components/markdown';
import {Page} from '../components/page';
import type {OverlayPageProps} from '../components/page';
import {CONTACT} from '../content';

export function Contact({setPage}: OverlayPageProps) {
  return (
    <Page name="Contact" setPage={setPage}>
      <div className="contact-page">
        <div className="contact-page__blurb">
          <div>
            {CONTACT.blurb.heading && (
              <BlurbHeading text={CONTACT.blurb.heading} />
            )}
            <Markdown text={CONTACT.blurb.body} />
          </div>
        </div>
        <ContactForm />
      </div>
    </Page>
  );
}
