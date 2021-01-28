import { combineReducers } from "redux";
import { appReducer } from "./app.reducer";
import { postsReducer } from "./posts.reducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
});
