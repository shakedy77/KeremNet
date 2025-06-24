import { useState } from "react";

interface Props{
    initialNumber : Number
}

function useCounter({initialNumber} : Props) : 
[Number, ()=> void, () => void]{
    const [number, setnumber] = useState(0);
    const increase = () => {
        setnumber(num => num + 1)
    }

    const decrease = () => {
        setnumber(num => num - 1)
    }

    return [number,increase,decrease]
}

export default useCounter;

