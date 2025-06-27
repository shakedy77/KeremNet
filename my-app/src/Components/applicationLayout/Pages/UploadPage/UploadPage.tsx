import React, { ReactElement, useEffect, useState } from "react";
import PostCreationBox from "../../../PostCreationBox/PostCreationBox";

import './UploadPage.css';
import PostModel from "../../../../Models/PostModel/PostModel";

const UploadPage = (): ReactElement => {
    const [model, setModel] = useState<PostModel>();
    const func = (model : PostModel) => {
        setModel(model);
    }

    useEffect(() => {
        
    } ,[model])
    
    return <div>
        <PostCreationBox func={func}></PostCreationBox>
    </div>;
}

export default UploadPage;