const songs = [
  {
    title: "Last Night on Earth",
    artist: "Green Day",
    src: "lagu/last-night-on-earth.mp3",
    cover: "cover/last-night-on-earth.jpg",
    color: "#C65D09"
  },
  {
    title: "Blue",
    artist: "Yungkai",
    src: "lagu/blue.mp3",
    cover: "cover/blue.jpg",
    color: "#81B4CF"
  },
  {
    title: "I Think They Call This Love",
    artist: "Elliot James Reay",
    src: "lagu/i-think-they-call-this-love.mp3",
    cover: "cover/i-think-they-call-this-love.jpg",
    color: "#C1A18A"
  },
  {
    title: "Basket Case",
    artist: "Green Day",
    src: "lagu/basket-case.mp3",
    cover: "cover/basket-case.jpg",
    color: "#CAD6E2"
  },
  {
    title: "Creep",
    artist: "Radiohead",
    src: "lagu/creep.mp3",
    cover: "cover/creep.jpg",
    color: "#E0B75D"
  },
  {
    title: "December",
    artist: "Neck Deep",
    src: "lagu/december.mp3",
    cover: "cover/december.jpg",
    color: "#004281"
  },
  {
    title: "Wish You Were Here",
    artist: "Neck Deep",
    src: "lagu/wish-you-were-here.mp3",
    cover: "cover/wish-you-were-here.jpg",
    color: "#7B7B7B"
  },
  {
    title: "American Idiot",
    artist: "Green Day",
    src: "lagu/american-idiot.mp3",
    cover: "cover/american-idiot.jpg",
    color: "#D71B23"
  },
  {
    title: "Mr. Loverman",
    artist: "Ricky Montgomery",
    src: "lagu/mr-loverman.mp3",
    cover: "cover/mr-loverman.jpg",
    color: "#A07F70"
  },
  {
    title: "The World Is Ugly",
    artist: "My Chemical Romance",
    src: "lagu/the-world-is-ugly.mp3",
    cover: "cover/the-world-is-ugly.jpg",
    color: "#4D4D4D"
  },
  {
    title: "Disenchanted",
    artist: "My Chemical Romance",
    src: "lagu/disenchanted.mp3",
    cover: "cover/disenchanted.jpg",
    color: "#BDBAB5"
  },
  {
    title: "I Don't Love You",
    artist: "My Chemical Romance",
    src: "lagu/i-dont-love-you.mp3",
    cover: "cover/i-dont-love-you.jpg",
    color: "#BDBAB5"
  },
  {
    title: "Cancer",
    artist: "My Chemical Romance",
    src: "lagu/cancer.mp3",
    cover: "cover/cancer.jpg",
    color: "#BDBAB5"
  },
  {
    title: "Helena",
    artist: "My Chemical Romance",
    src: "lagu/helena.mp3",
    cover: "cover/helena.jpg",
    color: "#BE463E"
  },
  {
    title: "Viva La Vida",
    artist: "Coldplay",
    src: "lagu/viva-la-vida.mp3",
    cover: "cover/viva-la-vida.jpg",
    color: "#C1241D"
  },
  {
    title: "You'll Be In My Heart",
    artist: "NIKI",
    src: "lagu/youll-be-in-my-heart.mp3",
    cover: "cover/youll-be-in-my-heart.jpg",
    color: "#D9C6B8"
  },
  {
    title: "It's Over Isn't It",
    artist: "Steven Universe",
    src: "lagu/its-over-isnt-it.mp3",
    cover: "cover/its-over-isnt-it.jpg",
    color: "#BE99C5"
  }
];

let currentIndex = 0;

const audio = document.getElementById("audio-player");
const playBtnImg = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const cover = document.getElementById("song-cover");
const frame = document.querySelector(".frame");
const titleEl = document.getElementById("song-title");
const artistEl = document.getElementById("song-artist");

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  cover.src = song.cover;
  frame.style.borderColor = song.color;
  frame.style.backgroundColor = song.color;
  titleEl.textContent = song.title;
  artistEl.textContent = song.artist;
  playBtnImg.src = "button/play.png";
}

playBtnImg.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtnImg.src = "button/pause.png";
  } else {
    audio.pause();
    playBtnImg.src = "button/play.png";
  }
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  audio.play();
  playBtnImg.src = "button/pause.png";
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audio.play();
  playBtnImg.src = "button/pause.png";
});

window.addEventListener("load", () => {
  loadSong(currentIndex);
});
