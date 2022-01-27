import React from "react";
import { useSelector } from "react-redux";

import Post from "./1Post/1Post.js";
import useStyle from './styles'

const Posts = ()=>{
      const posts = useSelector((state)=>state.posts);
      const classes = useStyle();
      console.log(posts);
      return(
            <>
            <h1>Posts</h1>
            <Post/>
            <Post/>

            </>
      )
}

export default Posts