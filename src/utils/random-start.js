function randomStart (rows, cols, proportion) {

    let data = [];

    for (let i = 0; i < rows; i++) {

        let rowData = [];

        for (let j = 0; j < cols; j++) {
            const status = (Math.random() < proportion) ? 1 : 0;
            rowData.push(status)
        }

        data.push(rowData);
    }

    return data;

}

export default randomStart;