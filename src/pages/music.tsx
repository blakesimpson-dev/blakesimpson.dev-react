import {BlurbHeading} from '../components/blurb_heading';
import {Markdown} from '../components/markdown';
import {Page} from '../components/page';
import type {OverlayPageProps} from '../components/page';
import {ResponsiveCarousel} from '../components/responsive_carousel';
import {MUSIC} from '../content';
import type {SoundcloudPlayer, Track} from '../content/types';

const SOUNDCLOUD_PLAYER_URL =
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/';

/** SoundCloud embed URL for a track with the shared player options. */
function getSoundcloudSource(track: Track, player: SoundcloudPlayer): string {
  const options = {
    color: player.color,
    auto_play: track.autoPlay,
    hide_related: player.hideRelated,
    show_comments: player.showComments,
    show_user: player.showUser,
    show_reposts: player.showReposts,
    show_teaser: player.showTeaser,
  };
  const query = Object.entries(options)
    .map(([key, value]) => `&${key}=${String(value)}`)
    .join('');
  return `${SOUNDCLOUD_PLAYER_URL}${track.id}${query}`;
}

export function Music({setPage}: OverlayPageProps) {
  const {blurb, player, tracks} = MUSIC;

  return (
    <Page name="Music" avatar={blurb.avatar} setPage={setPage}>
      <div className="music-page">
        <div className="music-page__blurb">
          <img className="avatar" src={blurb.avatar} alt="" />
          <div>
            {blurb.heading && <BlurbHeading text={blurb.heading} />}
            <Markdown text={blurb.body} />
          </div>
        </div>
        <ResponsiveCarousel>
          {tracks.map(track => (
            <iframe
              key={track.id}
              width={player.width}
              height={player.height}
              allow="autoplay"
              title={track.title}
              src={getSoundcloudSource(track, player)}
            />
          ))}
        </ResponsiveCarousel>
      </div>
    </Page>
  );
}
