import { JSX, ReactElement } from "react";
import Post from "../Post/Post";
import useJsonData from "../../Hooks/jsonServerHook/useJsonServer";
import PostModel from "../../Models/PostModel/PostModel";

import './LoadedPosts.css'


const defaultServerPath = "http://localhost:3060";

interface Props{
    args : string;
}


const LoadedPosts = ({args} : Props = {args:""}):ReactElement =>{
    const posts : PostModel[] | undefined = useJsonData<PostModel>({path:(defaultServerPath + args)});
    let postElements : any = null;
    if (posts === undefined){
        postElements = "post is in loading!";
    }
    else{
        postElements = posts.map((post) => {
        return <Post postModel={{ 
            publisherName:post.publisherName,
            content:post.content,
            publishDate:(new Date(post.publishDate)),
            likeAmount:post.likeAmount,
            comments:post.comments} as PostModel}>
        </Post>
    });
    }
    
    return <div className="loaded-posts">
        {
            (posts !== undefined && posts.length === 0 ) ? "oops, no posts to see here!" : postElements
        }
    </div>
}

export default LoadedPosts;