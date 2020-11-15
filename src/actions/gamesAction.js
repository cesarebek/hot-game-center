import axios from 'axios';
import { popularGamesURL } from '../api';

//Action creator
//Since I use thunk and I want to fetch data from an API I have to call twice arrowfunction:
export const loadGames = () => async (dispatch) => {
  //Fetch with axios, remember to invoke the function that's fetching.
  const popularData = await axios.get(popularGamesURL());
  dispatch({
    type: 'FETCH_GAMES',
    //Sets the new state of...
    payload: {
      popular: popularData.data.results,
    },
  });
};
