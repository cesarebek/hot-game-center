import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesGamesURL } from '../api';

//Action creator
//Since I use thunk and I want to fetch data from an API I have to call twice arrowfunction:
export const loadGames = () => async (dispatch) => {
  //Fetch with axios, remember to invoke the function that's fetching.
  const popularGamesData = await axios.get(popularGamesURL());
  const upComingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesGamesURL());
  dispatch({
    type: 'FETCH_GAMES',
    //Sets the new state of...
    payload: {
      popular: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upComing: upComingGamesData.data.results,
    },
  });
};
