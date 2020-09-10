/* eslint-disable */

import React from 'react';
import { ContextForm } from '../../context/Context';


const FormContact = ({children}) => {
    return <ContextForm.Provider>
        <form action="#" autoComplete="off">
            {children}
        </form>
    </ContextForm.Provider>
}

const InputField = ({type,name,value = null}) => {
    let label = type == 'hidden' ? '' : <label htmlFor={name}>{value}</label>

    return <div className="form-group">
        {label}
        <input type={type} name={name} id={name} />
    </div>
}

const TextareaField = ({name,value}) => {
    return <div className="form-group">
        <label htmlFor={name}>{value}</label>
        <textarea name={name} id={name} cols="30" rows="10" ></textarea>
    </div>
}

const ButtonField = ({type,value,className}) => {
    return <div className="form-group">
        <button type={type} className={className}>{value}</button>
    </div>
}

export { FormContact, InputField, TextareaField, ButtonField };