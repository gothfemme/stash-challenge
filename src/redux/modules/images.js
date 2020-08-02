// types
const IMAGES_REQUEST = "@@images/IMAGES_REQUEST";
const IMAGES_REQUEST_SUCCESS = "@@images/IMAGES_REQUEST_SUCCESS";
const IMAGES_REQUEST_FAILURE = "@@images/IMAGES_REQUEST_FAILURE";
const CLEAR_IMAGE_DATA = "@@images/CLEAR_IMAGE_DATA";

// action creators
export const imagesRequest = () => ({
  type: IMAGES_REQUEST,
});

export const imagesRequestSuccess = (images) => ({
  type: IMAGES_REQUEST_SUCCESS,
  payload: images,
});

export const imagesRequestFailure = () => ({
  type: IMAGES_REQUEST_FAILURE,
});

export const clearImageData = () => ({
  type: CLEAR_IMAGE_DATA,
});

// thunks
export const getImages = (searchTerm) => async (dispatch) => {
  dispatch(imagesRequest());
  try {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?
api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=${searchTerm}`);
    const { data } = await res.json();
    dispatch(imagesRequestSuccess(data));
  } catch {
    dispatch(imagesRequestFailure());
  }
};

// reducer
const initialState = {
  images: [],
  loading: false,
  loaded: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES_REQUEST:
      return { ...state, loading: true };
    case IMAGES_REQUEST_SUCCESS:
      return { ...state, loading: false, loaded: true, images: action.payload };
    case IMAGES_REQUEST_FAILURE:
      return { ...state, loading: false, loaded: true, error: true };
    case CLEAR_IMAGE_DATA:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
