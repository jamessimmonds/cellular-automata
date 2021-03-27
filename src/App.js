import Grid from './components/grid.js';
import { useState } from 'react';

function App() {

  const [rows, setRows] = useState(30);
  const [cols, setCols] = useState(30);
  const [proportion, setProportion] = useState(0.5);

  return (
    <div>
      <h1>Game of life</h1>
      <p>See page on <a href="https://en.wikipedia.org/wiki/Cellular_automaton">Wikipedia</a></p>
      <form>
        <fieldset>
          <legend>Controls</legend>
          <ul>
            <li>
              <label for="rows">Rows:</label>
              <input type="text" id="rows" value={rows}></input>
            </li>
            <li>
              <label for="cols">Columns:</label>
              <input type="text" id="cols" value={cols}></input>
            </li>
            <li>
              <label for="proportion">Proportion 'on':</label>
              <input type="text" id="proportion" value={proportion}></input>
            </li>
            <li>
              <button type="submit">Update</button>
            </li>
          </ul>
        </fieldset>
      </form>
      <Grid rows={rows} cols={cols} proportion={proportion} />
    </div>
  );
}

export default App;
