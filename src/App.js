/* eslint-disable */
import React from 'react';

import {ABSOLUTE_URL} from './data/data';

import Navigation from './component/Header/Navigation';
import About from './component/About/About';
import Gallery from './component/Gallery/Gallery';
import Testimonial from './component/Testimonial/Testimonial';
import Contact from './component/Contact/Contact';
import NotFound from './component/Error/NotFound';

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
          <Route exact path={ABSOLUTE_URL}>
            <Home />
          </Route>
          <Route path={ABSOLUTE_URL+"/about"}>
            <Section title = "About" className="dark-bg">
              <About translate="true" />
            </Section>
          </Route>
          <Route path={ABSOLUTE_URL+"/gallery"}>
            <Section title = "Gallery" className="white-bg">
              <Gallery translate="true" />
            </Section>
          </Route>
          <Route path={ABSOLUTE_URL+"/testimonial"}>
            <Section title = "Testimonial" className="theme-bg">
              <Testimonial translate="true" />
            </Section>
          </Route>
          <Route path={ABSOLUTE_URL+"/contact"}>
            <Section title = "Contact" className="white-bg">
              <Contact translate="true" />
            </Section>
          </Route>
          <Route path="*">
            <Section title="Page introuvable" className="dark-bg">
              <NotFound />
            </Section>
          </Route>
        </Switch>

        <Footer />

    </Router>

  </React.Fragment>
}


export default App;
