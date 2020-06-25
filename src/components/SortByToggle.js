// @flow
import React from "react";
import { connect } from "react-redux";
import SortByAlphaIcon from "assets/AlphaIcon";
import TagIcon from "assets/TagIcon";
import styles from "styles/mydeckslist.module.css";

const sortByToggleMapStateToProps = (state, ownProps) => ({
  sortByType: state.myDecks.sortBy,
});

const sortByToggleMapDispatchToProps = (dispatch) => ({
  sortByAlphanum: () => {
    dispatch({ type: "SORT_ALPHANUM" });
  },
  sortByTag: () => {
    dispatch({ type: "SORT_TAG" });
  },
});

const SortByToggleComponent = (props) => {
  const sortByType = props.sortByType;
  return (
    <div className={styles.toggle}>
      <SortByAlphaIcon
        inverted={sortByType === "alphanum"}
        onClick={props.sortByAlphanum}/>
      <TagIcon
        style={{width: 24, padding: 8}}
        inverted={sortByType === "tag"}
          onClick={props.sortByTag}/>
    </div>
  );
};

const SortByToggle = connect(
  sortByToggleMapStateToProps,
  sortByToggleMapDispatchToProps,
)(SortByToggleComponent);

export default SortByToggle;
