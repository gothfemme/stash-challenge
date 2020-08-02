// types
const ADD_FAVORITE = "@@favorites/ADD_FAVORITE";
const REMOVE_FAVORITE = "@@favorites/REMOVE_FAVORITE";

// action creators

export const addFavorite = (image) => ({
  type: ADD_FAVORITE,
  payload: image,
});

export const removeFavorite = (image) => ({
  type: REMOVE_FAVORITE,
  payload: image,
});

// selectors

export const isImageFavorited = (state, image) => {
  return !!state.favorites.favoritesById[image.id];
};

// reducer

const initialState = {
  favorites: [],
  favoritesById: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
        favoritesById: { ...state.favoritesById, [action.payload.id]: true },
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
        favoritesById: {
          ...state.favoritesById,
          [action.payload.id]: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
