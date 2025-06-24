import React, { ReactElement } from "react";
import Post from "../Post/Post";

const Page = ():ReactElement =>{
    const current_date = new Date() 
    return <div>
        <Post publisherName={"user"} content={"test test test test test"} publishDate={current_date} likeAmount={10} comments={[{publisherName:'keremist',content:"wow!",likeAmount:3}]}></Post>
    </div>
}

export default Page;