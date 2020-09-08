/* eslin-disable */

import React from 'react';
import {ContextSection} from './../../context/Context';

const Section = ({title,className,children}) => {
    return <ContextSection.Provider>
      <section className={className}>
        <div className="section-title ">
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        {children}
      </section>
    </ContextSection.Provider>
}

export default Section;