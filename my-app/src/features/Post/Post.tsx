import React, { ReactElement } from "react";
import Like from "../Like/Like";



import './Post.css'

interface Props{
    publisherName : string
    content : string

}

const GreetingCard = ({publisherName, content} : Props):ReactElement => {
    return <div className="Post"><h2>{publisherName}</h2>{content}</div>
}

export default GreetingCard;