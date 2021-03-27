function rules (alive, neighbours) {
    if (alive === 1) {
        if (neighbours < 2) {
            return 0;
        } else if (neighbours === 2 || neighbours === 3) {
            return 1;
        } else {
            return 0;
        }
    } else {
        if (neighbours === 3) {
            return 1;
        } else {
            return 0;
        }
    }
}

// THIS CODE IS HORRIBLE - is there a better way of getting neighbours?
function iteration (state) {

    let rows = [];

    for (let row = 0; row < state.length; row++) {

        let thisRow = [];

        let neighbourIndicesRows = [];

        if (row === 0) {
            neighbourIndicesRows = [0, 1];
        } else if (row === (state.length-1)) {
            neighbourIndicesRows = [state.length-2, state.length-1];
        } else {
            neighbourIndicesRows = [row-1, row, row+1]
        }

        for (let cell = 0; cell < state[row].length; cell++) {

            let neighbourIndicesCols = [];

            if (cell === 0) {
                neighbourIndicesCols = [0, 1];
            } else if (cell === state[row].length-1) {
                neighbourIndicesCols = [state[row].length-2, state[row].length-1];
            } else {
                neighbourIndicesCols = [cell-1, cell, cell+1];
            }

            let neighbours = [];

            for (let i = 0; i < neighbourIndicesRows.length; i++) {
                for (let j = 0; j < neighbourIndicesCols.length; j++) {

                    let x = neighbourIndicesRows[i];
                    let y = neighbourIndicesCols[j];

                    neighbours.push(state[x][y]);
                }
            }

            const neighboursCount = neighbours.reduce((x, y) => x + y);
            const finalCount = (state[row][cell] === 1) ? neighboursCount-1 : neighboursCount;

            const result = rules(state[row][cell], finalCount);

            thisRow.push(result);

        }

        rows.push(thisRow);

    }

    return rows;

}

export default iteration;