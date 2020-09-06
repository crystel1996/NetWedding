/* eslint-disable */
import React from 'react';

import Navigation from './component/Header/Navigation';
import CallToAction from './component/Action/Call-to-action';
import About from './component/About/About';
import Gallery from './component/Gallery/Gallery';
import Testimonial from './component/Testimonial/Testimonial';
import Contact from './component/Contact/Contact';

import Section from './component/Section/Section';

import Footer from './component/Footer/Footer';

const App = () => {
  return <React.Fragment>
    <Navigation />
    <CallToAction />
    <Section title = "About">
      <About />
    </Section>
    <Section title = "Gallery">
      <Gallery />
    </Section>
    <Section title = "Testimonial">
      <Testimonial />
    </Section>
    <Section title = "Contact">
      <Contact />
    </Section>
    <Footer />
  </React.Fragment>
}


export default App;
