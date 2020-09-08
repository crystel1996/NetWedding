/* eslint-disable */

import React from 'react';

const Slide = ({content}) => {
    
    let style = {
        height:'100%',
        width:'100%',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundImage:'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('+require('./../../images/'+content.picture)+')',
        position:'relative'
    };
    
    return <div className="slide fade" style={{...style}}>
        <div className="slide-caption">
            <h1>{content.caption}</h1>
            <p>{content.text}</p>
            <button>{content.action}</button>
        </div>
    </div>
}

export default Slide;