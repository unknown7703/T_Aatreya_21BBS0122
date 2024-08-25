import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board.js'; // Assuming you have a separate Board component

function App() {
  let initBoard = [
    ["B-P-1","B-P-2","B-H-1","B-H-2","B-P-3"],
    [".",".",".",".","."],
    [".",".",".",".","."],
    [".",".",".",".","."],
    ["A-P-1","A-P-2","A-H-1","A-H-2","A-P-3"]
  ];
  const [board, setBoard] = useState(initBoard);
  const [currentPlayer, setCurrentPlayer] = useState('A');
  

  

  const handleCellClick = (rowIndex, colIndex) => {
    console.log(colIndex);
  };


  return (
    <div className="App">
      <h1>Hero Game 21BBS0122</h1>
      <p>Current Turn: Player {currentPlayer}</p>
      <Board board={board} onCellClick={handleCellClick} />
    </div>
  );
}

export default App;
