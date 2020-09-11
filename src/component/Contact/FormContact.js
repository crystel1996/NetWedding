/* eslint-disable */

import React, { useState, useCallback, useMemo, useContext } from 'react';
import { ContextForm } from './../../context/Context';


const FormContact = ({children,defaultValue,onSubmit,describe}) => {
    
    const [data,setData] = useState(defaultValue);

    const change = useCallback((name,value) => {
        setData(d => Object.assign({},d,{[name]:value}))
    },[]);

    const value = useMemo(() => {
        return Object.assign({}, data, {change:change})
    },[data, change]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onSubmit(value);

    },[onSubmit,value]);

    return <ContextForm.Provider value={value}>
        <form action="#" autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-description">{describe}</label>
            </div>    
            {children}
        </form> 
    </ContextForm.Provider>
}

const InputField = ({type,name,value = null}) => {
    
    const data = useContext(ContextForm);

    let label = type == 'hidden' ? '' : <label htmlFor={name}>{value}</label>

    const handleChange = useCallback((e) => {
        data.change(e.target.name, e.target.value)
    },[data.change])

    return <div className="form-group">
        {label}
        <input type={type} name={name} id={name} onChange={handleChange} value={data[name] || ''} required />
    </div>
}

const TextareaField = ({name,value}) => {
    
    const data = useContext(ContextForm);

    const handleChange = useCallback((e) => {
        data.change(e.target.name, e.target.value)
    },[data.change]);
    
    return <div className="form-group">
        <label htmlFor={name}>{value}</label>
        <textarea name={name} id={name} cols="30" rows="10" onChange={handleChange} value={data[name] || ''} required ></textarea>
    </div>
}

const ButtonField = ({type,value,className}) => {
    return <div className="form-group">
        <button type={type} className={className}>{value}</button>
    </div>
}

export { FormContact, InputField, TextareaField, ButtonField };