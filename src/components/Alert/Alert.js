import React from 'react';
import './style.scss'

const Alert = ({isValid, text}) => (
    <div className='error'>
        {isValid ? text : ''}
    </div>
);

export default Alert;
