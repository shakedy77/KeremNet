import  { useState } from "react";


// interface Props{
//     publisherName : string
//     content : string
//     likeAmount : Number
// }

function useList<T>(initialList : T[]=[]): [T[] ,(item: T)=>void]{
    const [listValue, setListValue] = useState<T[]>(initialList);
    function AddItem(item : T){
        listValue.push(item);
        setListValue([...listValue]);
    }

    return [listValue, AddItem];
}

export default useList;