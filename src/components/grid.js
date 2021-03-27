import randomStart from "../utils/random-start.js";
import GridRow from "./grid-row.js";
import iteration from "../utils/rules.js";

function Grid ( {rows, cols, proportion} ) {

    const data = randomStart(rows, cols, proportion);
    iteration(data);
    
    const gridRows = data.map((row, index) => 
        <GridRow key={index} data={row} />
    );

    return (
        <div className="gridContainer">
            {gridRows}
        </div>
    )

}

export default Grid;