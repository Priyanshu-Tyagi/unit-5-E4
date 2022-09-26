import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  return (
    <div className="App">
      <Clock />
      <List1 initialArray={[1, 2, 3]} />
      <List2 initialArray={[4, 5]} />
    </div>
  );
}

export default App;
