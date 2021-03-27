import Grid from './components/grid.js';
import { useState } from 'react';

function App() {

  const [rows, setRows] = useState(30);
  const [cols, setCols] = useState(30);
  const [proportion, setProportion] = useState(0.5);

  function handleSubmit (e) {

  }

  function handleRowsChange (e) {
    setRows(e.target.value);
  }

  function handleColsChange (e) {
    setCols(e.target.value);
  }

  function handleProportionChange (e) {
    setProportion(e.target.value);
  }

  return (
    <div>
      <h1>Game of life</h1>
      <p>See page on <a href="https://en.wikipedia.org/wiki/Cellular_automaton">Wikipedia</a></p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Controls</legend>
          <ul>
            <li>
              <label for="rows">Rows:</label>
              <input type="text" id="rows" value={rows} onChange={handleRowsChange}></input>
            </li>
            <li>
              <label for="cols">Columns:</label>
              <input type="text" id="cols" value={cols} onChange={handleColsChange}></input>
            </li>
            <li>
              <label for="proportion">Proportion 'on':</label>
              <input type="text" id="proportion" value={proportion} onChange={handleProportionChange}></input>
            </li>
          </ul>
        </fieldset>
      </form>
      <Grid rows={rows} cols={cols} proportion={proportion} />
    </div>
  );
}

export default App;
