/* eslint-disable */

import React from 'react';

import CallToAction from './../Action/Call-to-action';
import About from './../About/About';
import Gallery from './../Gallery/Gallery';
import Testimonial from './../Testimonial/Testimonial';
import Contact from './../Contact/Contact';

import Section from './../Section/Section';

const Home = () => {
    return <React.Fragment> 
        <CallToAction />
        <Section title = "About" className="dark-bg">
            <About translate="false" />
        </Section>
        <Section title = "Gallery" className="white-bg">
            <Gallery translate="false" />
        </Section>
        <Section title = "Testimonial" className="theme-bg">
            <Testimonial translate="false" />
        </Section>
        <Section title = "Contact" className="white-bg">
            <Contact translate="false" />
        </Section>
    </React.Fragment>
}

export default Home;