// @flow
import React from "react";
import { connect } from "react-redux";
import ListIcon from "assets/ListIcon";
import GridIcon from "assets/GridIcon";
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

export default DisplayToggle;
