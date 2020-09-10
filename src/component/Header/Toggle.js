/* eslint-disable */

import React from 'react';

const Toggle = ({collapse}) => {
    return <div className="navigation-toggle">
        <button className="btn-theme btn-dark btn-radius nav-dropdown" data-target="#navigation-collapse" onClick={collapse}>
            <i className="fas fa-bars"></i>
        </button>
    </div>
}

export default Toggle;