import React from 'react';
import './personaldata.css';



const Personaldata = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <h1 className="headtext__cormorant">Personal Data</h1>
      
    </div>
    <div className="app__newsletter-input">
    <p className="p__opensans">First name</p>
      <input type="email" placeholder="Enter your first name" />
      <p className="p__opensans">Last name</p>
      <input type="email" placeholder="Enter your last name" />
      <p className="p__opensans">Age</p>
      <input type="email" placeholder="Enter your age" />
      <p className="p__opensans">Sex</p>
      <input type="email" placeholder="Enter your sex" />
      <p className="p__opensans">Address</p>
      <input type="email" placeholder="Enter your address" />
      <p className="p__opensans">Marital Status</p>
      <input type="email" placeholder="Enter your marital status" />
      <p className="p__opensans">Nationality</p>
      <input type="email" placeholder="Enter your nationality" />
    </div>
  </div>
);

export default Personaldata;