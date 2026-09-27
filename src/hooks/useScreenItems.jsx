import React, { useState } from 'react'

const defaultItem = {
  selected: true,
  type: 'default',
}

const videoItem = {
  selected: false,
  type: 'video',
}

export const useScreenItems = () => {
  const [items] = useState([
    {
      ...defaultItem,
      id: 0,
      name: 'Squares GLSL',
      details: (
        <p>
          GLSL Fragment Shader adapted for use with react-three-fiber from{' '}
          <a
            href="https://www.shadertoy.com/view/XsBfRW"
            target="_blank"
            rel="noreferrer"
          >
            Pretty Hip
          </a>
          {'.'} Definitely some squares.
        </p>
      ),
    },
    {
      ...videoItem,
      id: 1,
      name: 'Kataplexia @ SS2020',
      url: '/videos/kataplexia-540.mp4',
      details: (
        <p>
          KATAPLEXIA performing a live DMG set at{' '}
          <a
            href="http://squaresoundsfestival.com/"
            target="_blank"
            rel="noreferrer"
          >
            Squaresounds Festival
          </a>{' '}
          in Melbourne 2020.
        </p>
      ),
    },
    {
      ...videoItem,
      id: 2,
      name: 'Making Bush Bash',
      url: '/videos/making-bushbash-360.mp4',
      details: (
        <p>
          A modified half-car complete with a 2 Player shoot &apos;em up racing
          game.{' '}
          <a
            href="https://youtu.be/8sEWVJV0bbA"
            target="_blank"
            rel="noreferrer"
          >
            View on Youtube
          </a>
          {'.'}
        </p>
      ),
    },
    {
      ...videoItem,
      id: 3,
      name: 'Bush Bash Launch',
      url: '/videos/bushbash-360.mp4',
      details: (
        <p>
          A modified half-car complete with a 2 Player shoot &apos;em up racing
          game.{' '}
          <a
            href="https://youtu.be/v6zDTnKGocU"
            target="_blank"
            rel="noreferrer"
          >
            View on Youtube
          </a>
          {'.'}
        </p>
      ),
    },
    {
      ...videoItem,
      id: 4,
      name: 'Arcadian Dreams',
      url: '/videos/arcadian-360.mp4',
      details: (
        <p>
          An exhibited art and music colab game split over a wall mounted
          digital Triptych.{' '}
          <a
            href="https://youtu.be/c5cUeHQ_wWM"
            target="_blank"
            rel="noreferrer"
          >
            View on Youtube
          </a>
          {'.'}
        </p>
      ),
    },
    {
      ...videoItem,
      id: 5,
      name: 'Making Catnips',
      url: '/videos/making-catnips-360.mp4',
      details: (
        <p>
          Multiplayer kitten feeding game for 2-16 players with real plush cat
          controllers.{' '}
          <a
            href="https://youtu.be/msECnidIvW0"
            target="_blank"
            rel="noreferrer"
          >
            View on Youtube
          </a>
          {'.'}
        </p>
      ),
    },
    {
      ...videoItem,
      id: 6,
      name: 'Catnips',
      url: '/videos/catnips-360.mp4',
      details: (
        <p>
          Multiplayer kitten feeding game for 2-16 players with real plush cat
          controllers.{' '}
          <a
            href="https://youtu.be/j_XTsG_eGOI"
            target="_blank"
            rel="noreferrer"
          >
            View on Youtube
          </a>
          {'.'}
        </p>
      ),
    },
    {
      ...videoItem,
      id: 7,
      name: 'Gundash Event',
      url: '/videos/gundash-360.mp4',
      details: (
        <p>
          Multiplayer shooter/racing hybrid for 2-4 players with an online
          leaderboard.{' '}
          <a
            href="https://youtu.be/B6V1K1tKwT0"
            target="_blank"
            rel="noreferrer"
          >
            View on Youtube
          </a>
          {'.'}
        </p>
      ),
    },
    {
      ...videoItem,
      id: 8,
      name: 'Interstate Arcade',
      url: '/videos/interstate-360.mp4',
      details: (
        <p>
          Pop-up indie games arcade in Melbourne. The arcade toured around
          Australia.{' '}
          <a
            href="https://youtu.be/jnHv-lnLanw"
            target="_blank"
            rel="noreferrer"
          >
            View on Youtube
          </a>
          {'.'}
        </p>
      ),
    },
    {
      ...videoItem,
      id: 9,
      name: 'L.M.P.O.',
      url: '/videos/lmpo-360.mp4',
      details: (
        <p>
          Local Multiplayer Only Bakery take over with local indie games and
          bands.{' '}
          <a
            href="https://youtu.be/SuYJ079wjCs"
            target="_blank"
            rel="noreferrer"
          >
            View on Youtube
          </a>
          {'.'}
        </p>
      ),
    },
    {
      ...videoItem,
      id: 10,
      name: 'Blitz Bandits',
      url: '/videos/blitzbandits-360.mp4',
      details: (
        <p>
          2 player arena shooter with a DMG aesthetic and music by the great{' '}
          <a
            href="https://soundcloud.com/atomsmasha"
            target="_blank"
            rel="noreferrer"
          >
            Atomsmasha
          </a>
          {'. '}
          <a
            href="https://youtu.be/F09pRDOUxjw"
            target="_blank"
            rel="noreferrer"
          >
            View on Youtube
          </a>
          {'.'}
        </p>
      ),
    },
  ])

  return { items }
}

export default useScreenItems
