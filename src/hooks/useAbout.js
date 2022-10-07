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
      src: '/images/logos/git-logo.png',
      compressedSrc: '/images/logos/compressed/git-logo.png',
    },
    {
      name: 'NPM',
      src: '/images/logos/npm-logo.png',
      compressedSrc: '/images/logos/compressed/npm-logo.png',
    },
    {
      name: 'Node.js',
      src: '/images/logos/nodejs-logo.png',
      compressedSrc: '/images/logos/compressed/nodejs-logo.png',
    },
    {
      name: 'Three.js',
      src: '/images/logos/threejs-logo.png',
      compressedSrc: '/images/logos/compressed/threejs-logo.png',
    },
    {
      name: 'Vite.js',
      src: '/images/logos/vite-logo.png',
      compressedSrc: '/images/logos/compressed/vite-logo.png',
    },
    {
      name: 'Vue.js',
      src: '/images/logos/vuejs-logo.png',
      compressedSrc: '/images/logos/compressed/vuejs-logo.png',
    },
    {
      name: 'React',
      src: '/images/logos/react-logo.png',
      compressedSrc: '/images/logos/compressed/react-logo.png',
    },
    {
      name: 'Angular',
      src: '/images/logos/angular-logo.png',
      compressedSrc: '/images/logos/compressed/angular-logo.png',
    },
    {
      name: 'Webpack',
      src: '/images/logos/webpack-logo.png',
      compressedSrc: '/images/logos/compressed/webpack-logo.png',
    },
    {
      name: 'Unity',
      src: '/images/logos/unity-logo.png',
      compressedSrc: '/images/logos/compressed/unity-logo.png',
    },
    {
      name: 'Mono',
      src: '/images/logos/mono-logo.png',
      compressedSrc: '/images/logos/compressed/mono-logo.png',
    },
    {
      name: 'Docker',
      src: '/images/logos/docker-logo.png',
      compressedSrc: '/images/logos/compressed/docker-logo.png',
    },
    {
      name: 'VSCode',
      src: '/images/logos/vscode-logo.png',
      compressedSrc: '/images/logos/compressed/vscode-logo.png',
    },
    {
      name: 'VS',
      src: '/images/logos/visualstudio-logo.png',
      compressedSrc: '/images/logos/compressed/visualstudio-logo.png',
    },
  ])

  const [languageData] = useState([
    {
      name: 'js',
      src: '/images/logos/javascript-logo.png',
      compressedSrc: '/images/logos/compressed/javascript-logo.png',
    },
    {
      name: 'ts',
      src: '/images/logos/typescript-logo.png',
      compressedSrc: '/images/logos/compressed/typescript-logo.png',
    },
    {
      name: 'CSS',
      src: '/images/logos/css-logo.png',
      compressedSrc: '/images/logos/compressed/css-logo.png',
    },
    {
      name: 'SCSS',
      src: '/images/logos/scss-logo.png',
      compressedSrc: '/images/logos/compressed/scss-logo.png',
    },
    {
      name: 'C',
      src: '/images/logos/c-logo.png',
      compressedSrc: '/images/logos/compressed/c-logo.png',
    },
    {
      name: 'C++',
      src: '/images/logos/cplusplus-logo.png',
      compressedSrc: '/images/logos/compressed/cplusplus-logo.png',
    },
    {
      name: 'C#',
      src: '/images/logos/csharp-logo.png',
      compressedSrc: '/images/logos/compressed/csharp-logo.png',
    },
    {
      name: 'Lua',
      src: '/images/logos/lua-logo.webp',
      compressedSrc: '/images/logos/compressed/lua-logo.png',
    },
    {
      name: 'PHP',
      src: '/images/logos/php-logo.png',
      compressedSrc: '/images/logos/compressed/php-logo.png',
    },
    {
      name: 'Python',
      src: '/images/logos/python-logo.png',
      compressedSrc: '/images/logos/compressed/python-logo.png',
    },
    {
      name: 'WebGL',
      src: '/images/logos/webgl-logo.png',
      compressedSrc: '/images/logos/compressed/webgl-logo.png',
    },
    {
      name: 'OpenGL',
      src: '/images/logos/opengl-logo.png',
      compressedSrc: '/images/logos/compressed/opengl-logo.png',
    },
  ])

  const [achievementData] = useState([
    {
      title: <h2>Visualisation, Procedural Music and Chiptune Performances</h2>,
      content: (
        <p>
          Square Sounds Festival Melbourne, Square Sounds Festival Japan and
          venues across Australia.
        </p>
      ),
    },
    {
      title: <h2>Bush Bash: Touring Exhibition</h2>,
      content: (
        <p>
          &apos;Videogames: Design/Play/Disrupt&apos; exhibition (2018), London
          Visual Arts Museum and others across Europe.
        </p>
      ),
    },
    {
      title: <h2>WA Culture and the arts funding Ambassador</h2>,
      content: (
        <p>
          Ambassador to Senator Scott Ludlam regarding grants for independent
          games development in WA (2016).
        </p>
      ),
    },
    {
      title: <h2>Repeat Game of the Year Award Nominations</h2>,
      content: (
        <p>Western Australian Screen Awards, Perth (2013, 2014 and 2015)</p>
      ),
    },
    {
      title: <h2>Visualisation Performance</h2>,
      content: <p>Square Sounds Festival, Melbourne (2015)</p>,
    },
    {
      title: <h2>Interstate Arcade Australian Showcase</h2>,
      content: (
        <p>
          SK Games National Tour Melbourne, Brisbane, Sydney and Perth (2014)
        </p>
      ),
    },
    {
      title: <h2>Game Developer Association (GDAA) Representative</h2>,
      content: <p>Game Connect Asia Pacific Convention, Melbourne (2014)</p>,
    },
  ])

  const [historyData] = useState([
    {
      title: <h2>Senior Developer @ Insig Technologies: Perth 2020-2022</h2>,
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
      title: <h2>Lead Developer @ Binary Space: Perth 2017-2019</h2>,
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
      title: <h2>Developer @ Immersia: Perth 2016-2017</h2>,
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
      title: <h2>Lead Developer @ SK Games: Perth 2010-2015</h2>,
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
        <h2>
          Freelance Developer and Visual Artist: Perth, Melbourne and Abroad
          2010-2015
        </h2>
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

  const [educationData] = useState([
    {
      title: <h2>Bachelor of Computer Science</h2>,
      content: (
        <p>
          Edith Cowan University, Perth
          <br />
          Bachelor of Computer Science: Software Engineering
        </p>
      ),
    },
    {
      title: <h2>Interactive Media Design</h2>,
      content: (
        <p>
          Qantm College, Perth
          <br />
          Bachelor of Interactive Entertainment Technology
        </p>
      ),
    },
    {
      title: <h2>Architectural Design</h2>,
      content: (
        <p>
          University of Western Australia, Perth
          <br />
          Bachelor of Environmental Design
        </p>
      ),
    },
    {
      title: <h2>Sacred Heart College</h2>,
      content: (
        <p>
          Chemistry, Physics, Biology, Calculus, English Literature, Japanese
          <br />
          Achieved TER: 96.25
        </p>
      ),
    },
  ])

  const [referenceData] = useState([
    {
      name: 'Professional Reference - Bruce Newton',
      path: '/references/bn-reference.pdf',
    },
    {
      name: 'Professional Reference - Louis Roots',
      path: '/references/sk-reference.pdf',
    },
    {
      name: 'Personal Reference - Barry Levin',
      path: '/references/bl-reference.pdf',
    },
  ])

  return {
    skillData,
    attributeData,
    proficiencyData,
    languageData,
    achievementData,
    historyData,
    educationData,
    referenceData,
  }
}

export default useAbout
