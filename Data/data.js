

function square(color, id, piece) {
    return {color, id, piece}
}

function squareRow(rowId) {

        let squareRow = [];
        let columns = ["a", "b", "c", "d", "e", "f", "g", "h"]

    // even row
    if(rowId % 2 === 0 ) {

        columns.forEach((column, index) =>  {
            
            // even square
            if(index % 2 === 0) {
                squareRow.push(square("white", column + rowId, null))

            // odd square        
            } else {

                squareRow.push(square("green", column + rowId, null))
            }
        })

    // odd row
    } else {


        columns.forEach((column, index) =>  {

            // even square
            if(index % 2 === 0) {

                squareRow.push(square("green", column + rowId, null))

            // odd square        
            } else {

                squareRow.push(square("white", column + rowId, null))
            }
        })
    }

    return squareRow;
}

function initGame() {
    return [
        squareRow(8),
        squareRow(7),
        squareRow(6),
        squareRow(5),
        squareRow(4),
        squareRow(3),
        squareRow(2),
        squareRow(1),
    ]
}

export {initGame}