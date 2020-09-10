/* eslint-disable */

import React from 'react';

import {GALLERY} from './../../data/data';

const GalleryItem = ({content}) => {
        return <img alt={content.alt} src={require("./../../images/"+content.src)} />
};


const Galleries = () => {
    let item = [];
    let items = [];
    let ratio = parseInt(GALLERY.length / 2);
    let i = 1;
    
    GALLERY.forEach(el => {
        item.push(<GalleryItem key={el.key} content={el} />)
        
        if(i % ratio == 0 ) {
            items.push(<div className="gallery-item" key={i}>{item}</div>);
            item = [];
        }
        if((i > ratio) && ((GALLERY.length - i) < ratio) && (i % ratio == 1)) {
            items.push(<div className="gallery-item" key={i}>{item}</div>)
        }
        
        i++;
    });

    return <div className="gallery-content">
            {items}
    </div> 
}

export default Galleries;