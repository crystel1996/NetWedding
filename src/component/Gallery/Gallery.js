/* eslint-disable */

import React, { useLayoutEffect, useRef } from 'react';

import {GALLERY} from './../../data/data';
import { Translate } from '../../Function/Translate';
import useModal from '../../hook/useModal';
import ModalImage from '../Modal/Image';

const GalleryItem = ({content,translate}) => {
    const galleryPictureRef = useRef(null);

    const [isModal,setModal] = useModal(false);

    useLayoutEffect(() => {
        let picture = galleryPictureRef.current;
        picture.dataset.translate = translate;

        const onTranslateTop = () => {
            if(picture.dataset.translate == "false") {
                picture.style.opacity = 0;
            }

            Translate(picture,picture,'top');
        }

        window.addEventListener("scroll",onTranslateTop);

        return () => {
            window.removeEventListener("scroll",onTranslateTop);
        }
        
    },[]); 

    return <React.Fragment> 
        <img alt={content.alt} className="hand " src={require("./../../images/"+content.src)} ref={galleryPictureRef} onClick={setModal} />
        {isModal && <ModalImage content={require("./../../images/"+content.src)} isDisplay={isModal} handleDisplay={setModal} />}
    </React.Fragment>
};


const Gallery = ({translate}) => {
    let item = [];
    let items = [];
    let ratio = parseInt(GALLERY.length / 2);
    let i = 1;

    GALLERY.forEach(el => {
        item.push(<GalleryItem key={el.key} content={el} translate={translate} />)
        
        if(i % ratio == 0 ) {
            items.push(<div className="gallery-item" key={i}>{item}</div>);
            item = [];
        }
        if((i > ratio) && ((GALLERY.length - i) < ratio) && (i % ratio == 1)) {
            items.push(<div className="gallery-item" key={i}>{item}</div>)
        }
        
        i++;
    });

    return <div className="gallery-content">
            {items}
    </div> 
}

export default Gallery;