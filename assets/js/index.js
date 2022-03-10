let containermusic = document.querySelector('div#containermusic');
const buttons = document.querySelectorAll('button.music');
let images = document.querySelectorAll("img.img");
let nomes = document.querySelectorAll("p");
let listening = document.querySelector("div#listening");
let seekbar = document.querySelector("input");
let buttonsControlls = document.querySelector("#buttonsControlls");
let back = document.querySelector("#back");
let stop = document.querySelector("#stop");
let next = document.querySelector("#next");
let imageSelect = document.querySelector("img.imageSelect");
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

let index = 0;
let StopIndex = 0;
let songIndex = 2;
let playing = true;

musics.forEach((music, index) => {
  const audio = new Audio(music.music);

  let x = document.querySelector("button#x");
  let titulo = document.querySelectorAll("p.titulo");

  images[index].src = (music.img);
  nomes[index].innerText = (music.nome);

  buttons[index].addEventListener('click',
    () => {
      audio.play()
      stop.addEventListener('click',
        () => {
          if (playing) {
            audio.play();
            stop.src = "assets/img/break.png"
            playing = false;
          } else {
            stop.src = "./assets/img/button_play.png"
            audio.pause();
            playing = true;
          };
        });

      back.addEventListener('click',
        () => {
          console.log('voltar')
          songIndex--;
          if (songIndex < 0) {
            songIndex = 1;
          };
          audio.src = (music.music);
          imageSelect.src = (music.img);
          titulo.innerText = (music.nome);

          playing = true;
          playPause();
        })

      next.addEventListener('click',
        () => {
          console.log('prox')
          songIndex++;
          if (songIndex > 1) {
            songIndex = 0;
          };
          audio.src = (music.music);
          imageSelect.src = (music.img);
          titulo.innerText = (music.nome);
          playing = true;
          playPause();
        });

      audio.addEventListener('timeupdate',
        () => {
          seekbar.value = parseInt((audio.currentTime/audio.duration)*100);
        });
      seekbar.addEventListener('change',
        () => {
          audio.currentTime = seekbar.value*audio.duration/100;
        });
      seekbar.classList.add('active');
      listening.classList.add('active');
      imageSelect.classList.remove('active');
      footer.classList.add('active');
      containermusic.style.display = "none";
      buttonsControlls.style.display = "flex";
      x.style.display = "block";
      imageSelect.src = (music.img);
      for (let i = 0; i < titulo.length; i++) {
        titulo[i].innerText = (music.nome);
      };
      Listening()
      xButton()
    });
});

function Listening() {
  listening.addEventListener('click', () => {
    containermusic.style.display = "flex";
    listening.style.display = "flex";
  });
}

function xButton() {
  x.addEventListener('click',
    () => {
      buttonsControlls.style.display = "none";
      x.style.display = "none";
      seekbar.classList.remove('active');
      listening.classList.remove('active');
      imageSelect.classList.add('active');
      containermusic.style.display = "flex";
    });
}
