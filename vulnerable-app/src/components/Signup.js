import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:4200';

function SignupForm(props) {
  const username = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/create-profile`, 
      {
        username: username.current.value,
        password: password.current.value
      }
    )
      .then((res) => {
        props.history.push('/login');
      })
      .catch((err) => {
        setError(true);
      });
  }

  return (
    <div>
      <h1>Sign-Up Here</h1>
      <form onSubmit={handleSubmit}>
        Username: <input 
          type='text' 
          ref={input => {
            username.current = input;
          }}/>
          <br></br>
        Password: <input 
          type='text'
          ref={input => {
            password.current = input;
          }}/>
          <br></br>
        <input type='submit' value='submit' />
      </form>
      <h2 
        style={{ color: "red" }}>
        {error ? 'Either the username already exists or your password should be 3 characters long' : ''}
      </h2>
      <Link to='/login'>If you already have a log-in, go here</Link>
    </div>
  );
}

export default SignupForm;