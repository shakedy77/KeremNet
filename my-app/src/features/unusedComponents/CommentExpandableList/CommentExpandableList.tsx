import  { ReactElement, useState} from "react";
import InputBox from "../../Components/InputBox/InputBox";
import CommentList from "../../Components/CommentComponents/CommentList/CommentList";
import useList from "../../Hooks/ListHook/useList";
import CommentProps from "../../Interfaces/CommentPropsInterface/CommentPropsInterface";

import './CommentExpandableList.css'



interface Props{
    initialComments : CommentProps[]
}


const CommentExpandableList = ({initialComments} : Props): ReactElement => {
    const [inputValue, setInputValue] = useState<string>('');
    // const [listValue, setListValue] = useState<ReactElement[]>([]);
    const [listValue, AddItem] = useList<CommentProps>(initialComments);
    // const AddItem = (): void =>{
    //     listValue.push(<Comment publisherName="current_user"content={inputValue}></Comment>);
    //     setListValue([...listValue]);
    // }


    return <div className="CommentExpandableList">
        <InputBox title="comment:" inputValue={inputValue} setValue={setInputValue}></InputBox>
        <button onClick={() => {
            // const publisherName : String = "user";
            // const content : String = inputValue;
            // const likeAmount : number = 0;
            // const item : commentProps = {publisherName,content,likeAmount};
            AddItem({publisherName:'',content:'',likeAmount:0});
        }}></button>
        <CommentList items={listValue}></CommentList>
    </div>
}

export default CommentExpandableList