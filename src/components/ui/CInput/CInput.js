import React from 'react';
import cl from './CInput.module.css'
const CInput = (props) => {
    return (
        <input className={cl.input} {...props}/>
    );
};

export default CInput;