/* eslint-disable */

import React from 'react';

const ModalImage = ({isDisplay,handleDisplay,content}) => {
    let display = isDisplay == false ? "none" : "block";
    return <div className="modal-image" id="modalImage" style={{display:display}}>
        <span className="close" onClick={handleDisplay}>&times;</span>
        <img className="modal-content" src={content} alt="Modal" />
    </div>
}

export default ModalImage;