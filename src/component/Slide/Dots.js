/* eslint-disable */

import React from 'react';

const Dot = ({active}) => {
    let dotActive = active === true ? 'active' : '';
    return <span className={"dot "+dotActive}></span>
}

const Dots = ({slides, activeIndex}) => {
    let item = [];
    let i = 0;
    slides.forEach(() => {
        item.push(<Dot key={i} active={activeIndex === i} />)
        i++;
    });
    return <div className="dot-slide">
        {item}
    </div>
}

export default Dots;