// @flow

// import {combineReducers} from "redux";

const initialState = {
  activeUser: {
    username: "Andreea",
  },
  myDecks: {
    display: "list",
    sortBy: "alphanum",
  },
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_GRID":
      return {
        ...state,
        myDecks: {
          ...state.myDecks,
          display: "grid",
        }
      };
    case "DISPLAY_LIST":
      return {
        ...state,
        myDecks: {
          ...state.myDecks,
          display: "list",
        }
      };
    case "SORT_ALPHANUM":
      return {
        ...state,
        myDecks: {
          ...state.myDecks,
          sortBy: "alphanum"
        }
      };
    case "SORT_TAG":
      return {
        ...state,
        myDecks: {
          ...state.myDecks,
          sortBy: "tag"
        }
      };
    default:
      return state;
  }
}

export default rootReducer;
