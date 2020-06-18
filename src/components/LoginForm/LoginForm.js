import React, { useState } from 'react';
import './LoginForm.scss';

export const LoginForm = function ({ onSignIn, onSignUp }) {
  const [inputEmail, setInputEmail] = useState('qqhello@user.com');
  const [inputPass, setInputPass] = useState('Gfhjkm_123');

  return (
    <div className="container sign-up-screen">
      <form className="" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="inputEmail">Эл. Почта</label>
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
          <label htmlFor="inputPass">Пароль</label>
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
          className="btn button__sign-in"
          onClick={() => onSignIn({ email: inputEmail, password: inputPass })}
        >
          Войти
        </button>
        <button
          type="button"
          className="btn ml-2 button__sign-up"
          onClick={() => onSignUp({ email: inputEmail, password: inputPass })}
        >
          Регистрация
        </button>
      </form>
    </div>
  );
};
