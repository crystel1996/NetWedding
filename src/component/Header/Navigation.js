/* eslint-disable */
import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import Toggle from './Toggle';

import {MENU} from './../../data/data';

import useCollapse from './../../hook/useCollapse';

const Navigation = () => {
    const [isCollapsed,collapse] = useCollapse(false);
    return <div className="navigation">
        <Logo type="text" text="Net Wedding" />
        <Toggle collapse={collapse} />
        <Menu items={MENU} isCollapsed={isCollapsed} collapse={collapse} />
    </div>
}

export default Navigation;