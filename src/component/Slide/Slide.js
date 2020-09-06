/* eslint-disable */
import React from 'react';

import {BannerAction} from './../../data/data';

const Slide = ({picture,caption,text,action}) => {
    return <div className="slide fade"> 
        <img src={picture} style={{widt:"100%"}}  alt="Image" />
        <div className="slide-caption">
            <h1>{caption}</h1>
            <p>{text}</p>
            <button className="btn btn-theme">{action}</button>
        </div>
    </div>
}

const SlideCallAction = () => {
    let item = [];
    BannerAction.forEach(element => {
        item.push(<Slide 
            picture={require("./../../images/"+element.picture)} 
            key={element.key} 
            caption={element.caption} text={element.text} action={element.action} />)
    });

    return <div className="slideshow-container">
        {item}    
    </div>
}

export {SlideCallAction};