// @flow
import React from "react";
import styles from "../styles/mydeckslist.module.css";

const DeckItem = ({ number }) => {
  return (
    <div className={styles.deckItem}>
      <span>Title {number.toString()}</span>
    </div>
  );
};

const MyDeckList = () => {
  const deckList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className={styles.container}>
      {deckList.map((n) => (
        <DeckItem number={n} />
      ))}
    </div>
  );
};

export default MyDeckList;
