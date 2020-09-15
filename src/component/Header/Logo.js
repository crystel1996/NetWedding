/* eslint-disable */
import React from 'react';

import {ABSOLUTE_URL} from './../../data/data';

const Logo = ({type,text}) => {
    
    let value = type == 'picture' ? <img src={text} alt="Net Wedding" /> : <a href={ABSOLUTE_URL}>{text}</a>
    
    return <div className="navigation-logo">
        {value}
    </div>
}

export default Logo;