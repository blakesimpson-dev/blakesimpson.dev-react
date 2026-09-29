import React from 'react';
import {ContactForm} from '../components/contact_form';
import Page from '../components/page';
import {Markdown} from '../components/markdown';
import {CONTACT} from '../content';

const Contact = ({setPage}) => {
  return (
    <Page
      setPage={setPage}
      name="Contact"
      content={
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
      }
    />
  );
};

Contact.displayName = 'Contact';

export default Contact;
