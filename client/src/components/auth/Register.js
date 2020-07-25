import React, { useState } from "react";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const {name,email,password,password2}
  return <div className='form-container'>
      <h1>User <span className='text-primary' >Register</span></h1>
      <form>
          <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' value={name} onChange={onChange}></input>
          </div>
          <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input type='email' name='email' value={email} onChange={onChange}></input>
          </div>
          <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' value={password} onChange={onChange}></input>
          </div>
          <div className='form-group'>
              <label htmlFor='password2'>Conform your Password</label>
              <input type='password' name='password2' value={password2} onChange={onChange}></input>
          </div>
          <input type='submit' value='Register' className='btn btn-primary btn-primary'></input>
      </form>
  </div>;
};
