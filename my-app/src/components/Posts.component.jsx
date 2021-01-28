import React from "react";
import Post from './Post.component'

export default ({posts}) => {
    if (!posts.length){
     return <p className="text-center">There are no posts yet</p>   
    }
    return posts.map(post => <Post post= {post}/> );
};


