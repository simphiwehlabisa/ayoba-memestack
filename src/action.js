export const FETCH_MEMES_PENDING = "FETCH_MEMES_PENDING";
export const FETCH_MEMES_SUCCESS = "FETCH_MEMES_SUCCESS";
export const FETCH_MEMES_ERROR = "FETCH_MEMES_ERROR";

export function fetchMemesPending() {
  return {
    type: FETCH_MEMES_PENDING,
  };
}

export function fetchMemesSuccess(memes) {
  return {
    type: FETCH_MEMES_SUCCESS,
    memes: memes,
  };
}

export function fetchMemesError(error) {
  return {
    type: FETCH_MEMES_ERROR,
    error: error,
  };
}
