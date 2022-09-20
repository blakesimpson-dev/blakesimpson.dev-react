import PropTypes from 'prop-types'
import React from 'react'
import Page from '../components/Page'

const Music = ({ setPage }) => {
  const musicData = [
    {
      id: '363549341',
      autoPlay: true,
      href: 'https://soundcloud.com/kataplexia_au/ame',
      title: 'ame',
    },
    {
      id: '321455021',
      autoPlay: false,
      href: 'https://soundcloud.com/kataplexia_au/yama-no-kami',
      title: 'yama no kami',
    },
    {
      id: '318134324',
      autoPlay: false,
      href: 'https://soundcloud.com/kataplexia_au/nadir',
      title: 'nadir',
    },
    {
      id: '316693193',
      autoPlay: false,
      href: 'https://soundcloud.com/kataplexia_au/hakkenden',
      title: 'hakkenden',
    },
    {
      id: '341296217',
      autoPlay: false,
      href: 'https://soundcloud.com/kataplexia_au/rhetoric-9-live-dmg-set',
      title: 'Rhetoric #9',
    },
    {
      id: '312190960',
      autoPlay: false,
      href: 'https://soundcloud.com/kataplexia_au/dilemma',
      title: 'dilemma',
    },
    {
      id: '294865331',
      autoPlay: false,
      href: 'https://soundcloud.com/kataplexia_au/pilot-zero',
      title: 'pilot zero',
    },
    {
      id: '290973028',
      autoPlay: false,
      href: 'https://soundcloud.com/kataplexia_au/return-to-nothing',
      title: 'return to nothing',
    },
    {
      id: '267936861',
      autoPlay: false,
      href: 'https://soundcloud.com/kataplexia_au/travesty',
      title: 'Travesty',
    },
    {
      id: '201988293',
      autoPlay: false,
      href: 'https://soundcloud.com/kataplexia_au/adam',
      title: 'Progenitor',
    },
    {
      id: '198768727',
      autoPlay: false,
      href: 'https://soundcloud.com/kataplexia_au/stinkbomb',
      title: 'Stink Bomb',
    },
    {
      id: '191859714',
      autoPlay: false,
      href: 'https://soundcloud.com/kataplexia_au/beast',
      title: 'Beast',
    },
  ]

  const defaultSoundcloudIFrame = {
    width: '100%',
    height: '100px',
    color: '%23575757',
    hideRelated: true,
    showComments: false,
    showUser: false,
    showReposts: false,
    showTeaser: false,
  }

  const soundcloudIFrames = musicData.map((data) => ({
    ...defaultSoundcloudIFrame,
    id: data.id,
    autoPlay: data.autoPlay,
    href: data.href,
    title: data.title,
  }))

  const getSoundcloudIFrameSource = (iframe) => {
    const items = [
      `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${iframe.id}`,
      `&color=${iframe.color}`,
      `&auto_play=${iframe.autoPlay}`,
      `&hide_related=${iframe.hideRelated}`,
      `&show_comments=${iframe.showComments}`,
      `&show_user=${iframe.showUser}`,
      `&show_reposts=${iframe.showReposts}`,
      `&show_teaser=${iframe.showTeaser}`,
    ]
    return items.join('')
  }

  return (
    <Page
      setPage={setPage}
      name="Music"
      content={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus
          iaculis massa ut fermentum. Ut eget aliquam ipsum. Suspendisse
          ullamcorper laoreet arcu a suscipit. Aliquam nisl purus, iaculis eu
          lobortis sit amet, pharetra ut ligula. Curabitur et velit et massa
          bibendum porttitor. Mauris laoreet vel felis et rutrum. Nulla
          facilisi. Nunc ac justo vitae ex accumsan ullamcorper eu id nibh. In
          hac habitasse platea dictumst. Ut sodales, odio sagittis ornare
          porttitor, lectus mi iaculis odio, eget rhoncus nulla nibh ac leo.
          {soundcloudIFrames.map((iframe, index) => {
            return (
              <iframe
                key={index}
                width={iframe.width}
                height={iframe.height}
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={getSoundcloudIFrameSource(iframe)}
              />
            )
          })}
        </>
      }
    ></Page>
  )
}

Music.displayName = 'Music'

Music.propTypes = {
  setPage: PropTypes.func,
}

export default Music
