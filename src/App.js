import React, { useState } from "react";
import { Display } from "./Components/Display";
import { Controls } from "./Components/Controls";
import "./App.css";

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hits, setHits] = useState(0);

  const scoreStrike = () => {
    if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };
  const scoreBalls = () => {
    if (balls === 3) {
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };
  const scoreFouls = () => {
    if (strikes !== 2) {
      setStrikes(strikes + 1);
    }
  };
  const scoreHits = () => {
    setStrikes(0);
    setHits(0);
  };
  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} />
      <Controls
        strike={scoreStrike}
        ball={scoreBalls}
        foul={scoreFouls}
        hit={scoreHits}
      />
    </div>
  );
}

export default App;
