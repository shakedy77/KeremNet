import React, { ReactElement } from "react";
import Post from "../Post/Post";
import JsonData from "../../../data/json-server/json-server";


const Page = ():ReactElement =>{
    const posts = JsonData();
    console.log(posts);
    const current_date = new Date() 
    const dateTime = `${current_date.toDateString()} ${current_date.toLocaleTimeString()}`
    return <div>
        <Post publisherName={"user"} content={"test test test test test"} publishDate={dateTime} likeAmount={10} comments={[{publisherName:'keremist',content:"wow!",likeAmount:3}]}></Post>
        {/* {posts.map((post) => (
            <Post publisherName={post.publisherName}></Post>
        ))} */}
    </div>
}

export default Page;