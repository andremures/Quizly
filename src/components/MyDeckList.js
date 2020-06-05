// @flow
import React from "react";
import ListIcon from "assets/ListIcon";
import GridIcon from "assets/GridIcon";
import SortByAlphaIcon from "assets/SortByAlphaIcon";
import TagIcon from "assets/TagIcon";
import styles from "styles/mydeckslist.module.css";

const DisplayToggle = () => (
  <div className={styles.toggle}>
    <ListIcon style={{width: 36, padding: 2}}/>
    <GridIcon inverted/>
  </div>
);

const SortByToggle = () => (
  <div className={styles.toggle}>
    <SortByAlphaIcon inverted/>
    <TagIcon style={{width: 24, padding: 8}} />
  </div>
);

export const MyDeckListHeader = () => {
  return (
    <div className={styles.header}>
      <DisplayToggle />
      <SortByToggle />
      <input className={styles.searchbar}></input>
      <button className={styles.addDeck}>+ Deck</button>
    </div>
  );
};

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
