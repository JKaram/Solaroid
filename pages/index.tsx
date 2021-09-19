import useInfinitePhotos from "../utils/API/useInifintePhotos";
import type { NextPage } from "next";
import PhotoList from "../components/sections/PhotoList/PhotoList";
import PageLayout from "../components/commons/PageLayout";
import useAppState from "../hooks/useAppState";

const mockData = [
  {
    copyright: "CARA Project",
    date: "2021-09-10",
    explanation:
      "Faint comet Churyumov-Gerasimenko (67P) sweeps past background stars in the constellation Taurus and even fainter distant galaxies in this telescopic frame from September 7. About 5 years ago, this comet's 4 kilometer spanning, double-lobed nucleus became the final resting place of robots from planet Earth, following the completion of the historic Rosetta mission to the comet. After wandering out beyond the orbit of Jupiter, Churyumov-Gerasimenko is now returning along its 6.4 year periodic orbit toward its next perihelion or closest approach to the Sun, on November 2. On November 12, the comet's perigee, its closest approach to Earth, will bring it within about 0.42 astronomical units. Telescopes should still be required to view it even at its brightest, predicted to be in late November and December. On September 7 Rosetta's comet was about 0.65 astronomical units away or about 5.4 light-minutes from our fair planet.",
    hdurl: "https://apod.nasa.gov/apod/image/2109/67P_210907.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Rosetta's Comet in View",
    url: "https://apod.nasa.gov/apod/image/2109/67P_210907_1024.jpg",
  },
  {
    date: "2021-09-11",
    explanation:
      "Still bright in planet Earth's night skies, good telescopic views of Saturn and its beautiful rings often make it a star at star parties. But this stunning view of Saturn's rings and night side just isn't possible from telescopes closer to the Sun than the outer planet. They can only bring Saturn's day into view. In fact, this image of Saturn's slender sunlit crescent with night's shadow cast across its broad and complex ring system was captured by the Cassini spacecraft. A robot spacecraft from planet Earth, Cassini called Saturn orbit home for 13 years before it was directed to dive into the atmosphere of the gas giant on September 15, 2017. This magnificent mosaic is composed of frames recorded by Cassini's wide-angle camera only two days before its grand final plunge. Saturn's night will not be seen again until another spaceship from Earth calls.",
    hdurl: "https://apod.nasa.gov/apod/image/2109/LastRingPortrait_Cassini_4472.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Saturn at Night",
    url: "https://apod.nasa.gov/apod/image/2109/LastRingPortrait_Cassini_1080.jpg",
  },
  {
    copyright: "Davide Necchi",
    date: "2021-09-12",
    explanation:
      "What's happened to the sky? Aurora! Captured in 2015, this aurora was noted by Icelanders for its great brightness and quick development. The aurora resulted from a solar storm, with high energy particles bursting out from the Sun and through a crack in Earth's protective magnetosphere a few days later. Although a spiral pattern can be discerned, creative humans might imagine the complex glow as an atmospheric apparition of any number of common icons. In the foreground of the featured image is the \u00d6lfus\u00e1 River while the lights illuminate a bridge in Selfoss City. Just beyond the low clouds is a nearly full Moon. The liveliness of the Sun -- and likely the resulting auroras on Earth -- is slowly increasing as the Sun emerges from a Solar minimum, a historically quiet period in its 11-year cycle.",
    hdurl: "https://apod.nasa.gov/apod/image/2109/AuroraIceland_Necchi_1280.jpg",
    media_type: "image",
    service_version: "v1",
    title: "A Spiral Aurora over Iceland",
    url: "https://apod.nasa.gov/apod/image/2109/AuroraIceland_Necchi_960.jpg",
  },
  {
    copyright: "Egon Filter",
    date: "2021-09-13",
    explanation:
      "What's that in the mirror? In the featured image of the dark southern sky, the three brightest galaxies of the night are all relatively easy to identify. Starting from the left, these are the Small Magellanic Cloud (SMC), the Large Magellanic Cloud (LMC), and part of the central band of our Milky Way Galaxy. All three are also seen reflected in a shallow pool of water. But what is seen in the mirror being positioned by the playful astrophotographer? Dust clouds near the center of our Milky Way -- and the planet Jupiter.  The composite was carefully planned and composed from images captured from the same camera in the same location and during the same night in mid-2019 in Mostardas, south Brazil.  The picture won first place in the Connecting to the Dark division of the International Dark-Sky Association's Capture the Dark contest for 2021.   Quiz: What is pictured in the double-reflection below the main mirror?",
    hdurl: "https://apod.nasa.gov/apod/image/2109/GalaxySkyMirror_Egon_2048.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Night Sky Reflected",
    url: "https://apod.nasa.gov/apod/image/2109/GalaxySkyMirror_Egon_960.jpg",
  },
  {
    date: "2021-09-14",
    explanation:
      "Which way up Mount Sharp? In early September, the robotic rover Curiosity continued its ascent up the central peak of Gale Crater, searching for more clues about ancient water and further evidence that Mars could once have been capable of supporting life.  On this recent Martian morning, before exploratory drilling, the rolling rover took this 360-degree panorama, in part to help Curiosity's human team back on Earth access the landscape and chart possible future routes.  In the horizontally-compressed featured image, an amazing vista across Mars was captured, complete with layered hills, red rocky ground, gray drifting sand, and a dusty atmosphere. The hill just left of center has been dubbed Maria Gordon Notch in honor of a famous Scottish geologist.  The current plan is to direct Curiosity to approach, study, and pass just to the right of Gordon Notch on its exploratory trek.",
    hdurl: "https://apod.nasa.gov/apod/image/2109/MarsPan360_Curiosity_6144.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Mars Panorama 360 from Curiosity",
    url: "https://apod.nasa.gov/apod/image/2109/MarsPanCompressed_Curiosity_1080.jpg",
  },
  {
    date: "2021-09-15",
    explanation:
      "Where on Earth do cyclones go? Usually known as hurricanes when in the Atlantic Ocean and typhoons when in the Pacific, the featured map shows the path of all major storms from 1985 through 2005.  The map shows graphically that cyclones usually occur over water, which makes sense since evaporating warm water gives them energy. The map also shows that cyclones never cross -- and rarely approach -- the Earth's equator, since the Coriolis effect goes to zero there, and cyclones need the Coriolis force to circulate. The Coriolis force also causes cyclone paths to arc away from the equator. Although long-term trends remain a topic of research, evidence indicates that hurricanes have become, on the average, more powerful in the North Atlantic over the past 30 years, and their power is projected to keep increasing.   Follow APOD on Instagram in: English, Farsi, Indonesian, Persian, or Portuguese",
    hdurl: "https://apod.nasa.gov/apod/image/2109/StormPaths_NHC_8000.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Cyclone Paths on Planet Earth",
    url: "https://apod.nasa.gov/apod/image/2109/StormPaths_NHC_1080.jpg",
  },
  {
    copyright: "Andrew Klinger",
    date: "2021-09-16",
    explanation:
      "Fans of our fair planet might recognize the outlines of these cosmic clouds. On the left, bright emission outlined by dark, obscuring dust lanes seems to trace a continental shape, lending the popular name North America Nebula to the emission region cataloged as NGC 7000. To the right, just off the North America Nebula's east coast, is IC 5070, whose avian profile suggests the Pelican Nebula.  The two bright nebulae are about 1,500 light-years away, part of the same large and complex star forming region, almost as nearby as the better-known Orion Nebula. At that distance, the 3 degree wide field of view would span 80 light-years. This careful cosmic portrait uses narrow band images combined to highlight the bright ionization fronts and the characteristic glow from atomic hydrogen, sulfur, and oxygen gas. These nebulae can be seen with binoculars from a dark location.  Look northeast of bright star Deneb in the constellation Cygnus the Swan.",
    hdurl: "https://apod.nasa.gov/apod/image/2109/NGC7000_SHO_AndrewKlinger_res65_sig.jpg",
    media_type: "image",
    service_version: "v1",
    title: "North America and the Pelican",
    url: "https://apod.nasa.gov/apod/image/2109/NGC7000_SHO_AndrewKlinger_res65_sig1024.jpg",
  },
  {
    copyright:
      "T. Humbert, S. Barr\u00e9, A. Desmougin & D. WalliangSoci\u00e9t\u00e9 Lorraine d'AstronomieAstroqueyras",
    date: "2021-09-17",
    explanation:
      "There has been a flash on Jupiter. A few days ago, several groups monitoring our Solar System's largest planet noticed a two-second long burst of light. Such flashes have been seen before, with the most famous being a series of impactor strikes in 1994. Then, fragments of Comet Shoemaker-Levy 9 struck  Jupiter leaving dark patches that lasted for months. Since then, at least seven impacts have been recorded on Jupiter -- usually discovered by amateur astronomers. In the featured video, variations in the Earth's atmosphere cause Jupiter's image to shimmer when, suddenly, a bright flash appears just left of center.  Io and its shadow are visible on the right. What hit Jupiter will likely never be known, but considering what we do know of the nearby Solar System, it was likely a piece of rock and ice -- perhaps the size of a bus -- that broke off long-ago from a passing comet or asteroid.",
    media_type: "video",
    service_version: "v1",
    title: "Video: Flash on Jupiter",
    url: "https://www.youtube.com/embed/ImVl_TfTFEY?rel=0",
  },
];

const Home: NextPage = () => {
  const { likes } = useAppState();
  const { data, fetchNextPage, isLoading, isError } = useInfinitePhotos();

  return (
    <PageLayout>
      {isLoading && "ISLOADING"}
      {isError && "ISERROR"}
      <PhotoList data={mockData} fetchMorePhotos={fetchNextPage} isLoading={isLoading} />
    </PageLayout>
  );
};

export default Home;
