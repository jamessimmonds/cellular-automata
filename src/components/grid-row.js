function GridRow ( {data} ) {

    const cells = data.map((cell) => {

        const status = (cell == 0) ? "gridSquareOff" : "gridSquareOn";
        
        return <div className={status}></div>

    });

    return (
        <div>
            {cells}
        </div>
    )

}

export default GridRow;