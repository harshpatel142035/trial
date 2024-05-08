import React from 'react';
import web from "..//src/images/img1.jpg";
import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home =()=>{
  return(
  <>
    <Common 
    name={<h1>Grow your business with <strong className='brand-name'>Harsh Patel</strong></h1>}
    btn ={<NavLink to="/service" className=' btn-get-started '>Get Started</NavLink>}
    img = {web}
    />
  </>
  );
};

export default Home;