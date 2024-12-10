const data = [
  {
    name: "Rush",
    url: "https://www.rush.com/",
    cover_image: `${process.env.BASE_URL}/resources/underrated-music/album-covers/R.jpg`,
    songs: [
      `${process.env.BASE_URL}/resources/underrated-music/songs/Rush - A Passage To Bangkok.mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/Rush - The Spirit Of Radio.mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/Rush - The Trees.mp3`,
    ],
    songTitles: ["A Passage To Bangkok", "The Spirit Of Radio", "The Trees"],
  },
  {
    name: "Cheap Trick",
    url: "https://www.cheaptrick.com/",
    cover_image: `${process.env.BASE_URL}/resources/underrated-music/album-covers/CT.jpg`,
    songs: [
      `${process.env.BASE_URL}/resources/underrated-music/songs/Cheap Trick - Magical Mystery Tour.mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/Cheap Trick - Surrender (Official Audio).mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/Dream Police.mp3`,
    ],
    songTitles: ["Magical Mystery Tour", "Surrender", "Dream Police"],
  },
  {
    name: "Pennywise",
    url: "https://pennywisdom.com/",
    cover_image: `${process.env.BASE_URL}/resources/underrated-music/album-covers/P.jpg`,
    songs: [
      `${process.env.BASE_URL}/resources/underrated-music/songs/Pennywise - Bro Hymn (Full Album Stream).mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/Pennywise - Same Old Story.mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/PennyWise-Fuck Authority.mp3`,
    ],
    songTitles: ["Bro Hymn", "Same Old Story", "Fuck Authority"],
  },
  {
    name: "Queens of the Stone Age",
    url: "https://qotsa.com/",
    cover_image: `${process.env.BASE_URL}/resources/underrated-music/album-covers/QueensoftheStoneAgeI.jpg`,
    songs: [
      `${process.env.BASE_URL}/resources/underrated-music/songs/Queens of the Stone Age - I Sat By The Ocean (Official Audio).mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/Queens Of The Stone Age - Little Sister.mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/Queens of the Stone Age - My God Is The Sun.mp3`,
      // `${process.env.BASE_URL}/resources/underrated-music/songs/replace`,
    ],
    songTitles: ["I Sat By The Ocean", "Little Sister", "My God Is The Sun"],
  },
  {
    name: "Three Days Grace",
    url: "https://threedaysgrace.com/",
    cover_image: `${process.env.BASE_URL}/resources/underrated-music/album-covers/One_X.png`,
    songs: [
      `${process.env.BASE_URL}/resources/underrated-music/songs/Three Days Grace - Animal I Have Become.mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/Three Days Grace - Pain.mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/On My Own.mp3`,
    ],
    songTitles: ["Animal I Have Become", "Pain", "On My Own"],
  },
  {
    name: "Pixies",
    url: "https://www.pixiesmusic.com/",
    cover_image: `${process.env.BASE_URL}/resources/underrated-music/album-covers/P.jpg`,
    songs: [
      `${process.env.BASE_URL}/resources/underrated-music/songs/Pixies - Gigantic [HD].mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/Where Is My Mind_ (2007 Remaster).mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/The Holiday Song.mp3`,
    ],
    songTitles: ["Gigantic", "Where Is My Mind", "The Holiday Song"],
  },
];

module.exports = data;
