import PropTypes from 'prop-types'
import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import Page from '../components/Page'
import ProgressiveImg from '../components/ProgressiveImg'
import { useAbout } from '../hooks/useAbout'

const About = ({ setPage }) => {
  const {
    skillData,
    attributeData,
    achievementData,
    proficiencyData,
    languageData,
    historyData,
    educationData,
    referenceData,
  } = useAbout()

  return (
    <Page
      setPage={setPage}
      name="About"
      content={
        <div className="about-page">
          <div className="about-page__blurb">
            <img className="avatar" src="/images/blake-avatar.png" />
            <div>
              <h1>Blake Simpson - Senior Developer</h1>
              <p>
                I&apos;ve created a wide range of interactive titles and
                software while working freelance as an indie, as a key member of
                a new startup, and as a senior leader in a larger corporation.
                As a motivated autodidact, I have also trained myself in
                numerous programming languages, frameworks, and development
                environments. This process has informed me about myself and my
                chosen field of work, whilst equipping me with the skills
                necessary to think and operate successfully outside of the box.
                My personal studies have left me with a broad understanding of
                design methodology and a deep knowledge of how software and
                digital experiences intersect with people and the spaces they
                inhabit.
              </p>
              {referenceData.map((item, index) => {
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
            {skillData.map((item, index) => {
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
              {proficiencyData.map((item, index) => {
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
              {languageData.map((item, index) => {
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
              {attributeData.map((item, index) => {
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
              {achievementData.map((item, index) => {
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
              {historyData.map((item, index) => {
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
              {educationData.map((item, index) => {
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
    ></Page>
  )
}

About.displayName = 'About'

About.propTypes = {
  setPage: PropTypes.func,
}

export default About
