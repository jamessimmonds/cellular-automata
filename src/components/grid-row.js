function GridRow ( {data} ) {

    const cells = data.map((cell, index) => {

        const status = (cell === 0) ? "gridSquareOff" : "gridSquareOn";
        
        return <div key={index} className={status}></div>

    });

    return (
        <div className="gridRow">
            {cells}
        </div>
    )

}

export default GridRow;