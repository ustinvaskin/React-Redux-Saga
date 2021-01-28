import React from "react";
import Post from './Post.component'

export default ({posts}) => {
    if (!posts.length){
        return <button className="btn-primary btn">Upload</button>   
       }
       return posts.map(post => <Post post= {post}/> );
   };