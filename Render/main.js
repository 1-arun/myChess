import * as arun from '../Data/pieces.js'
import { ROOT_DIV } from "../Helper/constant.js";



//use when you want render pieces on Board
function renderPieces(data) {
    data.forEach((row) => {
        row.forEach((square) =>{

            // if square has piece
            if(square.piece) {

                // select squareElement by its id
                const squareEl = document.getElementById(square.id)

                // create piece
                const piece = document.createElement('img')
                piece.classList.add('pieceImage')
                piece.src = square.piece.img
                squareEl.appendChild(piece)
            }
        })
    })

}
// use when you want to render board for the first time when game start
function initialGameRender(data) {

    data.forEach((elements) => {
        

        const rowDiv = document.createElement('div')
        
        rowDiv.classList.add('rowDiv')
        ROOT_DIV.appendChild(rowDiv)
        
        elements.forEach((square) => {
            const squareDiv = document.createElement('div')
            

            // unique id for all square
            squareDiv.id = square.id

            squareDiv.classList.add(square.color, "square")
            rowDiv.appendChild(squareDiv)

                // from begin the story of Pawn
                // here we will put the pawn on the place of row no. 7;

                // render black pawn
            if(square.id[1] == 7) {
                square.piece = arun.blackPawn(square.id)
                
            } 

             if(square.id == "a8" || square.id == "h8") {
                square.piece = arun.blackRook(square.id)
                
            } 

            if(square.id == "b8" || square.id == "g8") {
                square.piece = arun.blackKnight(square.id)
                
            }

            if(square.id == "c8" || square.id == "f8") {
                square.piece = arun.blackBishop(square.id)
                
            }

            if(square.id == "d8") {
                square.piece = arun.blackQueen(square.id)
                
            }
            if(square.id == "e8") {
                square.piece = arun.blackKing(square.id)
                
            }

            // render white pawn
            if(square.id[1] == 2) {
                square.piece = arun.whitePawn(square.id)
            }

            if(square.id == "a1" || square.id == "h1")  {
                square.piece = arun.whiteRook(square.id)
            }

            if(square.id == "b1" || square.id == "g1")  {
                square.piece = arun.whiteKnight(square.id)
            }

            if(square.id == "c1" || square.id == "f1")  {
                square.piece = arun.whiteBishop(square.id)
            }

            if(square.id == "d1")  {
                square.piece = arun.whiteQueen(square.id)
            }

              if(square.id == "e1")  {
                square.piece = arun.whiteKing(square.id)
            }

        })
    })

    renderPieces(data)

}

export {initialGameRender}