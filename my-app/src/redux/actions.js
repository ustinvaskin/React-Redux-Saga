import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./type";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

// This is how to fetch posts
export function fetchPosts() {
  return async (dispatch) => {
    try {
      dispatch(showloader());
      const response = await fetch(
        "https://jsonlaceholder.typicode.com/posts?_limit=5"
      );
      const json = await response.json();
      setTimeout(() => {
        dispatch({
          type: FETCH_POSTS,
          payload: json,
        });
        dispatch(hideLoader());
      }, 1000);
    } catch (err) {
      dispatch(showAlert("Something is wrong"));
      setTimeout(()=>{
        dispatch(hideLoader())
      }, 1000)
    }
  };
}

export function showloader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
