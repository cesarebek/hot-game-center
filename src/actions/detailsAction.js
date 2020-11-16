import axios from 'axios';
import { gameDetailsURL, gameScreenshotsURL } from '../api';

export const loadDetails = (id) => async (dispatch) => {
  const detailsData = await axios.get(gameDetailsURL(id));
  const screenShotsData = await axios.get(gameScreenshotsURL(id));

  dispatch({
    type: 'GET_DETAILS',
    payload: {
      game: detailsData.data,
      screen: screenShotsData.data,
    },
  });
};
