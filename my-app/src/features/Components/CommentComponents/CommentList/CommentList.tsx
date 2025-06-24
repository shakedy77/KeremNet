import React from "react";
import Comment from "../Comment/Comment";
import CommentModel from "../../../Models/CommentModel/CommentModel";

import './CommentList.css'

interface Props{
    items : CommentModel[]
}

const CommentList = ({items} : Props) => {
    return <div className="CommentList">
        {items.map(item => {
            return <Comment publisherName={item.publisherName} 
                            content={item.content}
                            likeAmount={item.likeAmount}></Comment>})}
    </div>
}

export default CommentList;