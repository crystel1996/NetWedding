/* eslint-disable */
import React from 'react';

import Logo from './Logo';
import Menu from './Menu';

import {MENU} from './../../data/data';

const Navigation = () => {
    return <div className="navigation">
        <Logo type="text" text="Net Wedding" />
        <Menu items={MENU} />
    </div>
}

export default Navigation;