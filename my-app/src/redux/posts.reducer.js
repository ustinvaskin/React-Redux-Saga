// initial state for posts

import { CREATE_POST } from "./type";

const initialState = {
    posts:[],
    fetchedPosts: []
}

// Reducer is a clen function 
// 1st param is state, second is acton
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
return {...state, posts:[...state.posts, action.payload] }    
        default:
            return state;
    }
}