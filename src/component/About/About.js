/* eslint-disable */

import React, { useRef, useLayoutEffect } from 'react';

import {ABOUT} from './../../data/data';
import { Translate } from '../../Function/Translate';

const AboutItem = ({title,content}) => {

    const aboutRef = useRef(null);

    useLayoutEffect(() => {
        let item = aboutRef.current;
        let parent = item.parentElement;
        item.dataset.translate = "false";
        
        const onTranslateLeft = () => {
            if(item.dataset.translate === "false") {
                item.style.opacity = 0;
            }
            Translate(item,parent,'left');
        }
        window.addEventListener("scroll",onTranslateLeft);

        return () => {
            window.removeEventListener("scroll",onTranslateLeft);
        }

    },[])

    return <div className="about-item-content" ref={aboutRef} >
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
} 

const About = () => {
    let item = [];
    const aboutPictureRef = useRef(null);

    useLayoutEffect(() => {
        let picture = aboutPictureRef.current;
        let parent = picture.parentElement;
        picture.dataset.translate = "false";

        const onTranslateRight = () => {
            if(picture.dataset.translate === "false") {
                picture.style.opacity = 0;
            }
            Translate(picture,parent,'right');
        }

        window.addEventListener("scroll",onTranslateRight);

        return () => {
            window.removeEventListener("scroll",onTranslateRight);
        }

    },[]);

    ABOUT.forEach(element => {
        item.push(<AboutItem key={element.key} title={element.title} content={element.content} />)
    });

    return <div className="about-content">
        <div className="about-item">
            <img src={require("./../../images/author.jpg")} alt="About" ref={aboutPictureRef} />            
        </div>
        <div className="about-item">
            {item}
        </div>
    </div>
}

export default About;