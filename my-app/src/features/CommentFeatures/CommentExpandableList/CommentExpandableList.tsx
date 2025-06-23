import React, { ReactElement, useState} from "react";
import InputBox from "../../InputBox/InputBox";
import Comment from "../Comment/Comment";
import CommentList from "../CommentList/CommentList";
import './CommentExpandableList.css'




const CommentExpandableList = (): ReactElement => {
    const [inputValue, setInputValue] = useState<string>('');
    const [listValue, setListValue] = useState<ReactElement[]>([]);
    const AddItem = (): void =>{
        listValue.push(<Comment publisherName="current_user"content={inputValue}></Comment>);
        setListValue([...listValue]);
    }


    return <div className="CommentExpandableList">
        <InputBox title="comment:" inputValue={inputValue} setValue={setInputValue}></InputBox>
        <button onClick={AddItem}>comment</button>
        <CommentList items={listValue}></CommentList>
        
    </div>
}

export default CommentExpandableList