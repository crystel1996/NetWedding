/* eslint-disable */
import React from 'react';

const Logo = ({type,text}) => {
    
    let value = type == 'picture' ? <img src={text} alt="Net Wedding" /> : <a href="/">{text}</a>
    
    return <div className="navigation-logo">
        {value}
    </div>
}

export default Logo;