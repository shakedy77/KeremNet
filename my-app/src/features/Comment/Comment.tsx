import React, { ReactElement } from "react";


interface Props{
    publisherName : string
    content : string
}

const Comment = ({publisherName, content} : Props) : ReactElement => {
    return <div>
        <h2>{publisherName}</h2>
        <h3>{content}</h3>
    </div>
}

export default Comment;