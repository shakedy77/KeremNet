import React, { ReactElement } from "react";
import Like from "../Like/Like";
import CommentExpandableList from "../CommentFeatures/CommentExpandableList/CommentExpandableList";



import './Post.css'

interface Props{
    publisherName : string
    content : string

}

const Post = ({publisherName, content} : Props):ReactElement => {
    return <div className="Post">
        <h2>{publisherName}</h2>
        <p>{content}</p>
        <Like></Like>
        <CommentExpandableList></CommentExpandableList>
        </div>
}

export default Post;