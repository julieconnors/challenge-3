import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

function App() {
  const [name, setName] = useState(() => "");
  const [age, setAge] = useState(() => 0);

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      <div className="input-display">
        <p>Display Name: {name}</p>
        <p>Display Age: {age}</p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input
            onChange={(event) => setName(event.target.value)}
            className="input"
            type="text"
            placeholder="William"
          />
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input
            onChange={(event) => setAge(event.target.value)}
            className="input"
            type="number"
            placeholder="38"
          />
        </div>
      </div>
      <ScotchInfoBar seriesNumber="3" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
