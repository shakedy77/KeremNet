import React, { ReactElement, useState } from "react";
import TextBoxInput from "../../../TextBoxInput/TextBoxInput";


import './PostPage.css'
import LoadedPosts from "../../../LoadedPosts/LoadedPosts";
const path : string= "http://localhost:3060/post"
const PostPage = () : ReactElement => {
    const [currentPath, setCurrentPath] = useState<string>(path)
    const func = (input : string) => {
        setCurrentPath(path + `/${input}`);
    }
    return <div>
        <TextBoxInput title="enter a name to search" func={func}></TextBoxInput>
        <div className="post-list">
            <LoadedPosts serverPath={currentPath}></LoadedPosts>
        </div>
        
    </div>
}

export default PostPage;