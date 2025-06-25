import  { ReactElement } from "react";
import Like from "../../Like/Like";
import CommentModel from "../../../Models/CommentModel/CommentModel";

import './Comment.css';

interface Props{
    commentModel : CommentModel
}

const Comment = ({commentModel} : Props) : ReactElement => {
    return <div className="Comment">{commentModel.publisherName} : {commentModel.content} <Like initialNumber={commentModel.likeAmount}></Like></div>
}

export default Comment;