import React from 'react';
import styles from '../styles/header.module.css';

const isCurrent = (link) => {
  return true;
  // return window.location.href.contains(link);
}

const Header = () => {
  return (
    <div className={styles.container}>
      <a href="#home" className={styles.logo} >Quizly</a>
      <div className={styles.containerRight}>
        <a href="#mydecks" className={isCurrent("#mydecks") ? styles.currentpage : ""}>My Decks</a>
        <a href="#account" className={isCurrent("#account") ? styles.currentpage : ""}>Account</a>
        <a href="#user">User</a>
      </div>
    </div>
  );
}

export default Header;
