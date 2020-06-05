// @flow
import React from "react";
import styles from "./App.css";
import Header from "./components/Header.js";
import MyDeckList, { MyDeckListHeader } from "./components/MyDeckList.js";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <MyDeckListHeader />
        <MyDeckList />
      </div>
    </div>
  );
}

export default App;
