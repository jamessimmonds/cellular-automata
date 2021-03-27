import randomStart from "../utils/random-start.js";
import GridRow from "./grid-row.js";

function Grid ( {rows, cols, proportion} ) {

    const data = randomStart(rows, cols, proportion);
    
    const gridRows = data.map((row) => 
        <GridRow data={row} />
    );

    return (
        <div className="gridContainer">
            {gridRows}
        </div>
    )

}

export default Grid;