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
  },
  {
    name: "Cheap Trick",
    url: "https://www.cheaptrick.com/",
    cover_image: `${process.env.BASE_URL}/resources/underrated-music/album-covers/CT.jpg`,
    songs: [
      `${process.env.BASE_URL}/resources/underrated-music/songs/Cheap Trick - Magical Mystery Tour.mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/Cheap Trick - Surrender (Official Audio).mp3`,
    ],
  },

  {
    name: "Pennywise",
    url: "https://pennywisdom.com/",
    cover_image: `${process.env.BASE_URL}/resources/underrated-music/album-covers/P.jpg`,
    songs: [
      `${process.env.BASE_URL}/resources/underrated-music/songs/Pennywise - Bro Hymn (Full Album Stream).mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/Pennywise - Same Old Story.mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/PennyWise-Fuck Authority.mp3`,
      // `${process.env.BASE_URL}/resources/underrated-music/songs/replace`,
    ],
  },
];

module.exports = data;
