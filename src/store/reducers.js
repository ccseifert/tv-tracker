import { combineReducers } from 'redux';
import { SET_SHOW } from './constants';
import { SET_SEASON } from './constants';

const initialState = {
  show: {
    id: 0,
    name: '',
    number_of_episodes: 0,
    number_of_seasons: 0,
    overview: '',
    backdrop_path: '',
    seasons: []
  },
  season: {
    name: ''
  }
};

const setShow = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW:
      return action.payload;
    default:
      return state;
  }
};

const setSeason = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEASON:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ setShow, setSeason });

export default rootReducer;
