

var game = new Game();

game.start();
// var tetrisBoard = new Board();

// var level = new Level();
// var score = new Score();
// var keyboardControl = new Keyboard();
// updateBoard();
// console.log(score);

// //game loop
// var nextBlock = level.getNextBlock();
// var blockInQueue = level.getNextBlock();
// tetrisBoard.addTetromino(nextBlock);
// keyboardControl.init(nextBlock);
// updateBoard();

// function gameLoop() {
// 	if(!nextBlock.down()) {
// 		onDown();
// 		if(!tetrisBoard.addTetromino(nextBlock)) {
// 			// game over
// 			gameOver();
// 		}
// 		updateBoard();
// 		blockInQueue = level.getNextBlock();
// 	}
// 	updateBoard();
// }

// // implement a way to update level,lockDelay because this setInterval will not change during the game.
// var downInterval = setInterval(function() {gameLoop()}, level.lockDelay);

// function onDown() {
// 	// check if row clear?
// 	// add appropriate score
// 	score.addScore(tetrisBoard.findFullLine());
	
// 	// stop current block
// 	// get next Block
// 	nextBlock = blockInQueue;
// 	keyboardControl.init(nextBlock);
// }

// function gameOver() {
// 	// stop down loop on current tertromino
// 	clearInterval(downInterval);
// 	nextBlock = 0;
// 	blockInQueue = 0;
// 	// deactivate keyboard
// 	keyboardControl.gameOver();
// 	// print appropriate message
// 	console.log("GAME OVER!");
// 	document.getElementById("game_over").style.zIndex = "150";
// }

// function updateBoard() {
// 	document.getElementById("score").innerHTML = score.print();
// 	document.getElementById("board_wrapper").innerHTML = tetrisBoard.print();
// }

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