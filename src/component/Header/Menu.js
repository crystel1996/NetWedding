/* eslint-disable */
import React from 'react';

const Menu = ({items}) => {

    let item = [];

    items.forEach(element => {
        item.push(<li key={element.link}>
            <a href={element.link} >{element.text}</a>
        </li>)
    });

    return <div className="navigation-menu">
        <ul>
            {item}
        </ul>
    </div>
}

export default Menu;