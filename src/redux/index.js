import { combineReducers } from "redux";
import images from "./modules/images";
import favorites from "./modules/favorites";

const rootReducer = combineReducers({ images, favorites });

export default rootReducer;
