import React, { ReactElement, useState } from 'react';


interface Props{
    title : string
    inputValue : string
    setValue : React.Dispatch<React.SetStateAction<string>>
}

const InputBox = ({title, inputValue, setValue} : Props) : ReactElement => {

     function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      setValue(event.target.value);
    }

    return <input type="text" value={inputValue} onChange={handleChange} placeholder={title}></input>;
}

export default InputBox;