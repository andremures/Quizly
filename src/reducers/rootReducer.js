// @flow

// import {combineReducers} from "redux";
import type { State } from "types/states";
import type { Action } from "actions";

const initialState: State = {
  activeUser: {
    username: "Andreea",
  },
  myDecks: {
    display: "list",
    sortBy: "tag",
    filter: "default",
  },
};

const rootReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "DISPLAY_GRID":
      return {
        ...state,
        myDecks: {
          ...state.myDecks,
          display: "grid",
        },
      };
    case "DISPLAY_LIST":
      return {
        ...state,
        myDecks: {
          ...state.myDecks,
          display: "list",
        },
      };
    case "SORT_ALPHANUM":
      return {
        ...state,
        myDecks: {
          ...state.myDecks,
          sortBy: "alphanum",
        },
      };
    case "SORT_TAG":
      return {
        ...state,
        myDecks: {
          ...state.myDecks,
          sortBy: "tag",
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
