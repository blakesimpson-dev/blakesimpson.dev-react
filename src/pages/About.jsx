import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import Page from '../components/Page'
import ProgressiveImg from '../components/ProgressiveImg'
import {
  ACHIEVEMENT_DATA,
  ATTRIBUTE_DATA,
  EDUCATION_DATA,
  HISTORY_DATA,
  LANGUAGE_DATA,
  PROFICIENCY_DATA,
  REFERENCE_DATA,
  SKILL_DATA,
} from '../content/about'

const About = ({ setPage }) => {
  return (
    <Page
      setPage={setPage}
      name="About"
      content={
        <div className="about-page">
          <div className="about-page__blurb">
            <img className="avatar" src="/images/blake-avatar.png" />
            <div>
              <h1>Blake Simpson - Technical Lead</h1>
              <p>
                I am a passionate full-stack developer who has led teams across
                diverse environments and built software that matters. My
                professional background includes working on mission-critical
                emergency services systems, innovative safety management
                solutions, groundbreaking interactive experiences, and tools
                that have engaged and supported vulnerable communities.
                Proficient in multiple languages and frameworks, I bring
                creative problem-solving and a human-centered design approach to
                applications where user experience is critical.
              </p>
              {REFERENCE_DATA.map((item, index) => {
                return (
                  <div key={`reference-${index}`}>
                    <FaFilePdf />
                    <a href={item.path} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="about-page__skills__container">
            {SKILL_DATA.map((item, index) => {
              return (
                <div
                  key={`skill-${index}`}
                  className="about-page__skills--item"
                >
                  <span>{item}</span>
                </div>
              )
            })}
          </div>
          <div className="about-page__proficiencies">
            <h2>Proficiencies</h2>
            <div className="about-page__proficiencies__container">
              {PROFICIENCY_DATA.map((item, index) => {
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
                )
              })}
            </div>
          </div>
          <div className="about-page__languages">
            <h2>Languages</h2>
            <div className="about-page__languages__container">
              {LANGUAGE_DATA.map((item, index) => {
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
                )
              })}
            </div>
          </div>
          <div className="about-page__attributes">
            <h2>Attributes</h2>
            <div className="about-page__attributes__container">
              {ATTRIBUTE_DATA.map((item, index) => {
                return (
                  <div
                    key={`attribute-${index}`}
                    className="about-page__attributes--item"
                  >
                    <span>{item}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="about-page__achievements">
            <h2>Achievements</h2>
            <div className="about-page__achievements__container">
              {ACHIEVEMENT_DATA.map((item, index) => {
                return (
                  <div
                    key={`achievement-${index}`}
                    className="about-page__achievements--item"
                  >
                    {item.title}
                    {item.content}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="about-page__history">
            <h2>Work History</h2>
            <div className="about-page__history__container">
              {HISTORY_DATA.map((item, index) => {
                return (
                  <div
                    key={`history-${index}`}
                    className="about-page__history--item"
                  >
                    {item.title}
                    {item.content}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="about-page__education">
            <h2>Education History</h2>
            <div className="about-page__education__container">
              {EDUCATION_DATA.map((item, index) => {
                return (
                  <div
                    key={`education-${index}`}
                    className="about-page__education--item"
                  >
                    {item.title}
                    {item.content}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      }
    />
  )
}

About.displayName = 'About'

export default About
