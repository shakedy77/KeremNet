import React, { ReactElement } from "react";
import Like from "../Like/Like";
import './Comment.css'

interface Props{
    publisherName : string
    content : string
}

const Comment = ({publisherName, content} : Props) : ReactElement => {
    return <div className="Comment">{publisherName} : {content} <Like></Like></div>
}

export default Comment;