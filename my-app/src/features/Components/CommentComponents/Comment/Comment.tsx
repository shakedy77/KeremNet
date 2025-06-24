import React, { ReactElement } from "react";
import Like from "../../Like/Like";
import './Comment.css'
import Props from "../../../Interfaces/CommentPropsInterface/CommentPropsInterface";

const Comment = ({publisherName, content, likeAmount=0} : Props) : ReactElement => {
    return <div className="Comment">{publisherName} : {content} <Like initialNumber={likeAmount}></Like></div>
}

export default Comment;