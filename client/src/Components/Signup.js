import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {

function handleSubmit(){
    
}


  return (
    <>
      <div className='container'> 
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" name='name' value={crediantials.name} onChange={onChange}/>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={crediantials.email} onChange={onChange}/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={crediantials.password} onChange={onChange}/>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
        <input type="text" className="form-control" id="exampleInputPassword1" name='geolocation' value={crediantials.geolocation} onChange={onChange}/>
    </div>
  
    <button type="submit" className="btn btn-success">Submit</button>
    <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
    </form>

    </div>
    </>
  );
}
