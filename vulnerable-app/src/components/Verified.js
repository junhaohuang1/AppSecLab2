import React from 'react';
import { Link } from 'react-router-dom';

function Verified() {
  return (
    <div>
      <h1>You've successfully logged in</h1>
      <Link to='/'>Go Back To Sign-up page</Link>
    </div>
  );
}

export default Verified;