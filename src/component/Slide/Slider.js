/* eslint-disable */
import React, { useEffect, useState} from 'react';

import { useRef } from 'react';

import SliderContent from './SlideContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';
import useResize from '../../hook/useResize';

const Slider = ({slides,autoplay}) => {
    const getWidth = useResize(window.innerWidth);

    const autoPlayRef = useRef();

    const [state, setState] = useState({
        activeIndex:0,
        translate:0,
        transition:0.45
    });

    const {translate, transition, activeIndex} = state;

    let item = [];

    const nextSlide = (e) => {
        if(e !== undefined) {
            e.preventDefault();
        }
        if(activeIndex === slides.length - 1) {
            return setState({
                ...state,
                translate:0,
                activeIndex:0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth
        })
    }

    const prevSlide = (e) => {
        if(e !== undefined) {
            e.preventDefault();
        }
        e.preventDefault();
        if(activeIndex === 0) {
            return setState({
                ...state,
                translate: (slides.length - 1) * getWidth,
                activeIndex: slides.length - 1
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth
        })
    }

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current();
        }

        const interval = setInterval(play, autoplay * 1000)
        return () => clearInterval(interval)
    },[]);

    slides.forEach(element => {
        item.push(<Slide content={element} key={element.key} />)
    });

    return <div className="slideshow-container">
        <SliderContent translate={translate} transition={transition} width={getWidth * slides.length}>
            {item}
        </SliderContent>
        <Arrow direction="left" handleClick={prevSlide} />
        <Arrow direction="right"handleClick={nextSlide} />
        <Dots slides={slides} activeIndex={activeIndex} />
    </div>
}

export {Slider};