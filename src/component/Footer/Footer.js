/* eslint-disable */

import React from 'react';

const Footer = () => {
    let date = new Date().getFullYear() == "2020" ? '' : ' - '+new Date().getFullYear();
    return <footer>
        <p>Copyright 2020 {date} - Harimanana Ratsimbazafy. All rights reserved.</p>    
    </footer>
}

export default Footer;