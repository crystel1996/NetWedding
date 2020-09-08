/* eslint-disable */
import React from 'react';

import {Slider} from './../Slide/Slider';
import { BannerAction } from '../../data/data';

const CallToAction = () => {
    return <div className="call-to-action">
        <Slider slides={BannerAction} autoplay={3} />
    </div>
}

export default CallToAction;