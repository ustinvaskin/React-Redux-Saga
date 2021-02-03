import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Post from "./Post.component";
import Loader from "./Loader";
export default () => {
  // create a mmethod we can despatch methods to store
  const dispatch = useDispatch();

  // What to get from store
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);
  console.log(loading);
  if (loading) {
    return <Loader />;
  }
  if (posts.length == 0) {
    return (
      <button
        className="btn-primary btn"
        onClick={() => dispatch(fetchPosts())}
      >
        Get Posts
      </button>
    );
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
};
