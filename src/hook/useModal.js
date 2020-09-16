/* eslint-disable */

import {useState} from 'react';

const useModal = (view = false) => {
    const [isDisplay,setDisplay] = useState(view);

    const display = () => {
        setDisplay(d => !d)
    }

    return [isDisplay,display];

}

export default useModal;