import React from 'react';
import './work.css'



const Work = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <h1 className="headtext__cormorant">Work Experience</h1>
     
    </div>
    <div className="app__newsletter-input">
    <p className="p__opensans">Enter previous work experience</p>
      <input type="text" placeholder="Company name" />
      
      <p className="p__opensans">Enter duration</p>
      <input type="text" placeholder="Years" />
      
      
      {/* <button type="button" className="custom__button">Subscribe</button> */}
    </div>
  </div>
);

export default Work;