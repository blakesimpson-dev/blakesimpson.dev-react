import React, { useState } from 'react'

export const useProjects = () => {
  const [projectData] = useState([
    {
      title: <h2>Three.js Portal</h2>,
      content: (
        <p>
          Portal was a small performance test I created in preparation for
          creating my digital portfolio. The aim was to investigate methods for
          texture baking and optimization to allow the experience to run
          smoothly at high FPS on a range of devices.
        </p>
      ),
      images: [
        <a
          key="portal-img-1"
          href="/images/projects/portal-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="portal-img-1" src="/images/projects/portal-1.png" />
        </a>,
        <a
          key="portal-img-2"
          href="/images/projects/portal-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="portal-img-2" src="/images/projects/portal-2.png" />
        </a>,
        <a
          key="portal-img-3"
          href="/images/projects/portal-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="portal-img-3" src="/images/projects/portal-3.png" />
        </a>,
      ],
      links: [
        <a
          key="portal-link-1"
          href="https://polite-tanuki-e48e8b.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Three.js Portal
        </a>,
        <a
          key="portal-link-2"
          href="https://github.com/blakesimpson-dev/threejs-portal"
          target="_blank"
          rel="noreferrer"
        >
          Three.js Portal on Github
        </a>,
      ],
    },
    {
      title: <h2>Spartan Energy</h2>,
      content: (
        <p>
          The Spartan Energy website was a commission for a client who runs a
          small Solar Energy business out of NSW. The client required the
          ability to manage his own content so a headless CMS was used to allow
          for this. All branding, design and development was done under heavy
          time constraint to meet up with the date for the launch of the
          business.
        </p>
      ),
      images: [
        <a
          key="spartan-img-1"
          href="/images/projects/spartan-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="spartan-img-1" src="/images/projects/spartan-1.png" />
        </a>,
        <a
          key="spartan-img-2"
          href="/images/projects/spartan-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="spartan-img-2" src="/images/projects/spartan-2.png" />
        </a>,
        <a
          key="spartan-img-3"
          href="/images/projects/spartan-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="spartan-img-3" src="/images/projects/spartan-3.png" />
        </a>,
      ],
      links: [
        <a
          key="spartan-link-1"
          href="https://spartanenergy.com.au"
          target="_blank"
          rel="noreferrer"
        >
          Spartan Energy
        </a>,
      ],
    },
    {
      title: <h2>Insig Technologies</h2>,
      content: (
        <p>
          During my tenure at Insig Technologies I was promoted to Senior and
          was involved in the production of various digital mining applications
          and supporting software including: Insig Condition Monitoring System,
          Insig Computerised Maintenance Management System, Insig Enterprise
          Asset Management System, Tanami Shaft Sinking Training Simulation and
          the Edna May Lidar Mapping project. I also built the Insig UI Library
          packages for use in all current and future Insig applications.
        </p>
      ),
      images: [
        <a
          key="uilib-img-1"
          href="/images/projects/uilib-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="uilib-img-1" src="/images/projects/uilib-1.png" />
        </a>,
        <a
          key="uilib-img-2"
          href="/images/projects/uilib-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="uilib-img-2" src="/images/projects/uilib-2.png" />
        </a>,
        <a
          key="uilib-img-3"
          href="/images/projects/uilib-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="uilib-img-3" src="/images/projects/uilib-3.png" />
        </a>,
      ],
      links: [
        <a
          key="insig-link-1"
          href="https://www.insigtech.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Insig Technologies
        </a>,
      ],
    },

    {
      title: <h2>Ghoul Britannia: Land of Hope and Gorey</h2>,
      content: (
        <p>
          Ghoul Britannia: Land of Hope and Gorey is a point and click adventure
          game, reminiscent of 90&apos;s adventure games with story-driven
          gameplay and puzzles to solve. A unique art style combines beautiful
          hand-painted 2D backgrounds and lively 3D characters.
        </p>
      ),
      images: [
        <a
          key="hope-and-gorey-img-1"
          href="/images/games/hope-and-gorey-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="hope-and-gorey-img-1"
            src="/images/games/hope-and-gorey-1.png"
          />
        </a>,
        <a
          key="hope-and-gorey-img-2"
          href="/images/games/hope-and-gorey-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="hope-and-gorey-img-2"
            src="/images/games/hope-and-gorey-2.png"
          />
        </a>,
        <a
          key="hope-and-gorey-img-3"
          href="/images/games/hope-and-gorey-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="hope-and-gorey-img-3"
            src="/images/games/hope-and-gorey-3.png"
          />
        </a>,
      ],
      links: [
        <a
          key="hope-and-gorey-link-1"
          href="https://www.youtube.com/watch?v=lds2Vw24TRk"
          target="_blank"
          rel="noreferrer"
        >
          Land of Hope and Gorey Trailer
        </a>,
        <a
          key="hope-and-gorey-link-2"
          href="https://store.steampowered.com/app/1055030/Ghoul_Britannia_Land_of_Hope_and_Gorey/"
          target="_blank"
          rel="noreferrer"
        >
          Land of Hope and Gorey on Steam
        </a>,
      ],
    },
    {
      title: <h2>Aliensche!</h2>,
      content: (
        <p>
          Aliensche! was my entry into Ludum Dare LDJAM #33. As an extra
          terrestrial, you are obviously fascinated by Earth’s bovine
          inhabitants. Collect cows and avoid projectiles as an invading alien
          in an unidentified craft!
        </p>
      ),
      images: [
        <a
          key="aliensche-img-1"
          href="/images/games/aliensche-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="aliensche-img-1" src="/images/games/aliensche-1.png" />
        </a>,
        <a
          key="aliensche-img-2"
          href="/images/games/aliensche-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="aliensche-img-2" src="/images/games/aliensche-2.png" />
        </a>,
        <a
          key="aliensche-img-3"
          href="/images/games/aliensche-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="aliensche-img-3" src="/images/games/aliensche-3.png" />
        </a>,
      ],
      links: [
        <a
          key="aliensche-link-1"
          href="https://gamejolt.com/games/aliensche/88150"
          target="_blank"
          rel="noreferrer"
        >
          Aliensche! on Game Jolt
        </a>,
      ],
    },
    {
      title: <h2>Blitz Bandits</h2>,
      content: (
        <p>
          GET BLITZ&apos;D! Blitz Bandits is a 2 player arena shooter with a
          GAMEBOY aesthetic and a thumping soundtrack by Perth chiptune master
          ATOMSMASHA. Blitz Bandits toured Australia during SK Games&apos;
          Interstate Arcade.
        </p>
      ),
      images: [
        <a
          key="blitz-img-1"
          href="/images/games/blitz-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="blitz-img-1" src="/images/games/blitz-1.png" />
        </a>,
        <a
          key="blitz-img-2"
          href="/images/games/blitz-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="blitz-img-2" src="/images/games/blitz-2.png" />
        </a>,
        <a
          key="blitz-img-3"
          href="/images/games/blitz-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="blitz-img-3" src="/images/games/blitz-3.png" />
        </a>,
      ],
      links: [
        <a
          key="blitz-link-1"
          href="https://www.youtube.com/watch?v=F09pRDOUxjw"
          target="_blank"
          rel="noreferrer"
        >
          Blitz Bandits Trailer
        </a>,
        <a
          key="blitz-link-2"
          href="https://gamejolt.com/games/blitz-bandits/15541"
          target="_blank"
          rel="noreferrer"
        >
          Blitz Bandits on Game Jolt
        </a>,
        <a
          key="blitz-link-3"
          href="https://soundcloud.com/atomsmasha"
          target="_blank"
          rel="noreferrer"
        >
          ATOMSMASHA on Soundcloud
        </a>,
      ],
    },
    {
      title: <h2>Bush Bash</h2>,
      content: (
        <p>
          Bush Bash is epic. A two player co-op game, the driver must navigate
          obstacles and try to pick up fuel cans to keep the car running, and
          the gunner must clear the enemies that will slowly drain your fuel as
          they shoot you. The cabinet was once a Mitsubishi Magna, but now it’s
          been kitted out with a dash display, ammo indicator, radio, and the
          steering wheel is still actually connected to the tires. How did we do
          it? Magic.
        </p>
      ),
      images: [
        <a
          key="bushbash-img-1"
          href="/images/games/bushbash-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="bushbash-img-1" src="/images/games/bushbash-1.png" />
        </a>,
        <a
          key="bushbash-img-2"
          href="/images/games/bushbash-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="bushbash-img-2" src="/images/games/bushbash-2.png" />
        </a>,
        <a
          key="bushbash-img-3"
          href="/images/games/bushbash-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="bushbash-img-3" src="/images/games/bushbash-3.png" />
        </a>,
      ],
      links: [
        <a
          key="bushbash-link-1"
          href="https://www.youtube.com/watch?v=v6zDTnKGocU"
          target="_blank"
          rel="noreferrer"
        >
          Bush Bash Launch
        </a>,
        <a
          key="bushbash-link-2"
          href="https://www.youtube.com/watch?v=8sEWVJV0bbA"
          target="_blank"
          rel="noreferrer"
        >
          Making of Bush Bash
        </a>,
        <a
          key="bushbash-link-3"
          href="https://www.youtube.com/watch?v=qllkE2mU_aA"
          target="_blank"
          rel="noreferrer"
        >
          SK Parallels - Bush Bash Interview
        </a>,
      ],
    },
    {
      title: <h2>Catnips</h2>,
      content: (
        <p>
          Catnips is a 2-team cat milking simulator. Described as “nifty” and
          “horrifying”, deep down the game is just about love, nipples, survival
          and cat&apos;s milk. Not the easiest to describe in one paragraph,
          keep an eye out and experience it yourself next time the cats are in
          town.
        </p>
      ),
      images: [
        <a
          key="catnips-img-1"
          href="/images/games/catnips-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="catnips-img-1" src="/images/games/catnips-1.png" />
        </a>,
        <a
          key="catnips-img-2"
          href="/images/games/catnips-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="catnips-img-2" src="/images/games/catnips-2.png" />
        </a>,
        <a
          key="catnips-img-3"
          href="/images/games/catnips-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="catnips-img-3" src="/images/games/catnips-3.png" />
        </a>,
      ],
      links: [
        <a
          key="catnips-link-1"
          href="https://www.youtube.com/watch?v=j_XTsG_eGOI&t=1s"
          target="_blank"
          rel="noreferrer"
        >
          Catnips Trailer
        </a>,
        <a
          key="catnips-link-2"
          href="https://www.youtube.com/watch?v=msECnidIvW0"
          target="_blank"
          rel="noreferrer"
        >
          Making Catnips
        </a>,
      ],
    },
    {
      title: <h2>Arcadian Dreams: Electric Forest</h2>,
      content: (
        <p>
          Electric Forest is a collaboration between SK and local artist
          Arcadian Dreams. The game consists of floating around a surreal
          landscape as either a balloon or one of two bees. Up to three players
          can control at any one time, and when no one is controlling the
          characters simply float around. The bees can pop the balloon, causing
          another balloon to replace it, if you want to call that the win
          condition, be our guest.
        </p>
      ),
      images: [
        <a
          key="electric-img-1"
          href="/images/games/electric-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="electric-img-1" src="/images/games/electric-1.png" />
        </a>,
        <a
          key="electric-img-2"
          href="/images/games/electric-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="electric-img-2" src="/images/games/electric-2.png" />
        </a>,
        <a
          key="electric-img-3"
          href="/images/games/electric-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="electric-img-3" src="/images/games/electric-3.png" />
        </a>,
      ],
      links: [
        <a
          key="catnips-link-2"
          href="https://www.youtube.com/watch?v=c5cUeHQ_wWM"
          target="_blank"
          rel="noreferrer"
        >
          Arcade Exhibtion with Arcadian Dreams
        </a>,
      ],
    },
    {
      title: <h2>Gundash</h2>,
      content: (
        <p>
          Gundash is a 4 player platformer race. Each player can use their
          joysticks, or keyboard, to move and shoot, and will find shooting
          backwards is the fastest way forwards. Gundash is played on four
          podiums, each containing two joysticks, and trimmed with kangaroo
          hide, because it feels nice. It also is resistant to beer.
        </p>
      ),
      images: [
        <a
          key="gundash-img-1"
          href="/images/games/gundash-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="gundash-img-1" src="/images/games/gundash-1.png" />
        </a>,
        <a
          key="gundash-img-2"
          href="/images/games/gundash-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="gundash-img-2" src="/images/games/gundash-2.png" />
        </a>,
        <a
          key="gundash-img-3"
          href="/images/games/gundash-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="gundash-img-3" src="/images/games/gundash-3.png" />
        </a>,
      ],
      links: [
        <a
          key="catnips-link-2"
          href="https://www.youtube.com/watch?v=B6V1K1tKwT0"
          target="_blank"
          rel="noreferrer"
        >
          Gundash launch
        </a>,
      ],
    },
    {
      title: <h2>Skulls</h2>,
      content: (
        <p>
          Skulls is a very simple 2-4 player game. Each player must collect
          three of the same object to win the game. It sounds simple, because it
          is, but the fun comes in getting in the way of other players, stealing
          the items they want and knocking them off course. Or you can just play
          nice, but that&apos;s boring.
        </p>
      ),
      images: [
        <a
          key="skulls-img-1"
          href="/images/games/skulls-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="skulls-img-1" src="/images/games/skulls-1.png" />
        </a>,
        <a
          key="skulls-img-2"
          href="/images/games/skulls-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="skulls-img-2" src="/images/games/skulls-2.png" />
        </a>,
        <a
          key="skulls-img-3"
          href="/images/games/skulls-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="skulls-img-3" src="/images/games/skulls-3.png" />
        </a>,
      ],
      links: [],
    },
    {
      title: <h2>Icarus</h2>,
      content: (
        <p>
          Icarus is a 2 player co-op game about saving a sun from aliens, for
          some reason. Each player controls a satellite in orbit of the sun and
          must use their laser to hold off the attackers for as long as
          possible. When both players fire simultaneously, a third, more
          powerful laser, will activate. This game was made for our milk crate
          cabinets, and as such only uses two buttons per player.
        </p>
      ),
      images: [
        <a
          key="icarus-img-1"
          href="/images/games/icarus-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="icarus-img-1" src="/images/games/icarus-1.png" />
        </a>,
        <a
          key="icarus-img-2"
          href="/images/games/icarus-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="icarus-img-2" src="/images/games/icarus-2.png" />
        </a>,
        <a
          key="icarus-img-3"
          href="/images/games/icarus-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="icarus-img-3" src="/images/games/icarus-3.png" />
        </a>,
      ],
      links: [],
    },
    {
      title: <h2>Two Shot Robot</h2>,
      content: (
        <p>
          Two Shot is an interesting little 2 player platformer where each
          player controls a robot with only two bullets. The idea is to use them
          at just the right time, missing the mark will leave you defenseless.
          We also created a single player version set to an 8-bit version of
          song by The Decline.
        </p>
      ),
      images: [
        <a
          key="twoshot-img-1"
          href="/images/games/twoshot-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twoshot-img-1" src="/images/games/twoshot-1.png" />
        </a>,
        <a
          key="twoshot-img-2"
          href="/images/games/twoshot-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twoshot-img-2" src="/images/games/twoshot-2.png" />
        </a>,
        <a
          key="twoshot-img-3"
          href="/images/games/twoshot-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twoshot-img-3" src="/images/games/twoshot-3.png" />
        </a>,
      ],
      links: [
        <a
          key="twoshot-link-1"
          href="https://www.facebook.com/TheDeclineMusic"
          target="_blank"
          rel="noreferrer"
        >
          The Decline
        </a>,
      ],
    },
    {
      title: <h2>RT</h2>,
      content: (
        <p>
          RT is a gallery wanderer. Drift around the gallery, check out the art.
          Created for the VHS Loser Unit Group Show, the installation version
          was controlled by two trackballs embedded into a skateboard deck.
        </p>
      ),
      images: [
        <a
          key="rt-img-1"
          href="/images/games/rt-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="rt-img-1" src="/images/games/rt-1.png" />
        </a>,
        <a
          key="rt-img-2"
          href="/images/games/rt-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="rt-img-2" src="/images/games/rt-2.png" />
        </a>,
        <a
          key="rt-img-3"
          href="/images/games/rt-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="rt-img-3" src="/images/games/rt-3.png" />
        </a>,
      ],
      links: [
        <a
          key="rt-link-1"
          href="https://www.youtube.com/watch?v=CGb20VE-rkE"
          target="_blank"
          rel="noreferrer"
        >
          Let&apos;s Play RT
        </a>,
      ],
    },
    {
      title: <h2>Seed x Sable</h2>,
      content: (
        <p>
          This version of Seed was created as a collaboration between SK Games
          and SABLE, incorporating audio reactive visuals to accompany his
          music. Seed is a two player game created for milk crate cabinets. Each
          player controls a small seed/spaceship thing, with only two buttons.
          They can fly around, avoiding the asteroids, and press both buttons to
          boost through the other player. Or just chill out and fly around, it’s
          cool, no need to get violent.
        </p>
      ),
      images: [
        <a
          key="seed-img-1"
          href="/images/games/seed-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="seed-img-1" src="/images/games/seed-1.png" />
        </a>,
        <a
          key="seed-img-2"
          href="/images/games/seed-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="seed-img-2" src="/images/games/seed-2.png" />
        </a>,
        <a
          key="seed-img-3"
          href="/images/games/seed-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="seed-img-3" src="/images/games/seed-3.png" />
        </a>,
      ],
      links: [
        <a
          key="seed-link-1"
          href="https://soundcloud.com/thatsableguy"
          target="_blank"
          rel="noreferrer"
        >
          Sable on SoundCloud
        </a>,
      ],
    },
    {
      title: <h2>Astral Diplomacy</h2>,
      content: (
        <p>
          Astral is a 2 vs 1 space shooter. Think of it as a boss fight, one
          player controls the boss and two players control the small attacking
          ships. It&apos;s much easier to play as the boss, but it&apos;s more
          satisfying to win as the small ships, an odd trade off creating an
          interesting asymmetrical game.
        </p>
      ),
      images: [
        <a
          key="astral-img-1"
          href="/images/games/astral-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="astral-img-1" src="/images/games/astral-1.png" />
        </a>,
        <a
          key="astral-img-2"
          href="/images/games/astral-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="astral-img-2" src="/images/games/astral-2.png" />
        </a>,
        <a
          key="astral-img-3"
          href="/images/games/astral-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="astral-img-3" src="/images/games/astral-3.png" />
        </a>,
      ],
      links: [],
    },
    {
      title: <h2>Ocean Commotion</h2>,
      content: (
        <p>
          Ocean Commotion is a nautical whack-a-mole with custom made foot
          pedals. Two octopuses race to smack the sea creatures first to gain
          points. On each side of the cabinet there are five foot pedals, each
          corresponding to a tentacle. It can be played 1v1, or you can open up
          each side to as many players as you can fit.
        </p>
      ),
      images: [
        <a
          key="ocean-img-1"
          href="/images/games/ocean-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="ocean-img-1" src="/images/games/ocean-1.png" />
        </a>,
        <a
          key="ocean-img-2"
          href="/images/games/ocean-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="ocean-img-2" src="/images/games/ocean-2.png" />
        </a>,
        <a
          key="ocean-img-3"
          href="/images/games/ocean-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="ocean-img-3" src="/images/games/ocean-3.png" />
        </a>,
      ],
      links: [],
    },
    {
      title: <h2>Drop</h2>,
      content: (
        <p>
          Drop is a musical timing game for one or more players. Keeping the
          glowing drops bouncing will play more of the randomized audio tracks
          by ATOMSMASHA. It’s like keeping the balloon off the ground, except
          digital, and with music, and you get a score at the end.
        </p>
      ),
      images: [
        <a
          key="drop-img-1"
          href="/images/games/drop-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="drop-img-1" src="/images/games/drop-1.png" />
        </a>,
        <a
          key="drop-img-2"
          href="/images/games/drop-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="drop-img-2" src="/images/games/drop-2.png" />
        </a>,
        <a
          key="drop-img-3"
          href="/images/games/drop-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="drop-img-3" src="/images/games/drop-3.png" />
        </a>,
      ],
      links: [
        <a
          key="drop-link-1"
          href="https://soundcloud.com/atomsmasha"
          target="_blank"
          rel="noreferrer"
        >
          ATOMSMASHA on Soundcloud
        </a>,
      ],
    },
    {
      title: <h2>Bassball</h2>,
      content: (
        <p>
          Bassball sits at the intersection of fishing and fighting. Players
          haul up a fish and smack it at their opponent, who can then smack it
          right back, and so on until someone ends up in the water. It’s very
          loose and easy to play, plus it’s fish-projectiles, which is nice.
        </p>
      ),
      images: [
        <a
          key="bassball-img-1"
          href="/images/games/bassball-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="bassball-img-1" src="/images/games/bassball-1.png" />
        </a>,
        <a
          key="bassball-img-2"
          href="/images/games/bassball-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="bassball-img-2" src="/images/games/bassball-2.png" />
        </a>,
        <a
          key="bassball-img-3"
          href="/images/games/bassball-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="bassball-img-3" src="/images/games/bassball-3.png" />
        </a>,
      ],
      links: [],
    },
    {
      title: <h2>Cog & Balls</h2>,
      content: (
        <p>
          Cog and Balls is a multiplayer pinball-meets-pong game with a good
          dose of innuendo. SK Games&apos; first game to be put in a physical
          cabinet, it was housed in a cross shaped table constructed from a few
          trips to the tip.
        </p>
      ),
      images: [
        <a
          key="cogandballs-img-1"
          href="/images/games/cogandballs-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="cogandballs-img-1" src="/images/games/cogandballs-1.png" />
        </a>,
        <a
          key="cogandballs-img-2"
          href="/images/games/cogandballs-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="cogandballs-img-2" src="/images/games/cogandballs-2.png" />
        </a>,
        <a
          key="cogandballs-img-3"
          href="/images/games/cogandballs-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="cogandballs-img-3" src="/images/games/cogandballs-3.png" />
        </a>,
      ],
      links: [],
    },
    {
      title: <h2>Biru</h2>,
      content: (
        <p>
          Biru is a 4 player ninja-kick fight. Each ninja can only dash and
          fly-kick. Lining up the fly-kick takes skill, as well as avoiding the
          incoming fly-kicks, it’s just a lot of fly-kicking really. It also
          looks really pretty.
        </p>
      ),
      images: [
        <a
          key="biru-img-1"
          href="/images/games/biru-1.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="biru-img-1" src="/images/games/biru-1.png" />
        </a>,
        <a
          key="biru-img-2"
          href="/images/games/biru-2.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="biru-img-2" src="/images/games/biru-2.png" />
        </a>,
        <a
          key="biru-img-3"
          href="/images/games/biru-3.png"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="biru-img-3" src="/images/games/biru-3.png" />
        </a>,
      ],
      links: [],
    },
  ])

  return { projectData }
}

export default useProjects
