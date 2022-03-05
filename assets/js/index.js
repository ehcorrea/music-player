const buttons = document.querySelectorAll('button');
let images = document.querySelectorAll("img");
let nomes = document.querySelectorAll("p");
let listening = document.querySelector("div#listening");

const musics = [{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOCXhI9T4YdreEByvjrCpvPsigy-H-ZTtCA&usqp=CAU",
  nome: "Disaster",
  music: ""
},
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzSjn8hQD0TvzznW25Z4lmgLblq0NbxpREA&usqp=CAU",
    nome: "Фонк для бега",
    music: ""
  },
  {
    img: "https://i.pinimg.com/736x/e5/19/4b/e5194b3ae40a64205bbc7ed5c5fc55d5.jpg",
    nome: "Feel Like God",
    music: ""
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7a6lpZlN1ylWRALHjPTE0YbU7SSDMT06KA&usqp=CAU",
    nome: "After Dark",
    music: ""
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvaC4xcBKtvpakF6oJDQ7aTjK_1vagv72Ikg&usqp=CAU",
    nome: "Chase",
    music: ""
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgszZJTMgXz73HdUokiP8_MWoud1qkLyiPw&usqp=CAU",
    nome: "All Alone",
    music: ""
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSU-kSsidJGBmtUEyBP2eTAw5A71dpmnEEw&usqp=CAU",
    nome: "INCOMING",
    music: ""
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMFd_ixOGlSgf-oZ0ZXrUKkLUyTdzpIWvZw&usqp=CAU",
    nome: "S.X.N.D. N.X.D.E.S.",
    music: ""
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVeB4YIIImzfVeFQWcmRuYng19qy9Php3Ag&usqp=CAU",
    nome: "Override",
    music: ""
  }];

musics.forEach((music, index) => {
  let footer = document.querySelector("footer");
  let imageSelect = document.querySelector("img#imageSelect");
  let titulo = document.querySelector("p#titulo");
  buttons[index].addEventListener('click', () => {
    images[index].classList.add('active');
    listening.classList.add('active');
    footer.classList.add('active');
    imageSelect.src = (music.img);
    titulo.innerText = (music.nome);
  });

  images[index].src = (music.img);
  nomes[index].innerText = (music.nome);
});
