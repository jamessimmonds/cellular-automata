function GridRow ( {data} ) {

    const cells = data.map((cell) => {

        const status = (cell === 0) ? "gridSquareOff" : "gridSquareOn";
        
        return <div className={status}></div>

    });

    return (
        <div className="gridRow">
            {cells}
        </div>
    )

}

export default GridRow;