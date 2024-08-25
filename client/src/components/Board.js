// Board.js
import React from 'react';
import './Board.css'; // Import CSS for styling the grid

const Board = ({ board, onCellClick }) => {
    return (
        <div className="grid-container">
            {board.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <div 
                        key={`${rowIndex}-${colIndex}`} 
                        className="grid-item" 
                        onClick={() => onCellClick(rowIndex, colIndex)}
                    >
                        {cell}
                    </div>
                ))
            )}
        </div>
    );
};

export default Board;
