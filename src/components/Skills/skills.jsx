import React from 'react';
import './skills.css'



const Skills = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <h1 className="headtext__cormorant">Skills set</h1>
      
    </div>
    <div className="app__newsletter-input">
    <p className="p__opensans">Add ny skills you have</p>
      <input type="email" placeholder="Enter your skill" />
      <p className="p__opensans">Any additional skill</p>
      <input type="email" placeholder="Enter additional skill" />
    </div>
    <button type="submit" className="custom__button">Submit</button>
  </div>
);

export default Skills;