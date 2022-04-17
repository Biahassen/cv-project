import React from 'react';
import './education.css'



const Education = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <h1 className="headtext__cormorant">Education</h1>
    </div>
    <div className="app__newsletter-input">
      
    <p className="p__opensans">Elementary school</p>
      <input type="email" placeholder="Andelus 2002-2006" />
      <p className="p__opensans">Primary school</p>
      <input type="email" placeholder="Hilltops 2007-2012" />
      <p className="p__opensans">Highschool</p>
      <input type="email" placeholder="Spring of knowledge 2013-2018" />
      <p className="p__opensans">Higher Education</p>
      <input type="email" placeholder="AASTU 2018-2022" />
    </div>
  </div>
);

export default Education;
