import { ReactElement } from "react";
import Post from "../Post/Post";
import useJsonData from "../../Hooks/jsonServerHook/useJsonServer";
import PostModel from "../../Models/PostModel/PostModel";

import './LoadedPosts.css'

interface Props{
    serverPath : string;
}


const LoadedPosts = ({serverPath} : Props):ReactElement =>{
    const posts : PostModel[] = useJsonData<PostModel>({path:serverPath});

    return <div className="loaded-posts">
        {posts.map((post) => {
            return <Post postModel={{ 
             publisherName:post.publisherName,
             content:post.content,
             publishDate:(new Date(post.publishDate)),
             likeAmount:post.likeAmount,
             comments:post.comments} as PostModel}>
            </Post>
        })}
    </div>
}

export default LoadedPosts;