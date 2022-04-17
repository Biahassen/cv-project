import React from 'react';
import './education.css'



const Education = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <h1 className="headtext__cormorant">Education</h1>
    </div>
    <div className="app__newsletter-input">
      
    <p className="p__opensans">Elementary school</p>
      <input type="email" placeholder="Enter where you attended" />
      <p className="p__opensans">Primary school</p>
      <input type="email" placeholder="Enter where you attended" />
      <p className="p__opensans">Highschool</p>
      <input type="email" placeholder="Enter where you attended" />
      <p className="p__opensans">Higher Education</p>
      <input type="email" placeholder="Enter where you attended" />
    </div>
  </div>
);

export default Education;