import React, { useState } from 'react';

const Contact =()=>{
const[data, setData] = useState({
  fname:'',
  mno:'',
  email:'',
  msg:'',
});

const InputEvent =(event)=>{
  const {name, value} = event.target;
  setData((preVal)=>{
    return {  ...preVal,
              [name]: value,
            };
  });
};
const formSubmit =(e)=>{
  e.preventDefault();
  alert(`hey i am ${data.fname} my phone is ${data.mno} and my email is ${data.email} and, i want to say that ${data.msg}`);
};
  return(
  <>
    <div className='my-5'>
      <h1 className='text-center'> Contact Us</h1>
    </div>
    <div className='container contact_div'>
      <div className='row'>
        <div className='col-md-6 col-10 mx-auto'> 
            <form onSubmit={formSubmit}>
                
                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" value={data.fname} onChange={InputEvent} placeholder="Enter Your Name"/>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Phone</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" name="mno" value={data.mno} onChange={InputEvent} placeholder="Mobile Number"/>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    
  </>
  );
};

export default Contact;