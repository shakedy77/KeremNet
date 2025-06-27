import React, { ReactElement, useCallback, useState} from 'react';


interface Props{
    title : string
    onButtonClick : (input: string) => void;
}

const TextBoxInput = ({title,onButtonClick} : Props) : ReactElement => {
    const [inputValue, setInputValue] = useState<string>('');
    
    const Onclick = useCallback(() =>{
        onButtonClick(inputValue);
    },[inputValue, onButtonClick])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return <div className='TextBoxInput'>
        <input type="text" value={inputValue} onChange={handleChange} placeholder={title}></input>
        <button onClick={Onclick}>enter</button>
        </div>;
}

export default TextBoxInput;