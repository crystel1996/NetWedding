/* eslint-disable */
import React from 'react';

import useResize from './../../hook/useResize';

const Menu = ({items,isCollapsed,collapse}) => {
    const width = useResize(window.innerWidth);
    let isCollapse = 'nav-collapse';
    let styleWidth = '';
    let item = [];

    items.forEach(element => {
        item.push(<li key={element.link}>
            <a href={element.link} onClick={collapse} >{element.text}</a>
        </li>)
    });

    if(isCollapsed && width < 992) {
        isCollapse = '';
        styleWidth = '100%';
    } 
    
    return <div className={isCollapse+" navigation-dropdown-content"} id="navigation-collapse" style={{width:styleWidth}}>
                <button className="nav-dropdown-close" onClick={collapse}>&times;</button>
                <div className="navigation-menu">
                    <ul>
                        {item}
                    </ul>
                </div>
            </div>
}

export default Menu;