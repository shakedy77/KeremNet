import React, { ReactElement, useCallback, useState } from "react";
import TextBoxInput from "../../../TextBoxInput/TextBoxInput";
import LoadedPosts from "../../../LoadedPosts/LoadedPosts";

import './PostPage.css'

const defaultpath : string= "/post"

const PostPage = () : ReactElement => {
    const [currentPath, setCurrentPath] = useState<string>(defaultpath)
    const onButtonClick = useCallback((input : string) => {
        setCurrentPath(defaultpath + `/${input}`);
    },[])
    return <div>
        <TextBoxInput title="enter a name to search" onButtonClick={onButtonClick}></TextBoxInput>
        <div className="post-list">
            <LoadedPosts args={currentPath}></LoadedPosts>
        </div>
        
    </div>
}

export default PostPage;