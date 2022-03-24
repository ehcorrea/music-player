import React from 'react';

import { DataMusic } from './components/DataMusic';
import { Music } from './components/Music';

export const App = () => {
  return(
    <Music AllMusic={DataMusic}></Music>
  );
};
