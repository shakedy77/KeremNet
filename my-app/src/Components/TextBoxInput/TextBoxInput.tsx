import React, { ReactElement, useState} from 'react';


interface Props{
    title : string
    func : (input: string) => void;
}

const TextBoxInput = ({title,func} : Props) : ReactElement => {
    const [inputValue, setInputValue] = useState<string>('');
     function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      setInputValue(event.target.value);
    }

    return <div className='TextBoxInput'><input type="text" value={inputValue} onChange={handleChange} placeholder={title}></input><button onClick={() => func(inputValue)}>enter</button></div>;
}

export default TextBoxInput;