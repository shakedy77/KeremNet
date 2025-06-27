import React, { ReactElement, useState } from "react";
import PostModel from "../../Models/PostModel/PostModel";

interface Props{
    func : (model: PostModel) => void;
}


const PostCreationBox = ({func}:Props): ReactElement => {
    
    const [publisherName, setPublisherName] = useState<string>('');
    function handlepublisherNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPublisherName(event.target.value);
    }
    
    const [content, setContent] = useState<string>('');
    function handlecontentChange(event: React.ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value);
    }

    async function postToServer() {
        console.log(JSON.stringify(new PostModel(publisherName,content,new Date(), 0, [])));
        const response = await fetch("http://localhost:3060/uploadPost", {
        method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
        body: JSON.stringify(new PostModel(publisherName,content,new Date(), 0, []))}
        
        );
        if (!response.ok) 
        { 
            console.error("Error");
            console.log(response.status)
        }   
    
    // else if (response.statusCode >= 400) {
    //     console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage);
    // }
    // else{
    //     onSuccess();
    // }
    }
    




    return <div>
        <input type="text" value={publisherName} onChange={handlepublisherNameChange} placeholder="your name:"></input>
        <input type="text" value={content} onChange={handlecontentChange} placeholder="content: "></input>
        <button onClick={postToServer}>post</button>
    </div>;

}

export default PostCreationBox;


