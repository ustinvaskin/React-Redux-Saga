import { CREATE_POST, FETCH_POSTS } from "./type";

export function createPost(post){
    return {
        type: CREATE_POST, 
        payload: post
    }
}


// This is how to fetch posts
export function fetchPosts(){
  return async dispatch => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      const json = await response.json()
      dispatch({
          type:FETCH_POSTS, 
          payload: json
      })
  }
}

