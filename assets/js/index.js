let listeningmusic = document.querySelector("div#listeningmusic");
let container = document.querySelector('div#container');
const buttons = document.querySelectorAll('button.music');
let images = document.querySelectorAll("img.img");
let nomes = document.querySelectorAll("p");
let footer = document.querySelector("footer");

const musics = [{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOCXhI9T4YdreEByvjrCpvPsigy-H-ZTtCA&usqp=CAU",
  nome: "Disaster",
  music: "assets/music/Disaster.mp3"
},
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzSjn8hQD0TvzznW25Z4lmgLblq0NbxpREA&usqp=CAU",
    nome: "Фонк для бега",
    music: "assets/music/Фонк для бега.mp3"
  },
  {
    img: "https://i.pinimg.com/736x/e5/19/4b/e5194b3ae40a64205bbc7ed5c5fc55d5.jpg",
    nome: "Feel Like God",
    music: "assets/music/Feel Like God.mp3"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7a6lpZlN1ylWRALHjPTE0YbU7SSDMT06KA&usqp=CAU",
    nome: "After Dark",
    music: "assets/music/After Dark.mp3"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvaC4xcBKtvpakF6oJDQ7aTjK_1vagv72Ikg&usqp=CAU",
    nome: "Chase",
    music: "assets/music/Chase.mp3"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgszZJTMgXz73HdUokiP8_MWoud1qkLyiPw&usqp=CAU",
    nome: "All Alone",
    music: "assets/music/All Alone.mp3"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSU-kSsidJGBmtUEyBP2eTAw5A71dpmnEEw&usqp=CAU",
    nome: "INCOMING",
    music: "assets/music/INCOMING.mp3"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMFd_ixOGlSgf-oZ0ZXrUKkLUyTdzpIWvZw&usqp=CAU",
    nome: "S.X.N.D. N.X.D.E.S.",
    music: "assets/music/SXND NXDES.mp3"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVeB4YIIImzfVeFQWcmRuYng19qy9Php3Ag&usqp=CAU",
    nome: "Override",
    music: "assets/music/Override.mp3"
  }];

musics.forEach((music, index) => {
  let listening = document.querySelector("div#listening");
  let seekbar = document.querySelector("input");
  let x = document.querySelector("button#x");
  let imageSelect = document.querySelectorAll("img.imageSelect");
  let titulo = document.querySelectorAll("p.titulo");
  const audio = new Audio(music.music);


  buttons[index].addEventListener('click', () => {
    audio.addEventListener('timeupdate', () => {
      seekbar.value = parseInt((audio.currentTime/audio.duration)*100);
    });
    seekbar.addEventListener('change', () => {
      audio.currentTime = seekbar.value*audio.duration/100;
    });
    audio.play()
    images[index].classList.add('active');
    footer.classList.add('active');
    listeningmusic.classList.add('active');
    container.classList.add('active');
    listening.classList.add('active');
    for (let i = 0; i < imageSelect.length; i++) {
      imageSelect[i].src = (music.img);
    }
    for (let i = 0; i < titulo.length; i++) {
      titulo[i].innerText = (music.nome);
    }
  listening.addEventListener('click', () => {
    audio.play()
    listeningmusic.classList.add('active');
    container.classList.add('active');
    //listening.classList.add('active');
  })
  });
  x.addEventListener('click', () => {
      audio.pause()
      listeningmusic.classList.remove('active');
      container.classList.remove('active');
    })
  images[index].src = (music.img);
  nomes[index].innerText = (music.nome);
});