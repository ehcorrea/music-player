import React from 'react';

import './Music.css';

export const Music = () => {
  return (
    <div className="container"> 
      <h1>Badass Music</h1>
      <div id="list">
        <ul>
         <li>songs</li>
        </ul>
      </div>
      <div id="containermusic">
        <ButtonMusics></ButtonMusics>
      </div>
    </div>
  );
};

export function ButtonMusics({ AllMusic }) {

  const TheDados = AllMusic.map(dado =>
      <div className="music" key={dado.id}>
        <img className="img" src={dado.img} />
        <p> {dado.nome} </p>
      </div>
    )
  
  return(
      {TheDados}
    )
};