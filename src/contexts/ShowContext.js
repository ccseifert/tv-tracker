import React from 'react';

const ShowContext = React.createContext({
  show: {
    id: 0,
    name: '',
    number_of_episodes: 0,
    number_of_seasons: 0,
    overview: '',
    backdrop_path: '',
    seasons: [],
  },
  season: {
    name: '',
  },
  getShow() {},
});

export default ShowContext;
export const Provider = ShowContext.Provider;
export const Consumer = ShowContext.Consumer;
