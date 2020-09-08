/* eslint-disable */

import React from 'react';



const SliderContent = ({translate,transition,width,children}) => {
    let style = {   
        transform: 'translateX(-'+translate+'px)',
        transition:'transform ease-out '+transition+'s',
        height:'100%',
        width: width+'px',
        display:'flex'
    }
    return <div className="slide-content" style={{...style}}>
        {children}
    </div>

}


export default SliderContent;