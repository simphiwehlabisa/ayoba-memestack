import {
  fetchMemesPending,
  fetchMemesSuccess,
  fetchMemesError,
} from "./action";

function fetchMemes() {
  return (dispatch) => {
    dispatch(fetchMemesPending());
    fetch(
      "`https://api.giphy.com/v1/gifs/search?q=trending&limit=24&api_key=dc6zaTOxFJmzC"
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res);
        dispatch(fetchMemesSuccess(res.data));
        return res.memes;
      })
      .catch((error) => {
        dispatch(fetchMemesError(error));
      });
  };
}

export default fetchMemes;
