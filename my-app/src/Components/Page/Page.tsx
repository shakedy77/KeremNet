import React, { ReactElement } from "react";
import Post from "../Post/Post";
import JsonData from "../../Hooks/jsonServerHook/usePostsJsonServer";
import PostModel from "../../Models/PostModel/PostModel";


const Page = ():ReactElement =>{
    const posts = JsonData();
    return <div>
        {(posts as PostModel[]).map((post) => {
            return <Post postModel={{
                publisherName:post.publisherName, 
                publishDate:(new Date(post.publishDate)), 
                content:post.content, 
                comments:post.comments, 
                likeAmount:post.likeAmount}}></Post>
        })}

    </div>
}

export default Page;