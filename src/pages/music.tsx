import React from 'react';
import Page from '../components/page';
import ResponsiveCarousel from '../components/responsive_carousel';
import {MUSIC} from '../content';
import type {SoundcloudPlayer, Track} from '../content/types';
import {Markdown} from '../components/markdown';

const SOUNDCLOUD_PLAYER_URL =
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/';

function getSoundcloudSource(track: Track, player: SoundcloudPlayer) {
  return [
    `${SOUNDCLOUD_PLAYER_URL}${track.id}`,
    `&color=${player.color}`,
    `&auto_play=${track.autoPlay}`,
    `&hide_related=${player.hideRelated}`,
    `&show_comments=${player.showComments}`,
    `&show_user=${player.showUser}`,
    `&show_reposts=${player.showReposts}`,
    `&show_teaser=${player.showTeaser}`,
  ].join('');
}

const Music = ({setPage}) => {
  return (
    <Page
      setPage={setPage}
      name="Music"
      content={
        <div className="music-page">
          <div className="music-page__blurb">
            <img className="avatar" src={MUSIC.blurb.avatar} />
            <div>
              <h1>{MUSIC.blurb.heading}</h1>
              <Markdown text={MUSIC.blurb.body} />
            </div>
          </div>
          <ResponsiveCarousel
            content={MUSIC.tracks.map(track => {
              return (
                <iframe
                  key={track.id}
                  width={MUSIC.player.width}
                  height={MUSIC.player.height}
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  title={track.title}
                  src={getSoundcloudSource(track, MUSIC.player)}
                />
              );
            })}
          />
        </div>
      }
    />
  );
};

Music.displayName = 'Music';

export default Music;
