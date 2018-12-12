import { SET_SHOW } from './constants';
import { SET_SEASON } from './constants';

export const setShow = show => ({
  type: SET_SHOW,
  payload: show
});
export const setSeason = show => ({
  type: SET_SEASON,
  payload: show
});
