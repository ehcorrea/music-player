import React from "react";
import ButtonMusics from "../ButtonMusic";

import "./Music.css";

export const Music = ({ AllMusics }) => {
  return (
    <div className="container">
      <h1>Badass Music</h1>
      <div id="list">
        <ul>
          <li>songs</li>
        </ul>
      </div>
      <div id="containermusic">
        <ButtonMusics AllMusics={AllMusics} />
      </div>
    </div>
  );
};
