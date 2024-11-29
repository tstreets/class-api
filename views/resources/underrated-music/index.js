const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json([
    {
      name: "Rush",
      url: "https://www.rush.com/",
      image: "/resources/underrated-music/album-covers/underrated-music/R.jpg",
      songs: [
        "/resources/underrated-music/songs/Rush - A Passage To Bangkok.mp3",
        "/resources/underrated-music/songs/underrated-music/song/Rush - The Spirit Of Radio.mp3",
        "/resources/underrated-music/songs/underrated-music/song/Rush - The Trees.mp3",
      ],
    },
  ]);
});

module.exports = router;
