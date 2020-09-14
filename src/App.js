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

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';

const App = () => {
  return <React.Fragment>
    <Router>
        <Navigation />  

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Section title = "About" className="dark-bg">
              <About translate="true" />
            </Section>
          </Route>
          <Route path="/gallery">
            <Section title = "Gallery" className="white-bg">
              <Gallery translate="true" />
            </Section>
          </Route>
          <Route path="/testimonial">
            <Section title = "Testimonial" className="theme-bg">
              <Testimonial translate="true" />
            </Section>
          </Route>
          <Route path="/contact">
            <Section title = "Contact" className="white-bg">
              <Contact translate="true" />
            </Section>
          </Route>
        </Switch>

        <Footer />

    </Router>

  </React.Fragment>
}


export default App;
