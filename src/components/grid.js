import GridRow from "./grid-row.js";

function Grid ( {rows, cols} ) {

    const data = [[0,0,1],[0,1,1],[1,0,0]]

    const gridRows = data.map((row) => 
        <GridRow data={row} />
    );

    return (
        <div>
            {gridRows}
        </div>
    )

}

export default Grid;