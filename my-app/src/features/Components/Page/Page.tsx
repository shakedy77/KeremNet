import React, { ReactElement } from "react";
import Post from "../Post/Post";
import JsonData from "../../../data/json-server/json-server";
import PostModel from "../../Models/PostModel/PostModel";


const Page = ():ReactElement =>{
    const posts = JsonData();
    // const current_date = new Date() 
    return <div>
        {/* <Post publisherName={"user"} content={"test test test test test"} publishDate={current_date} likeAmount={10} comments={[{publisherName:'keremist',content:"wow!",likeAmount:3}]}></Post> */}
        {(posts as PostModel[]).map((post) => {
            return <Post publisherName={post.publisherName} 
            publishDate={new Date(post.publishDate)} 
            content={post.content} 
            comments={post.comments} 
            likeAmount={post.likeAmount}></Post>
        })}
    </div>
}

export default Page;