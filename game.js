const game = document.getElementById('game');
let playerRow = 5;
let playerCol = 10;

// Handle key presses for movement
document.addEventListener('keydown', (event) => {
    const key = event.key;
    let newRow = playerRow;
    let newCol = playerCol;

    // Determine movement direction
    if (key === 'ArrowUp') newRow--;      // Move up
    if (key === 'ArrowDown') newRow++;    // Move down
    if (key === 'ArrowLeft') newCol--;    // Move left
    if (key === 'ArrowRight') newCol++;   // Move right

    // Boundary check
    if (newRow >= 0 && newRow < 10 && newCol >= 0 && newCol < 20) {
        playerRow = newRow;
        playerCol = newCol;
    }

    // Redraw the map
    let newMap = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 20; j++) {
            if (i === playerRow && j === playerCol) {
                newMap += '@';
            } else {
                newMap += '.';
            }
        }
        newMap += '\n';
    }
    game.textContent = newMap;
});