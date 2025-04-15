<?php
// Generate the initial map
$rows = 10;
$cols = 20;
$map = [];
for ($i = 0; $i < $rows; $i++) {
    for ($j = 0; $j < $cols; $j++) {
        if ($i === 5 && $j === 10) {
            $map[$i][$j] = '@'; // Player's initial position
        } else {
            $map[$i][$j] = '.';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roguelike Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Roguelike Movement</h1>
    <div id="game">
        <!-- Render the initial map using PHP -->
        <?php
        foreach ($map as $row) {
            echo implode('', $row) . "\n";
        }
        ?>
    </div>
    <script src="game.js"></script>
</body>
</html>