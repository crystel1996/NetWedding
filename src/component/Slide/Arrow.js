/* eslint-disable */

import React from 'react';

const Arrow = ({direction,handleClick}) => {
    let typeArrow = direction == "right" 
    ? {className:'next',cursor:<a href="#" onClick={handleClick}>&#10095;</a>} : {className:'prev',cursor:<a href="#" onClick={handleClick}>&#10094;</a>};
    return <div className={typeArrow.className}>
        {typeArrow.cursor}
    </div>
}

export default Arrow;