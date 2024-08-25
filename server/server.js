const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 8080;

let gameState = {
    board: Array(5).fill().map(() => Array(5).fill(null)),
    players: {},
    currentTurn: 'A',
    gameOver: false,
};


function initGame() {
    gameState = {
        board: Array(5).fill().map(() => Array(5).fill(null)),
        players: { A: [], B: [] },
        currentTurn: 'A',
        gameOver: false,
    };
    
}


function validateMove(player, move) {
    
    return true;  
}

function applyMove(player, move) {
    
}


function broadcastGameState() {
    const state = JSON.stringify({ type: 'gameState', data: gameState });
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(state);
        }
    });
}

wss.on('connection', ws => {
    ws.on('message', message => {
        const parsedMessage = JSON.parse(message);
        const { type, data } = parsedMessage;

        switch (type) {
            case 'init':
                initGame();
                broadcastGameState();
                break;
            case 'move':
                if (gameState.currentTurn === data.player && !gameState.gameOver) {
                    if (validateMove(data.player, data.move)) {
                        applyMove(data.player, data.move);
                        gameState.currentTurn = gameState.currentTurn === 'A' ? 'B' : 'A';
                        broadcastGameState();
                    } else {
                        ws.send(JSON.stringify({ type: 'invalidMove', message: 'Invalid move' }));
                    }
                }
                break;
            case 'newGame':
                initGame();
                broadcastGameState();
                break;
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
