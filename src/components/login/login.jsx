import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {

  const history = useHistory();

  const goToMaker = userId => {
    history.push({
      pathname: '/maker',
      state: {id: userId}, 
    });
  }

  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(data => goToMaker(data.user.uid));
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.uid);
    })
  })

  return (
    <div className={styles.background}>
      <section className={styles.container}>
        <Header />
        <section className={styles.logIn}>
          <h1 className={styles.title}>LogIn</h1>
          <ul>
            <li>
              <button onClick={onLogin} className={styles.loginButton}>
                Google
              </button>
            </li>
            <li>
              <button onClick={onLogin} className={styles.loginButton}>
                Github
              </button>
            </li>
          </ul>
        </section>
        <Footer />
      </section>
    </div>
  );
}

export default Login;