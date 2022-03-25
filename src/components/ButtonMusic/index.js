import React from "react";

function ButtonMusics({ AllMusics }) {
  return AllMusics.map((dado) => (
    <div className="music" key={dado.id}>
      <img className="img" src={dado.img} alt={`ìmage from ${dado.nome}`} />
      <p> {dado.nome} </p>
    </div>
  ));
}

export default ButtonMusics;
