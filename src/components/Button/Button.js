import React from 'react';
import './style.scss'

const Button = ({label, onClick, disable=false}) => (
    <button className='button' disabled={disable} onClick={onClick}>
        {label}
    </button>
);


export default Button;
