import { Avatar } from "@material-ui/core";
import {
    ArrowDownwardOutlined,
    ArrowUpwardOutlined,
    ChatBubbleOutlined,
    MoreHorizOutlined,
    RepeatOneOutlined,
    ShareOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./post.css";



function Post({ post }) {
    return (
        <div className="post">
            <div className="post__info">
                <Avatar/>
                <h4>User Name</h4>
                 <small>Timestamp</small>
            </div>
            <div className="post__body">
                <div className="post__question">
                <p>This is a sample question</p>
                <button className="post__btnAnswer">Answer</button>
            </div>
            </div>
            <div className="post__info__answer">
                <Avatar />
                <h4>User Name</h4>
                <small>Timestamp</small>
            </div>
            <div className="post__body__answer">
                <div className="post__question__answer">
                    <p>This is a sample answer</p>
                </div>
                <div className="image">
                    <img src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/istock-1177184973.jpg?itok=t4OemMxU" ></img>
                </div>
            </div>
            <div className="post__footer">
                <div className="post__footerAction">
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined />
                </div>
                <RepeatOneOutlined />
                <ChatBubbleOutlined />
                <div className="post__footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>

            <p className="answer">1 Answer</p>
        </div>
    );
}

export default Post;