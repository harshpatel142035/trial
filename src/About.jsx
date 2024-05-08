import React from 'react';
import Common from './Common';
import Ab from "..//src/images/about.jpg";
import { NavLink } from 'react-router-dom';
const About =()=>{
  return(
  <>
    <Common 
    name={<h1>Welcome to <strong className='brand-name'>About Page</strong></h1>}
    btn ={<NavLink to="/contact" className=' btn-get-started '>Contact</NavLink>}
    img={Ab}
    />
  </>
  );
};

export default About;