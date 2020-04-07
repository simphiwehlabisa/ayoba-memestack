import {
  fetchMemesPending,
  fetchMemesSuccess,
  fetchMemesError,
} from "./action";

import axios from "axios";

function fetchMemes(query) {
  return (dispatch) => {
    dispatch(fetchMemesPending());
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`
      )
      .then((response) => {
        console.log(response);
        dispatch(fetchMemesSuccess(response.data.data));
        return response.data.data;
      })
      .catch((error) => {
        dispatch(fetchMemesError(error));
      });
  };
}

export default fetchMemes;
