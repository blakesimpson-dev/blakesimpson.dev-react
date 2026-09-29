import React from 'react';

export const PROJECT_DATA = [
  {
    id: 'portal',
    title: <h2>Three.js Portal</h2>,
    content: (
      <p>
        Portal was a small performance test I created in preparation for
        creating my digital portfolio. The aim was to investigate methods for
        texture baking and optimization to allow the experience to run smoothly
        at high FPS on a range of devices.
      </p>
    ),
    images: [
      {
        alt: 'portal-img-1',
        src: '/images/projects/portal_1.png',
        compressedSrc: '/images/projects/compressed/portal_1.jpg',
      },
      {
        alt: 'portal-img-2',
        src: '/images/projects/portal_2.png',
        compressedSrc: '/images/projects/compressed/portal_2.jpg',
      },

      {
        alt: 'portal-img-3',
        src: '/images/projects/portal_3.png',
        compressedSrc: '/images/projects/compressed/portal_3.jpg',
      },
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
    id: 'spartan',
    title: <h2>Spartan Energy</h2>,
    content: (
      <p>
        The Spartan Energy website was a commission for a client who runs a
        small Solar Energy business out of NSW. The client required the ability
        to manage his own content so a headless CMS was used to allow for this.
        All branding, design and development was done under heavy time
        constraint to meet up with the date for the launch of the business.
      </p>
    ),
    images: [
      {
        alt: 'spartan-img-1',
        src: '/images/projects/spartan_1.png',
        compressedSrc: '/images/projects/compressed/spartan_1.jpg',
      },
      {
        alt: 'spartan-img-2',
        src: '/images/projects/spartan_2.png',
        compressedSrc: '/images/projects/compressed/spartan_2.jpg',
      },
      {
        alt: 'spartan-img-3',
        src: '/images/projects/spartan_3.png',
        compressedSrc: '/images/projects/compressed/spartan_3.jpg',
      },
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
    id: 'insig',
    title: <h2>Insig Technologies</h2>,
    content: (
      <p>
        During my tenure at Insig Technologies I was promoted to Senior and was
        involved in the production of various digital mining applications and
        supporting software including: Insig Condition Monitoring System, Insig
        Computerised Maintenance Management System, Insig Enterprise Asset
        Management System, Tanami Shaft Sinking Training Simulation and the Edna
        May Lidar Mapping project. I also built the Insig UI Library packages
        for use in all current and future Insig applications.
      </p>
    ),
    images: [
      {
        alt: 'insig-img-1',
        src: '/images/projects/uilib_1.png',
        compressedSrc: '/images/projects/compressed/uilib_1.jpg',
      },
      {
        alt: 'insig-img-2',
        src: '/images/projects/uilib_2.png',
        compressedSrc: '/images/projects/compressed/uilib_2.jpg',
      },
      {
        alt: 'insig-img-3',
        src: '/images/projects/uilib_3.png',
        compressedSrc: '/images/projects/compressed/uilib_3.jpg',
      },
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
    id: 'hope-and-gorey',
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
      {
        alt: 'hope-and-gorey-img-1',
        src: '/images/games/hope_and_gorey_1.png',
        compressedSrc: '/images/games/compressed/hope_and_gorey_1.jpg',
      },
      {
        alt: 'hope-and-gorey-img-2',
        src: '/images/games/hope_and_gorey_2.png',
        compressedSrc: '/images/games/compressed/hope_and_gorey_2.jpg',
      },
      {
        alt: 'hope-and-gorey-img-3',
        src: '/images/games/hope_and_gorey_3.png',
        compressedSrc: '/images/games/compressed/hope_and_gorey_3.jpg',
      },
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
    id: 'aliensche',
    title: <h2>Aliensche!</h2>,
    content: (
      <p>
        Aliensche! was my entry into Ludum Dare LDJAM #33. As an extra
        terrestrial, you are obviously fascinated by Earth’s bovine inhabitants.
        Collect cows and avoid projectiles as an invading alien in an
        unidentified craft!
      </p>
    ),
    images: [
      {
        alt: 'aliensche-img-1',
        src: '/images/games/aliensche_1.png',
        compressedSrc: '/images/games/compressed/aliensche_1.jpg',
      },
      {
        alt: 'aliensche-img-2',
        src: '/images/games/aliensche_2.png',
        compressedSrc: '/images/games/compressed/aliensche_2.jpg',
      },
      {
        alt: 'aliensche-img-3',
        src: '/images/games/aliensche_3.png',
        compressedSrc: '/images/games/compressed/aliensche_3.jpg',
      },
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
    id: 'blitz',
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
      {
        alt: 'blitz-img-1',
        src: '/images/games/blitz_1.png',
        compressedSrc: '/images/games/compressed/blitz_1.jpg',
      },
      {
        alt: 'blitz-img-2',
        src: '/images/games/blitz_2.png',
        compressedSrc: '/images/games/compressed/blitz_2.jpg',
      },
      {
        alt: 'blitz-img-3',
        src: '/images/games/blitz_3.png',
        compressedSrc: '/images/games/compressed/blitz_3.jpg',
      },
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
    id: 'bushbash',
    title: <h2>Bush Bash</h2>,
    content: (
      <p>
        Bush Bash is epic. A two player co-op game, the driver must navigate
        obstacles and try to pick up fuel cans to keep the car running, and the
        gunner must clear the enemies that will slowly drain your fuel as they
        shoot you. The cabinet was once a Mitsubishi Magna, but now it’s been
        kitted out with a dash display, ammo indicator, radio, and the steering
        wheel is still actually connected to the tires. How did we do it? Magic.
      </p>
    ),
    images: [
      {
        alt: 'bushbash-img-1',
        src: '/images/games/bushbash_1.png',
        compressedSrc: '/images/games/compressed/bushbash_1.jpg',
      },
      {
        alt: 'bushbash-img-2',
        src: '/images/games/bushbash_2.png',
        compressedSrc: '/images/games/compressed/bushbash_2.jpg',
      },
      {
        alt: 'bushbash-img-3',
        src: '/images/games/bushbash_3.png',
        compressedSrc: '/images/games/compressed/bushbash_3.jpg',
      },
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
    id: 'catnips',
    title: <h2>Catnips</h2>,
    content: (
      <p>
        Catnips is a 2-team cat milking simulator. Described as “nifty” and
        “horrifying”, deep down the game is just about love, nipples, survival
        and cat&apos;s milk. Not the easiest to describe in one paragraph, keep
        an eye out and experience it yourself next time the cats are in town.
      </p>
    ),
    images: [
      {
        alt: 'catnips-img-1',
        src: '/images/games/catnips_1.png',
        compressedSrc: '/images/games/compressed/catnips_1.jpg',
      },
      {
        alt: 'catnips-img-2',
        src: '/images/games/catnips_2.png',
        compressedSrc: '/images/games/compressed/catnips_2.jpg',
      },
      {
        alt: 'catnips-img-3',
        src: '/images/games/catnips_3.png',
        compressedSrc: '/images/games/compressed/catnips_3.jpg',
      },
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
    id: 'electric',
    title: <h2>Arcadian Dreams: Electric Forest</h2>,
    content: (
      <p>
        Electric Forest is a collaboration between SK and local artist Arcadian
        Dreams. The game consists of floating around a surreal landscape as
        either a balloon or one of two bees. Up to three players can control at
        any one time, and when no one is controlling the characters simply float
        around. The bees can pop the balloon, causing another balloon to replace
        it, if you want to call that the win condition, be our guest.
      </p>
    ),
    images: [
      {
        alt: 'electric-img-1',
        src: '/images/games/electric_1.png',
        compressedSrc: '/images/games/compressed/electric_1.jpg',
      },
      {
        alt: 'electric-img-2',
        src: '/images/games/electric_2.png',
        compressedSrc: '/images/games/compressed/electric_2.jpg',
      },
      {
        alt: 'electric-img-3',
        src: '/images/games/electric_3.png',
        compressedSrc: '/images/games/compressed/electric_3.jpg',
      },
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
    id: 'gundash',
    title: <h2>Gundash</h2>,
    content: (
      <p>
        Gundash is a 4 player platformer race. Each player can use their
        joysticks, or keyboard, to move and shoot, and will find shooting
        backwards is the fastest way forwards. Gundash is played on four
        podiums, each containing two joysticks, and trimmed with kangaroo hide,
        because it feels nice. It also is resistant to beer.
      </p>
    ),
    images: [
      {
        alt: 'gundash-img-1',
        src: '/images/games/gundash_1.png',
        compressedSrc: '/images/games/compressed/gundash_1.jpg',
      },
      {
        alt: 'gundash-img-2',
        src: '/images/games/gundash_2.png',
        compressedSrc: '/images/games/compressed/gundash_2.jpg',
      },
      {
        alt: 'gundash-img-3',
        src: '/images/games/gundash_3.png',
        compressedSrc: '/images/games/compressed/gundash_3.jpg',
      },
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
    id: 'skulls',
    title: <h2>Skulls</h2>,
    content: (
      <p>
        Skulls is a very simple 2-4 player game. Each player must collect three
        of the same object to win the game. It sounds simple, because it is, but
        the fun comes in getting in the way of other players, stealing the items
        they want and knocking them off course. Or you can just play nice, but
        that&apos;s boring.
      </p>
    ),
    images: [
      {
        alt: 'skulls-img-1',
        src: '/images/games/skulls_1.png',
        compressedSrc: '/images/games/compressed/skulls_1.jpg',
      },
      {
        alt: 'skulls-img-2',
        src: '/images/games/skulls_2.png',
        compressedSrc: '/images/games/compressed/skulls_2.jpg',
      },
      {
        alt: 'skulls-img-3',
        src: '/images/games/skulls_3.png',
        compressedSrc: '/images/games/compressed/skulls_3.jpg',
      },
    ],
    links: [],
  },
  {
    id: 'icarus',
    title: <h2>Icarus</h2>,
    content: (
      <p>
        Icarus is a 2 player co-op game about saving a sun from aliens, for some
        reason. Each player controls a satellite in orbit of the sun and must
        use their laser to hold off the attackers for as long as possible. When
        both players fire simultaneously, a third, more powerful laser, will
        activate. This game was made for our milk crate cabinets, and as such
        only uses two buttons per player.
      </p>
    ),
    images: [
      {
        alt: 'icarus-img-1',
        src: '/images/games/icarus_1.png',
        compressedSrc: '/images/games/compressed/icarus_1.jpg',
      },
      {
        alt: 'icarus-img-2',
        src: '/images/games/icarus_2.png',
        compressedSrc: '/images/games/compressed/icarus_2.jpg',
      },
      {
        alt: 'icarus-img-3',
        src: '/images/games/icarus_3.png',
        compressedSrc: '/images/games/compressed/icarus_3.jpg',
      },
    ],
    links: [],
  },
  {
    id: 'twoshot',
    title: <h2>Two Shot Robot</h2>,
    content: (
      <p>
        Two Shot is an interesting little 2 player platformer where each player
        controls a robot with only two bullets. The idea is to use them at just
        the right time, missing the mark will leave you defenseless. We also
        created a single player version set to an 8-bit version of song by The
        Decline.
      </p>
    ),
    images: [
      {
        alt: 'twoshot-img-1',
        src: '/images/games/twoshot_1.png',
        compressedSrc: '/images/games/compressed/twoshot_1.jpg',
      },
      {
        alt: 'twoshot-img-2',
        src: '/images/games/twoshot_2.png',
        compressedSrc: '/images/games/compressed/twoshot_2.jpg',
      },
      {
        alt: 'twoshot-img-3',
        src: '/images/games/twoshot_3.png',
        compressedSrc: '/images/games/compressed/twoshot_3.jpg',
      },
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
    id: 'rt',
    title: <h2>RT</h2>,
    content: (
      <p>
        RT is a gallery wanderer. Drift around the gallery, check out the art.
        Created for the VHS Loser Unit Group Show, the installation version was
        controlled by two trackballs embedded into a skateboard deck.
      </p>
    ),
    images: [
      {
        alt: 'rt-img-1',
        src: '/images/games/rt_1.png',
        compressedSrc: '/images/games/compressed/rt_1.jpg',
      },
      {
        alt: 'rt-img-2',
        src: '/images/games/rt_2.png',
        compressedSrc: '/images/games/compressed/rt_2.jpg',
      },
      {
        alt: 'rt-img-3',
        src: '/images/games/rt_3.png',
        compressedSrc: '/images/games/compressed/rt_3.jpg',
      },
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
    id: 'seed',
    title: <h2>Seed x Sable</h2>,
    content: (
      <p>
        This version of Seed was created as a collaboration between SK Games and
        SABLE, incorporating audio reactive visuals to accompany his music. Seed
        is a two player game created for milk crate cabinets. Each player
        controls a small seed/spaceship thing, with only two buttons. They can
        fly around, avoiding the asteroids, and press both buttons to boost
        through the other player. Or just chill out and fly around, it’s cool,
        no need to get violent.
      </p>
    ),
    images: [
      {
        alt: 'seed-img-1',
        src: '/images/games/seed_1.png',
        compressedSrc: '/images/games/compressed/seed_1.jpg',
      },
      {
        alt: 'seed-img-2',
        src: '/images/games/seed_2.png',
        compressedSrc: '/images/games/compressed/seed_2.jpg',
      },
      {
        alt: 'seed-img-3',
        src: '/images/games/seed_3.png',
        compressedSrc: '/images/games/compressed/seed_3.jpg',
      },
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
    id: 'astral',
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
      {
        alt: 'astral-img-1',
        src: '/images/games/astral_1.png',
        compressedSrc: '/images/games/compressed/astral_1.jpg',
      },
      {
        alt: 'astral-img-2',
        src: '/images/games/astral_2.png',
        compressedSrc: '/images/games/compressed/astral_2.jpg',
      },
      {
        alt: 'astral-img-3',
        src: '/images/games/astral_3.png',
        compressedSrc: '/images/games/compressed/astral_3.jpg',
      },
    ],
    links: [],
  },
  {
    id: 'ocean',
    title: <h2>Ocean Commotion</h2>,
    content: (
      <p>
        Ocean Commotion is a nautical whack-a-mole with custom made foot pedals.
        Two octopuses race to smack the sea creatures first to gain points. On
        each side of the cabinet there are five foot pedals, each corresponding
        to a tentacle. It can be played 1v1, or you can open up each side to as
        many players as you can fit.
      </p>
    ),
    images: [
      {
        alt: 'ocean-img-1',
        src: '/images/games/ocean_1.png',
        compressedSrc: '/images/games/compressed/ocean_1.jpg',
      },
      {
        alt: 'ocean-img-2',
        src: '/images/games/ocean_2.png',
        compressedSrc: '/images/games/compressed/ocean_2.jpg',
      },
      {
        alt: 'ocean-img-3',
        src: '/images/games/ocean_3.png',
        compressedSrc: '/images/games/compressed/ocean_3.jpg',
      },
    ],
    links: [],
  },
  {
    id: 'drop',
    title: <h2>Drop</h2>,
    content: (
      <p>
        Drop is a musical timing game for one or more players. Keeping the
        glowing drops bouncing will play more of the randomized audio tracks by
        ATOMSMASHA. It’s like keeping the balloon off the ground, except
        digital, and with music, and you get a score at the end.
      </p>
    ),
    images: [
      {
        alt: 'drop-img-1',
        src: '/images/games/drop_1.png',
        compressedSrc: '/images/games/compressed/drop_1.jpg',
      },
      {
        alt: 'drop-img-2',
        src: '/images/games/drop_2.png',
        compressedSrc: '/images/games/compressed/drop_2.jpg',
      },
      {
        alt: 'drop-img-3',
        src: '/images/games/drop_3.png',
        compressedSrc: '/images/games/compressed/drop_3.jpg',
      },
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
    id: 'bassball',
    title: <h2>Bassball</h2>,
    content: (
      <p>
        Bassball sits at the intersection of fishing and fighting. Players haul
        up a fish and smack it at their opponent, who can then smack it right
        back, and so on until someone ends up in the water. It’s very loose and
        easy to play, plus it’s fish-projectiles, which is nice.
      </p>
    ),
    images: [
      {
        alt: 'bassball-img-1',
        src: '/images/games/bassball_1.png',
        compressedSrc: '/images/games/compressed/bassball_1.jpg',
      },
      {
        alt: 'bassball-img-2',
        src: '/images/games/bassball_2.png',
        compressedSrc: '/images/games/compressed/bassball_2.jpg',
      },
      {
        alt: 'bassball-img-3',
        src: '/images/games/bassball_3.png',
        compressedSrc: '/images/games/compressed/bassball_3.jpg',
      },
    ],
    links: [],
  },
  {
    id: 'cogandballs',
    title: <h2>Cog & Balls</h2>,
    content: (
      <p>
        Cog and Balls is a multiplayer pinball-meets-pong game with a good dose
        of innuendo. SK Games&apos; first game to be put in a physical cabinet,
        it was housed in a cross shaped table constructed from a few trips to
        the tip.
      </p>
    ),
    images: [
      {
        alt: 'cogandballs-img-1',
        src: '/images/games/cogandballs_1.png',
        compressedSrc: '/images/games/compressed/cogandballs_1.jpg',
      },
      {
        alt: 'cogandballs-img-2',
        src: '/images/games/cogandballs_2.png',
        compressedSrc: '/images/games/compressed/cogandballs_2.jpg',
      },
      {
        alt: 'cogandballs-img-3',
        src: '/images/games/cogandballs_3.png',
        compressedSrc: '/images/games/compressed/cogandballs_3.jpg',
      },
    ],
    links: [],
  },
  {
    id: 'biru',
    title: <h2>Biru</h2>,
    content: (
      <p>
        Biru is a 4 player ninja-kick fight. Each ninja can only dash and
        fly-kick. Lining up the fly-kick takes skill, as well as avoiding the
        incoming fly-kicks, it’s just a lot of fly-kicking really. It also looks
        really pretty.
      </p>
    ),
    images: [
      {
        alt: 'biru-img-1',
        src: '/images/games/biru_1.png',
        compressedSrc: '/images/games/compressed/biru_1.jpg',
      },
      {
        alt: 'biru-img-2',
        src: '/images/games/biru_2.png',
        compressedSrc: '/images/games/compressed/biru_2.jpg',
      },
      {
        alt: 'biru-img-3',
        src: '/images/games/biru_3.png',
        compressedSrc: '/images/games/compressed/biru_3.jpg',
      },
    ],
    links: [],
  },
];
