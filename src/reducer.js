import {
  FETCH_MEMES_PENDING,
  FETCH_MEMES_SUCCESS,
  FETCH_MEMES_ERROR,
} from "./action";

const initialState = {
  pending: false,
  memes: [],
  error: null,
};

export function memesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MEMES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MEMES_SUCCESS:
      return {
        ...state,
        pending: false,
        memes: action.memes,
      };
    case FETCH_MEMES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getMemes = (state) => state.memes;
export const getMemesPending = (state) => state.pending;
export const getMemesError = (state) => state.error;
