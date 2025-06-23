import React, { ReactElement, useState } from "react";
import Like from "../Like/Like";
import CommentExpandableList from "../CommentFeatures/CommentExpandableList/CommentExpandableList";



import './Post.css'

interface Props{
    publisherName : string
    content : string

}

const Post = ({publisherName, content} : Props):ReactElement => {
    let dateTime = new Date()
    return <div className="Post">
        <h2>{publisherName}</h2>
        <p>{content}</p>
        <p>{dateTime.toDateString()} {dateTime.toLocaleTimeString()}</p>
        <Like></Like>
        <CommentExpandableList></CommentExpandableList>
        </div>
}

export default Post;