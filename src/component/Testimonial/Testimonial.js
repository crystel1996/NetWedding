/* eslint-disable */

import React, { useRef, useLayoutEffect } from 'react';

import {TESTIMONIAL} from './../../data/data';
import { Translate } from '../../Function/Translate';

const TestimonialItem = ({content,translate}) => {
    
    const testimonialRef = useRef(null);
    
    useLayoutEffect(() => {
        let text = testimonialRef.current;
        let parent = text.parentElement;
        
        text.dataset.translate = translate;

        const onTranslateTop = () => {
            if(text.dataset.translate == "false") {
                text.style.opacity = 0;
            }
            Translate(text,parent,"right");
        }

        window.addEventListener("scroll",onTranslateTop);

        return () => {
            window.removeEventListener("scroll",onTranslateTop);
        }

    },[]);

    return <div className="testimonial-item" ref={testimonialRef}>
        <img src={require('./../../images/'+content.picture)} alt={content.name} />
        <h4>{content.name}</h4>
        <p>{content.content}</p>
    </div> 
}

const Testimonial = ({translate}) => {
    let item = [];

    TESTIMONIAL.forEach(element => {
        item.push(<TestimonialItem key={element.key} content={element} translate={translate} />)
    });

    return <div className="testimonial-content">
            {item}        
    </div> 
}

export default Testimonial;