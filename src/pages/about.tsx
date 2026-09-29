import {FaFilePdf} from 'react-icons/fa';
import {Markdown} from '../components/markdown';
import {Page} from '../components/page';
import type {OverlayPageProps} from '../components/page';
import {ProgressiveImg} from '../components/progressive_img';
import {ABOUT} from '../content';
import type {Entry, Logo} from '../content/types';

export function About({setPage}: OverlayPageProps) {
  const {blurb, references, skills} = ABOUT;

  return (
    <Page name="About" setPage={setPage}>
      <div className="about-page">
        <div className="about-page__blurb">
          <img className="avatar" src={blurb.avatar} alt="" />
          <div>
            <h1>{blurb.heading}</h1>
            <Markdown text={blurb.body} />
            {references.map(reference => (
              <div key={reference.path}>
                <FaFilePdf />
                <a href={reference.path} target="_blank" rel="noreferrer">
                  {reference.name}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="about-page__skills__container">
          {skills.map(skill => (
            <div key={skill} className="about-page__skills--item">
              <span>{skill}</span>
            </div>
          ))}
        </div>
        <LogoSection
          section="proficiencies"
          title="Proficiencies"
          logos={ABOUT.proficiencies}
        />
        <LogoSection
          section="languages"
          title="Languages"
          logos={ABOUT.languages}
        />
        <WordSection
          section="attributes"
          title="Attributes"
          words={ABOUT.attributes}
        />
        <EntrySection
          section="achievements"
          title="Achievements"
          entries={ABOUT.achievements}
        />
        <EntrySection
          section="history"
          title="Work History"
          entries={ABOUT.history}
        />
        <EntrySection
          section="education"
          title="Education History"
          entries={ABOUT.education}
        />
      </div>
    </Page>
  );
}

/** Props shared by the About sections; section names the BEM block. */
interface SectionProps {
  section: string;
  title: string;
}

interface LogoSectionProps extends SectionProps {
  logos: Logo[];
}

function LogoSection({section, title, logos}: LogoSectionProps) {
  return (
    <div className={`about-page__${section}`}>
      <h2>{title}</h2>
      <div className={`about-page__${section}__container`}>
        {logos.map(logo => (
          <div key={logo.name} className={`about-page__${section}--item`}>
            <ProgressiveImg
              src={logo.src}
              alt={`${logo.name} logo`}
              compressedSrc={logo.compressedSrc}
            />
            <span>{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface WordSectionProps extends SectionProps {
  words: string[];
}

function WordSection({section, title, words}: WordSectionProps) {
  return (
    <div className={`about-page__${section}`}>
      <h2>{title}</h2>
      <div className={`about-page__${section}__container`}>
        {words.map(word => (
          <div key={word} className={`about-page__${section}--item`}>
            <span>{word}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface EntrySectionProps extends SectionProps {
  entries: Entry[];
}

function EntrySection({section, title, entries}: EntrySectionProps) {
  return (
    <div className={`about-page__${section}`}>
      <h2>{title}</h2>
      <div className={`about-page__${section}__container`}>
        {entries.map(entry => (
          <div key={entry.title} className={`about-page__${section}--item`}>
            <h2>{entry.title}</h2>
            <Markdown text={entry.body} />
          </div>
        ))}
      </div>
    </div>
  );
}
