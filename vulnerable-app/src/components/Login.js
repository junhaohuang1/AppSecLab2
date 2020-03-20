import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

/*
* To do:
* Link up with database to check if we can log-in
*/

const API_URL = 'http://localhost:4200';

function LoginForm(props) {
  const username = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/verify-credentials`, 
      {
        username: username.current.value,
        password: password.current.value
      }
    )
      .then((res) => {
        setError(false);
        props.history.push('/verified');
      })
      .catch((err) => {
        setError(true);
      });
  }

  return (
    <div>
      <h1>Log-In Here</h1>
      <form onSubmit={handleSubmit}>
        username: 
        <input 
          type='text'
          ref={usernameInput => {
            username.current = usernameInput;
          }} />
        <br></br>
        password: 
        <input 
          type='text'
          ref={passwordInput => {
            password.current = passwordInput;
          }} />
        <br></br>
        <input type='submit' value='submit' />
      </form>
      <h2 
        style={{ color: "red" }}>
        {error ? 'Incorrect username or password' : ''}
      </h2>
      <Link to='/'>Go here if you don't have an account</Link>
    </div>
  );
}

export default LoginForm;