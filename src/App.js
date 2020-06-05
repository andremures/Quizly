// @flow
import React from "react";
import styles from "./App.css";
import Header from "./components/Header.js";
import MyDeckList from "./components/MyDeckList.js"

function App() {
  return (
    <div>
    <div className="App">
      <Header />

      <MyDeckList />
    </div>
    </div>
  );
}

export default App;
