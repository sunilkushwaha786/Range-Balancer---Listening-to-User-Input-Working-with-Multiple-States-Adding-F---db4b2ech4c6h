import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [firstR, setFirstR] = useState(0);
  const [secRange, setSecRange] = useState(50);
  const [third, setThird] = useState(50);
  return (
    <div>
      <div id="max-sum-holder">
        Input max sum:-
        <input
          type={"number"}
          value={third}
          onChange={(e) => setThird(e.target.value)}
        ></input>
      </div>
      <div id="range-a-holder">
        <input
          type={"range"}
          value={firstR}
          onChange={(e) => setFirstR(e.target.value)}
          max={third - secRange}
        />
        <span id="range-a-value">{firstR}</span>
      </div>
      <div id="range-b-holder">
        <input
          type={"range"}
          value={secRange}
          onChange={(e) => setSecRange(e.target.value)}
          max={third - firstR}
        />
        <span id="range-b-value">{secRange}</span>
      </div>
      <div id="sum">
        {[firstR, secRange].map(Number).reduce((sum, cur) => sum + cur, 0)}
      </div>
    </div>
  );
};

export default App;
