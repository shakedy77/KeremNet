import React, { ReactElement, useState } from "react";
import InputBox from "../InputBox/InputBox";
import Post from "../Post/Post";

const Page = ():ReactElement =>{
    const [inputValue, setInputValue] = useState<string>('');
    return <div>
        <InputBox title="username:" inputValue={inputValue} setValue={setInputValue}></InputBox>
        <Post publisherName={inputValue} content={"test test test test test"}></Post>
    </div>
}

export default Page;