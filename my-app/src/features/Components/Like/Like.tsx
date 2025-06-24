import React, { ReactElement } from "react";
// import useCounter from "../../Hooks/CounterHook/useCounter";
import useToggle from "../../Hooks/toggleHook/useToggle";
import "./Like.css"

interface Props{
    initialNumber : number
}

const Like = ({initialNumber} : Props): ReactElement => {
    // const [likeAmount,increase,] = useCounter({initialNumber:initialNumber});
    const [liked, toggle] = useToggle();
    return <button onClick={toggle} className={`Button ${liked ? "like-button-on" : "like-button-off"}`}>likes:{(initialNumber + (liked ? 1 : 0) )}</button>
}

export default Like;