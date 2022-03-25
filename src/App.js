import React from "react";

import musics from "./mocks/musics";
import Music from "./components/Music";

export const App = () => {
  return (
    <div>
      <Music AllMusics={musics} />;
    </div>
  );
};
