/* eslint-disable */

import React from 'react';

import {TESTIMONIAL} from './../../data/data';

const TestimonialItem = ({content}) => {
    return <div className="testimonial-item">
        <img src={require('./../../images/'+content.picture)} alt={content.name} />
        <h4>{content.name}</h4>
        <p>{content.content}</p>
    </div>
}

const Testimonial = () => {
    let item = [];

    TESTIMONIAL.forEach(element => {
        item.push(<TestimonialItem key={element.key} content={element} />)
    });

    return <div className="testimonial-content">
            {item}        
    </div> 
}

export default Testimonial;