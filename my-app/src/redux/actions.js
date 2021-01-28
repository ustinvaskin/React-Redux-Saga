import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from "./type";

export function createPost(post){
    return {
        type: CREATE_POST, 
        payload: post
    }
}


// This is how to fetch posts
export function fetchPosts(){
  return async dispatch => {
    dispatch(showloader())
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      const json = await response.json()
      dispatch({
          type:FETCH_POSTS, 
          payload: json
      })
      dispatch(hideLoader())
  }
}


export function showloader(){
   return {
       type: SHOW_LOADER
   }
  }

  export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
   }
   
  