import GridRow from "./grid-row.js";

function Grid ( {rows, cols, proportion, data} ) {
    
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