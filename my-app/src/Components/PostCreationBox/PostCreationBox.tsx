import React, { ReactElement } from "react";
import PostModel from "../../Models/PostModel/PostModel";

interface Props{
    func : (model: PostModel) => void;
}


const PostCreationBox = ({func}:Props): ReactElement => {
    return <div>
        input 
    </div>;

}

export default PostCreationBox;