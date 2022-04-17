import React from 'react';
import './personaldata.css';



const Personaldata = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <h1 className="headtext__cormorant">Personal Data</h1>
      
    </div>
    <div className="app__newsletter-input">
    <p className="p__opensans">First name</p>
      <input type="email" placeholder="Rabia" />
      <p className="p__opensans">Last name</p>
      <input type="email" placeholder="Hassen" />
      <p className="p__opensans">Age</p>
      <input type="email" placeholder="21" />
      <p className="p__opensans">Sex</p>
      <input type="email" placeholder="female" />
      <p className="p__opensans">Address</p>
      <input type="email" placeholder="Addis Ababa" />
      <p className="p__opensans">Email</p>
      <input type="email" placeholder="rabhas4426@gmail.com" />
      <p className="p__opensans">Phone number</p>
      <input type="email" placeholder="0944193139" />
    </div>
  </div>
);

export default Personaldata;
