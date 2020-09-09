/* eslint-disable */
import React from 'react';

import Navigation from './component/Header/Navigation';
import CallToAction from './component/Action/Call-to-action';
import About from './component/About/About';
import Galleries from './component/Gallery/Gallery';
import Testimonial from './component/Testimonial/Testimonial';
import Contact from './component/Contact/Contact';

import Section from './component/Section/Section';

import Footer from './component/Footer/Footer';

const App = () => {
  return <React.Fragment>
    <Navigation />
    <CallToAction />
    <Section title = "About" className="dark-bg">
      <About />
    </Section>
    <Section title = "Gallery" className="white-bg">
      <Galleries />
    </Section>
    <Section title = "Testimonial" className="theme-bg">
      <Testimonial />
    </Section>
    <Section title = "Contact" className="white-bg">
      <Contact />
    </Section>
    <Footer />
  </React.Fragment>
}


export default App;
