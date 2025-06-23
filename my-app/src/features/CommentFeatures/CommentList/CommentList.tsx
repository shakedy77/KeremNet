import React, { ChangeEvent, ReactElement } from "react";
import { useState } from "react";
import Comment from "../Comment/Comment";

interface Props{
    items : ReactElement<any>[]
}

const CommentList = ({items} : Props) => {
    return <div className="CommentList">
        {items}
    </div>
}

export default CommentList;