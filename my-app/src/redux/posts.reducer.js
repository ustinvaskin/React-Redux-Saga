// initial state for posts
import { CREATE_POST, FETCH_POSTS } from "./type";

const initialState = {
  posts: [],
  fetchedPosts: [],
};

// Reducer is a pure function
// 1st param is state, second is acton
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case FETCH_POSTS:
      // returning state and add fetched posts
      return { ...state, fetchedPosts: action.payload };
    default:
      return state;
  }
};
