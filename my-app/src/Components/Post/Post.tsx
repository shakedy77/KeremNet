import React, { ReactElement, ReactNode, } from "react";
import Like from "../Like/Like";
import CommentList from "../CommentComponents/CommentList/CommentList";
import PostModel from "../../Models/PostModel/PostModel";

import './Post.css'

interface Props{
    postModel : PostModel
    children? : ReactNode
}

const Post = ({postModel} : Props):ReactElement => {
    return <div className="post">
        <h2>{postModel.publisherName}</h2>
        <p>{postModel.content}</p>
        <p>{`${postModel.publishDate.toDateString()} ${postModel.publishDate.toLocaleTimeString()}`}</p>
        <Like initialNumber={postModel.likeAmount}></Like>
        <CommentList items={postModel.comments}></CommentList>
        </div>
}

export default Post;