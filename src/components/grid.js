import GridRow from "./grid-row.js";

function Grid ( {data} ) {
    
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