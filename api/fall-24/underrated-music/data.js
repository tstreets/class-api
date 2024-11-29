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
    url: "https://www.rush.com/",
    cover_image: `${process.env.BASE_URL}/resources/underrated-music/album-covers/CT.jpg`,
    songs: [
      `${process.env.BASE_URL}/resources/underrated-music/songs/Cheap Trick - Magical Mystery Tour.mp3`,
      `${process.env.BASE_URL}/resources/underrated-music/songs/Cheap Trick - Surrender (Official Audio).mp3`,
    ],
  },
];

module.exports = data;
