/* eslint-disable */

import React from 'react';

import {ABOUT} from './../../data/data';

const AboutItem = ({title,content}) => {
    return <div className="about-item-content">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
} 

const About = () => {
    let item = [];

    ABOUT.forEach(element => {
        item.push(<AboutItem key={element.key} title={element.title} content={element.content} />)
    });

    return <div className="about-content">
        <div className="about-item">
            <img src={require("./../../images/author.jpg")} alt="About" />            
        </div>
        <div className="about-item">
            {item}
        </div>
    </div>
}

export default About;