import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Post from "./Post.component";

export default () => {
  // create a mmethod we can despatch methods to store
  const dispatch = useDispatch();

  // What to get from store
const posts = useSelector(state=> state.posts.fetchedPosts)

console.log(posts.length)

  if (posts.length == 0) {
    return (
      <button className="btn-primary btn" onClick={() => dispatch(fetchPosts())}>
        Get Posts
      </button>
    );
  }
  return posts.map((post) => <Post post={post}key={post.id} />);
};
