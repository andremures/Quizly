// @flow
import React from "react";
import { connect } from "react-redux";
import ListIcon from "assets/ListIcon";
import GridIcon from "assets/GridIcon";
import SortByAlphaIcon from "assets/SortByAlphaIcon";
import TagIcon from "assets/TagIcon";
import styles from "styles/mydeckslist.module.css";

const displayToggleMapStateToProps = (state, ownProps) => ({
  displayType: state.myDecks.display,
});

const displayToggleMapDispatchToProps = (dispatch) => ({
  displayGrid: () => {
    dispatch({ type: "DISPLAY_GRID" });
  },
  displayList: () => {
    dispatch({ type: "DISPLAY_LIST" });
  },
});

const DisplayToggleComponent = (props) => {
  const displayType = props.displayType;
  // Toggle button is inverted if selected
  return (
    <div className={styles.toggle}>
      <ListIcon
        style={{width: 36, padding: 2}}
        inverted={displayType === "list"}
        onClick={props.displayList}/>
      <GridIcon
        inverted={displayType === "grid"}
        onClick={props.displayGrid}/>
    </div>
  );
};

const DisplayToggle = connect(
  displayToggleMapStateToProps,
  displayToggleMapDispatchToProps
)(DisplayToggleComponent);

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
      <button className={styles.addDeck}>
        <span style={{position: "relative", top: 0.5, left: -2, fontSize: 30}}>+</span>
        <div style={{display: "inline-block", padding: "8px 0", }}>&nbsp;Deck</div>
      </button>
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
        <DeckItem key={n} number={n} />
      ))}
    </div>
  );
};

export default MyDeckList;
