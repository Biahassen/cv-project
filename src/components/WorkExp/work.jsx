import React from 'react';
import './work.css'



const Work = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <h1 className="headtext__cormorant">Work Experience</h1>
     
    </div>
    <div className="app__newsletter-input">
    <p className="p__opensans">Company name</p>
      <input type="text" placeholder="Unilever" />
      <p className="p__opensans">Position</p>
      <input type="text" placeholder="Volunteer trainer" />
      <p className="p__opensans">Tasks</p>
      <input type="text" placeholder="train students about oral health" />
      <p className="p__opensans">Duration</p>
      <input type="text" placeholder="2 weeks" />
      
    </div>
  </div>
);

export default Work;
