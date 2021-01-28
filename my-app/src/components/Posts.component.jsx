import React from "react";
import Post from "./Post.component";

// function connect HOC function returns our component with chaged functionlity
import {connect} from 'react-redux'

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center">There are no posts yet</p>;
  }
  return syncPosts.map((post) => <Post post={post} />);
};


// this function is a 1st function in connect, 
// we receive startes and return object 
// it chages state to props 

const mapStateToProps = state => {
 console.log(state.posts.fetchedPosts);
 // we can now rename state and get bits from state and it will our props 
 // note line 7 we get array of posts from state
 return {
     syncPosts: state.posts.fetchedPosts
 };
}


// connect will return a function and then we pass our component
export default connect(mapStateToProps)(Posts);
