import React, { useState } from 'react';
import './LoginForm.css';

export const LoginForm = function ({ onSignIn, onSignUp }) {
  const [inputEmail, setInputEmail] = useState('hello@user.com');
  const [inputPass, setInputPass] = useState('Gfhjkm_123');

  return (
    <div className="container sign-up-screen">
      <form className="" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            value={inputEmail}
            onChange={(event) => {
              event.persist();
              setInputEmail(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPass">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPass"
            value={inputPass}
            onChange={(event) => {
              event.persist();
              setInputPass(event.target.value);
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onSignIn({ email: inputEmail, password: inputPass })}
        >
          Sign In
        </button>
        <button
          type="button"
          className="btn btn-warning ml-2"
          onClick={() => onSignUp({ email: inputEmail, password: inputPass })}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};