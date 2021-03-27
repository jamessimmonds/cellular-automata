import randomStart from "./utils/random-start.js";
import Grid from './components/grid.js';
import { useState } from 'react';
import iteration from "./utils/rules.js";

function App() {

  const [rows, setRows] = useState(30);
  const [cols, setCols] = useState(30);
  const [proportion, setProportion] = useState(0.5);

  const [data, setData] = useState(randomStart(rows, cols, proportion));

  function handleRowsChange (e) {
    setRows(e.target.value);
    setData(randomStart(e.target.value, cols, proportion));
  }

  function handleColsChange (e) {
    setCols(e.target.value);
    setData(randomStart(rows, e.target.value, proportion));
  }

  function handleProportionChange (e) {
    setProportion(e.target.value);
    setData(randomStart(rows, cols, e.target.value));
  }

  function handleStartButtonPush (e) {
    setData(iteration(data));
  }

  return (
    <div>
      <h1>Game of life</h1>
      <p>See page on <a href="https://en.wikipedia.org/wiki/Cellular_automaton">Wikipedia</a></p>
      <form>
        <fieldset>
          <legend>Controls</legend>
          <ul>
            <li>
              <label htmlFor="rows">Rows:</label>
              <input type="text" id="rows" value={rows} onChange={handleRowsChange}></input>
            </li>
            <li>
              <label htmlFor="cols">Columns:</label>
              <input type="text" id="cols" value={cols} onChange={handleColsChange}></input>
            </li>
            <li>
              <label htmlFor="proportion">Proportion 'on':</label>
              <input type="text" id="proportion" value={proportion} onChange={handleProportionChange}></input>
            </li>
          </ul>
        </fieldset>
      </form>
      <form>
        <fieldset>
          <legend>Simulation</legend>
          <ul>
            <li>
              <button type="button" onClick={handleStartButtonPush}>Next frame</button>
            </li>
          </ul>
        </fieldset>
      </form>
      <Grid data={data} />
    </div>
  );
}

export default App;
