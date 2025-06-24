import React, { ReactElement, } from "react";
import Like from "../Like/Like";
import CommentList from "../CommentComponents/CommentList/CommentList";
// import CommentExpandableList from "../CommentComponents/CommentExpandableList/CommentExpandableList";
import PostProps from "../../Interfaces/PostPropsInterface/PostPropsInterface";


import './Post.css'


const Post = ({publisherName, content, publishDate, likeAmount, comments} : PostProps):ReactElement => {
    return <div className="Post">
        <h2>{publisherName}</h2>
        <p>{content}</p>
        <p>{publishDate}</p>
        <Like initialNumber={likeAmount}></Like>
        <CommentList items={comments}></CommentList>
        </div>
}

export default Post;