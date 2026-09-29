import React from 'react';
import {FaFilePdf} from 'react-icons/fa';
import Page from '../components/page';
import ProgressiveImg from '../components/progressive_img';
import {ABOUT} from '../content';
import {Markdown} from '../components/markdown';

const About = ({setPage}) => {
  return (
    <Page
      setPage={setPage}
      name="About"
      content={
        <div className="about-page">
          <div className="about-page__blurb">
            <img className="avatar" src={ABOUT.blurb.avatar} />
            <div>
              <h1>{ABOUT.blurb.heading}</h1>
              <Markdown text={ABOUT.blurb.body} />
              {ABOUT.references.map((item, index) => {
                return (
                  <div key={`reference-${index}`}>
                    <FaFilePdf />
                    <a href={item.path} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="about-page__skills__container">
            {ABOUT.skills.map((item, index) => {
              return (
                <div
                  key={`skill-${index}`}
                  className="about-page__skills--item"
                >
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
          <div className="about-page__proficiencies">
            <h2>Proficiencies</h2>
            <div className="about-page__proficiencies__container">
              {ABOUT.proficiencies.map((item, index) => {
                return (
                  <div
                    key={`proficiency-${index}`}
                    className="about-page__proficiencies--item"
                  >
                    <ProgressiveImg
                      alt={`proficiency-logo-${item.name}`}
                      src={item.src}
                      compressedSrc={item.compressedSrc}
                    />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="about-page__languages">
            <h2>Languages</h2>
            <div className="about-page__languages__container">
              {ABOUT.languages.map((item, index) => {
                return (
                  <div
                    key={`language-${index}`}
                    className="about-page__languages--item"
                  >
                    <ProgressiveImg
                      alt={`language-logo-${item.name}`}
                      src={item.src}
                      compressedSrc={item.compressedSrc}
                    />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="about-page__attributes">
            <h2>Attributes</h2>
            <div className="about-page__attributes__container">
              {ABOUT.attributes.map((item, index) => {
                return (
                  <div
                    key={`attribute-${index}`}
                    className="about-page__attributes--item"
                  >
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="about-page__achievements">
            <h2>Achievements</h2>
            <div className="about-page__achievements__container">
              {ABOUT.achievements.map((item, index) => {
                return (
                  <div
                    key={`achievement-${index}`}
                    className="about-page__achievements--item"
                  >
                    <h2>{item.title}</h2>
                    <Markdown text={item.body} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="about-page__history">
            <h2>Work History</h2>
            <div className="about-page__history__container">
              {ABOUT.history.map((item, index) => {
                return (
                  <div
                    key={`history-${index}`}
                    className="about-page__history--item"
                  >
                    <h2>{item.title}</h2>
                    <Markdown text={item.body} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="about-page__education">
            <h2>Education History</h2>
            <div className="about-page__education__container">
              {ABOUT.education.map((item, index) => {
                return (
                  <div
                    key={`education-${index}`}
                    className="about-page__education--item"
                  >
                    <h2>{item.title}</h2>
                    <Markdown text={item.body} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }
    />
  );
};

About.displayName = 'About';

export default About;
