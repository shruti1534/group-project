import React, { useEffect, useState } from "react";
import QuoraBox from "./QuoraBox";
import Post from "./post.js";
import "./feed.css";


function Feed() {
    return (
        <div className="feed">
            <Post/>
            {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
        </div>
    );
}

export default Feed;