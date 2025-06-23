import React, { ReactElement, useEffect, useState } from "react";
import useToggle from "./useToggle";
import "./LikeCss.css"

const Like = (): ReactElement => {
    const [liked, toggle] = useToggle();
    return <button onClick={toggle} className={liked ? "likeButtonOn" : "likeButtonOff"}></button>
}


export default Like;