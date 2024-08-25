import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board.js'; // Assuming you have a separate Board component

function App() {
  let initBoard = [
    ["B-P-1","B-P-2","B-H","B-J","B-P-3"],
    [".",".",".",".","."],
    [".",".",".",".","."],
    [".",".",".",".","."],
    ["A-P-1","A-P-2","A-H","A-J","A-P-3"]
  ];

  let movement = [
    ["F","B","L","R"],
    ["FL","FR","BL","BR"],
    ["."],
  ]

  const [board, setBoard] = useState(initBoard);
  const [currentPlayer, setCurrentPlayer] = useState('A'); 
  const [moves,setMoves] = useState([""]);
  const [selecPiece,setSelectPiece] = useState([0,0]);

  const moveLogic = (tempB,index) =>{
    const i = selecPiece[0];
    const j = selecPiece[1];
    if(tempB[i][j][2]==="P"){
      
    }
  }
  const makeBoard = (index) =>{
    setBoard(prevBoard => {
      const tempB = prevBoard.map(row => [...row]);
      const i = selecPiece[0];
      const j = selecPiece[1];
      // move logic
      //tempB=moveLogic(tempB,index);
      tempB[i][j]=".";
      return tempB;
  });
  };

  const validSelect = (rowIndex,colIndex) =>{
    const val=board[rowIndex][colIndex];
    if(val[0]===currentPlayer){
      return 1;
    }else if(val==="."){
      return 2;
    }
      else{
      return 3;
    }
  };


  const showMoves = (rowIndex,colIndex) => {
    const piece = board[rowIndex][colIndex];
    let ind=2;
    if(piece[2]=== "P" || piece[2]=== "H"){
      ind=0
    }else if(piece[2]=== "J"){
      ind=1;
    }
    setMoves(movement[ind]);
  };


  const handleCellClick = (rowIndex, colIndex) => {
    if(validSelect(rowIndex,colIndex)=== 1){
      setSelectPiece([rowIndex,colIndex]);
      showMoves(rowIndex,colIndex);
    }else if(validSelect(rowIndex,colIndex)=== 2){
      alert("can't select empty");
      return;
    }else{
      alert("wrong piece");
      return;
    }
  };
  return (
    <div className="App">
      <h1>Hero Game 21BBS0122</h1>
      <p>Current Turn: Player {currentPlayer}</p>
      <Board board={board} onCellClick={handleCellClick} />
      <div>
          <h2>Moves:</h2>
                <div className="movelist">
                    {moves.map((move, index) => (
                        <div key={index} onClick={makeBoard}>{move}</div>
                    ))}
                </div>
            </div>
    </div>
  );
}

export default App;
