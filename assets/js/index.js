let containermusic = document.querySelector('div#containermusic');
const buttons = document.querySelectorAll('button.music');
let images = document.querySelectorAll("img.img");
let nomes = document.querySelectorAll("p");
let listening = document.querySelector("div#listening");
let seekbar = document.querySelector("input");
let down_arrow = document.querySelector("button#down_arrow");
let titulo = document.querySelectorAll("p.titulo");
let time_container = document.querySelector("#time_container");
let buttonsControlls = document.querySelector("#buttonsControlls");
let stop = document.querySelector("#stop");
let imageSelect = document.querySelector("img.imageSelect");
let duracaoMusica = document.querySelector('#durationTime');
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

let songIndex = 1;

const A_Music = musics.filter((music, index) => {
  function loadSong(musics) {
    images[index].src = (music.img);
    nomes[index].innerText = (music.nome);
  }
  loadSong(musics[songIndex]);
  const audio = new Audio(music.music);
  buttons[index].addEventListener('click', () => {
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(audio.duration));
    function playSound () {
      let playing = true;
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
    }
    playSound()
    for (let i = 0; i < titulo.length; i++) {
      titulo[i].innerText = (music.nome);
    };
    imageSelect.src = (music.img);
    
    audio.addEventListener('timeupdate',
      () => {
        seekbar.value = parseInt((audio.currentTime/audio.duration)*100);
        let tempoDecorrido = document.querySelector('#currentTime');
        tempoDecorrido.textContent = segundosParaMinutos(Math.floor(audio.currentTime));
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
    time_container.style.display = "flex";
    buttonsControlls.style.display = "flex";
    down_arrow.style.display = "block";
    down_arrow.classList.remove('active');
    DownButton()
    function DownButton() {
      playSound()
      let downArrow = true;
      down_arrow.addEventListener('click',
        () => {
          if (downArrow) {
            time_container.style.display = "none";
            buttonsControlls.style.display = "none";
            down_arrow.style.display = "flex";
            down_arrow.classList.add('active');
            seekbar.classList.remove('active');
            listening.classList.remove('active');
            listening.style.display = "flex";
            imageSelect.classList.add('active');
            containermusic.style.display = "flex";
            downArrow = false;
          } else {
            time_container.style.display = "flex";
            buttonsControlls.style.display = "flex";
            down_arrow.style.display = "block";
            down_arrow.classList.remove('active');
            seekbar.classList.add('active');
            listening.classList.add('active');
            imageSelect.classList.remove('active');
            containermusic.style.display = "none";
            downArrow = true;
          }
        });
    }
  });
});


function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = '0' + campoSegundos;
  }
  return campoMinutos+':'+campoSegundos;
}
