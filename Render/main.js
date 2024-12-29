import { ROOT_DIV } from "../Helper/constant.js";
import { blackPawn } from "../../chess-code/data/pieces.js";

function initialGameRender(data) {

    data.forEach((elements) => {
        

        const rowDiv = document.createElement('div')
        console.log(rowDiv);
        
        rowDiv.classList.add('rowDiv')
        ROOT_DIV.appendChild(rowDiv)
        
        elements.forEach((square) => {
            
            const squareDiv = document.createElement('div')
            squareDiv.id = square.id
            squareDiv.classList.add(square.color, "square")
            rowDiv.appendChild(squareDiv)

                // from begin the story of Pawn
                // here we will put the pawn on the place of row no. 7;

                // render black pawn
            if(square.id[1] == 7) {
                square.piece = blackPawn(square.id)
            }

        })
    })
}

export {initialGameRender}