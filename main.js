var tetrisBoard = new Board();
updateBoard();

var level = new Level();

//game loop
var nextBlock = level.getNextBlock();
tetrisBoard.addTetromino(nextBlock);
activateKeyboard();
updateBoard();

function gameLoop(myInt) {
	if(!nextBlock.down()) {
		// cannot go down anymore
		// check for keydown during lockDelay

		// move on to next block
		activateKeyboard();
		nextBlock = level.getNextBlock();
		if(!tetrisBoard.addTetromino(nextBlock)) {
			clearInterval(myInt);
			deactivateKeyboard();
			console.log("GAME OVER!");
		}
		updateBoard();
	}
	updateBoard();
}
var downInterval = setInterval(function() {gameLoop(downInterval)}, level.lockDelay);



function updateBoard() {
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