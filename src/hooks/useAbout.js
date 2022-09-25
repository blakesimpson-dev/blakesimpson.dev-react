import React, { useState } from 'react'

export const useAbout = () => {
  const [skillData] = useState([
    'Communicator',
    'Motivator',
    'Manager',
    'Leader',
    'Creator',
  ])

  const [attributeData] = useState([
    'Passionate',
    'Motivated',
    'Expressive',
    'Aware',
    'Positive',
    'Flexibile',
    'Assertive',
    'Balanced',
    'Organised',
  ])

  const [proficiencyData] = useState([
    {
      name: 'Git',
      logo: '/images/logos/git-logo.png',
    },
    {
      name: 'NPM',
      logo: '/images/logos/npm-logo.png',
    },
    {
      name: 'Node.js',
      logo: '/images/logos/nodejs-logo.png',
    },
    {
      name: 'Three.js',
      logo: '/images/logos/threejs-logo.png',
    },
    {
      name: 'Vite.js',
      logo: '/images/logos/vite-logo.png',
    },
    {
      name: 'Vue.js',
      logo: '/images/logos/vuejs-logo.png',
    },
    {
      name: 'React',
      logo: '/images/logos/react-logo.png',
    },
    {
      name: 'Angular',
      logo: '/images/logos/angular-logo.png',
    },
    {
      name: 'Webpack',
      logo: '/images/logos/webpack-logo.png',
    },
    {
      name: 'Unity',
      logo: '/images/logos/unity-logo.png',
    },
    {
      name: 'Mono',
      logo: '/images/logos/mono-logo.png',
    },
    {
      name: 'Docker',
      logo: '/images/logos/docker-logo.png',
    },
    {
      name: 'VSCode',
      logo: '/images/logos/vscode-logo.png',
    },
    {
      name: 'VS',
      logo: '/images/logos/visualstudio-logo.png',
    },
  ])

  const [languageData] = useState([
    {
      name: 'js',
      logo: '/images/logos/javascript-logo.png',
    },
    {
      name: 'ts',
      logo: '/images/logos/typescript-logo.png',
    },
    {
      name: 'CSS',
      logo: '/images/logos/css-logo.png',
    },
    {
      name: 'SCSS',
      logo: '/images/logos/scss-logo.png',
    },
    {
      name: 'C',
      logo: '/images/logos/c-logo.png',
    },
    {
      name: 'C++',
      logo: '/images/logos/cplusplus-logo.png',
    },
    {
      name: 'C#',
      logo: '/images/logos/csharp-logo.png',
    },
    {
      name: 'Lua',
      logo: '/images/logos/lua-logo.webp',
    },
    {
      name: 'PHP',
      logo: '/images/logos/php-logo.png',
    },
    {
      name: 'Python',
      logo: '/images/logos/python-logo.png',
    },
    {
      name: 'WebGL',
      logo: '/images/logos/webgl-logo.png',
    },
    {
      name: 'OpenGL',
      logo: '/images/logos/opengl-logo.png',
    },
  ])

  const [achievementData] = useState([])

  const [historyData] = useState([
    {
      title: <h3>Senior Developer @ Insig Technologies: Perth 2020-2022</h3>,
      content: (
        <p>
          At Insig Tech I have worked across the full stack, primarily in the
          front end, to assist in the design, development and deployment of
          applications made available at mine sites across the globe. I have
          also produced LiDAR visualizations, VR training and engineering
          walkthrough simulation software and personally built, documented and
          deployed the Insig UI Library.
        </p>
      ),
    },
    {
      title: <h3>Lead Developer @ Binary Space: Perth 2017-2019</h3>,
      content: (
        <p>
          Working for Binary Space was an incredibly rewarding experience, our
          title &apos;Ghoul Britannia: Land of Hope and Gorey&apos; has been
          featured in gaming press and shown at conventions in Australia,
          America and Europe. To collaborate online with team-members from
          across the globe has granted me important insights and I look forward
          to applying all that I have learned from the production of this title
          going forward in my career.
        </p>
      ),
    },
    {
      title: <h3>Developer @ Immersia: Perth 2016-2017</h3>,
      content: (
        <p>
          A short contractual stint of work with Immersia VR saw me developing
          and designing for multiple Virtual Reality applications. Having access
          to development kits and hardware, this work was thoroughly engaging,
          and I was able to adapt my skillset to working in a virtual reality
          space.
        </p>
      ),
    },
    {
      title: <h3>Lead Developer @ SK Games: Perth 2010-2015</h3>,
      content: (
        <p>
          Producing and showcasing over 20 titles at SK Games, I developed an
          interest towards the &apos;space around the game&apos; by creating
          custom software and hardware solutions. In doing so, our company
          successfully expanded the perception of games and reached new
          audiences through our products. Now established as an Interactive
          Gallery in Melbourne, SK continues to expand the gaming space.
        </p>
      ),
    },
    {
      title: (
        <h3>
          Freelance Developer and Visual Artist: Perth, Melbourne and Abroad
          2010-2015
        </h3>
      ),
      content: (
        <p>
          Creating art, sound, music, software and hardware adaptations, I have
          worked towards engaging and exposing the local development community
          with numerous independent releases.
        </p>
      ),
    },
  ])

  const [educationData] = useState([])

  return {
    skillData,
    attributeData,
    proficiencyData,
    languageData,
    achievementData,
    historyData,
    educationData,
  }
}

export default useAbout
