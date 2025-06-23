import React, { ReactElement, useEffect, useState } from "react";
import useToggle from "./useToggle";
import "./LikeCss.css"
import red_heart from './img/red-heart.png'
import transp_heart from './img/transparent-heart.png'

const Like = (): ReactElement => {
    const [liked, toggle] = useToggle();
    return <button onClick={toggle} className={liked ? "likeButtonOn" : "likeButtonOff"}></button>
}


export default Like;