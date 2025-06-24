import React, { ReactElement, useState } from "react";
import InputBox from "../InputBox/InputBox";
import Post from "../Post/Post";

const Page = ():ReactElement =>{
    const [inputValue, setInputValue] = useState<string>('');
    const current_date = new Date() 
    const dateTime = `${current_date.toDateString()} ${current_date.toLocaleTimeString()}`
    return <div>
        <InputBox title="username:" inputValue={inputValue} setValue={setInputValue}></InputBox>
        <Post publisherName={inputValue} content={"test test test test test"} publishDate={dateTime} likeAmount={10} comments={[{publisherName:'keremist',content:"wow!",likeAmount:3}]}></Post>
    </div>
}

export default Page;