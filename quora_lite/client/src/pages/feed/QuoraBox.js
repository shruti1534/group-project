import { Avatar } from "@material-ui/core";
import React from "react";
import "./QuoraBox.css";

function QuoraBox() {
    
    return (
        <div className="quoraBox">
            <div className="quoraBox__info">
                <Avatar />
                <h4>UserName</h4>
            </div>
            <div className="quoraBox__quora">
                <h5>What is your question</h5>
            </div>
        </div>
    );
}

export default QuoraBox;