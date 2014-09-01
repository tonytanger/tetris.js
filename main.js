var tetrisBoard = new Board();

var level = new Level();
var score = new Score();
updateBoard();
console.log(score);

//game loop
var nextBlock = level.getNextBlock();
var blockInQueue = level.getNextBlock();
tetrisBoard.addTetromino(nextBlock);
activateKeyboard();
updateBoard();

function gameLoop(myInt) {
	if(!nextBlock.down()) {
		// cannot go down anymore
		// check for keydown during lockDelay
		score.addScore(tetrisBoard.findFullLine());
		//show score
		// move on to next block
		activateKeyboard();
		nextBlock = blockInQueue;
		if(!tetrisBoard.addTetromino(nextBlock)) {
			clearInterval(myInt);
			deactivateKeyboard();
			console.log("GAME OVER!");
			document.getElementById("game_over").style.zIndex = "150";
		}
		updateBoard();
		blockInQueue = level.getNextBlock();
	}
	updateBoard();
}
var downInterval = setInterval(function() {gameLoop(downInterval)}, level.lockDelay);

function updateBoard() {
	document.getElementById("score").innerHTML = score.print();
	document.getElementById("board_wrapper").innerHTML = tetrisBoard.print();
}

		//document.getElementById("board").innerHTML = tetrisBoard.print();

	// var iblock2 = new IBlock();
	// tetrisBoard.addTetromino(iblock2);
	// document.getElementById("board").innerHTML = tetrisBoard.print();
	// document.getElementById("board").innerHTML = tetrisBoard.print();

	// var iblock3 = new IBlock();
	// //iblock3.blockType = "G";
	// tetrisBoard.addTetromino(iblock3);
	// document.getElementById("board").innerHTML = tetrisBoard.print();
	// iblock3.down();
	// document.getElementById("board").innerHTML = tetrisBoard.print();