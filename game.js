function Game() {
	this.board = new Board();
	this.keyboard = new Keyboard();
	this.level = new Level();
	this.score = new Score(this.level);
	this.nextTetromino = 0;
	this.tetrominoInQueue = 0;
	this.tetrominoInHold = 0;
	this.scoreDOM = 0;
	this.boardDOM = 0;
	this.keyHandler = 0;
	this.timeout = 0;
	this.pause = false;
	this.hold = false;
	this.lastKeyPress = new Date().getTime();
	this.gameOver =false;
}

Game.prototype.start = function() {
	this.scoreDOM = "score";
	this.boardDOM = "board_wrapper";
	this.nextTetromino = this.level.getNextTetromino();
	this.tetrominoInQueue = this.level.getNextTetromino();
	this.board.addTetromino(this.nextTetromino);
	_this = this;
	this.keyHandler = function(event) {
		var val = _this.keyboard.onKeyDown(event.keyCode, _this.nextTetromino);
		_this.lastKeyPress = new Date().getTime();
		switch(val) {
			case 0:
				// rotate, left, right, down
				_this.updateBoard();
				break;
			case 1:
				// drop
				if(_this.onDrop()) {					
					clearTimeout(_this.timeout);
					_this.downLoop();
					_this.updateBoard();
				}
				break;
			case 2:
				// pause/unpause
				if(_this.pause) {
					_this.downLoop();
					_this.pause = false;
				} else {
					clearTimeout(_this.timeout);
					// disable keyboard???
					_this.pause = true;
				}
				break;
			case 3:
				//hold
				// if something in hold
				//   remove nextTetromino from the board
				//   add tetrominoInHold to board
				//   swap nextTetromino with tetrominoInHold
				//   set flag so pressing "c" doesn't let you swap again.
				// else nothing in hold
				//   set tetrominoInhold as nextTetromino
				//   remove nextTetromino from board
				//   set nextTetromino as tetrominoInQueue
				//   set tetrominoInQueue to getNextTetromino
				//   add nextTetromino
				//   set flag so pressing "c" doesn't let you swap again.

				if(_this.tetrominoInHold) {
					// check flag, can I swap again?
					if(!_this.hold) {
						_this.board.removeTetromino(_this.nextTetromino);
						var temp = _this.tetrominoInHold;
						_this.tetrominoInHold = _this.nextTetromino;
						_this.nextTetromino = temp;
						_this.board.addTetromino(_this.nextTetromino);
						//set flag
						_this.hold = true;
					}
				} else {
					// check flag, can I swap again?
					if(!_this.hold) {
						_this.tetrominoInHold = _this.nextTetromino;
						_this.board.removeTetromino(_this.nextTetromino);
						_this.nextTetromino = _this.tetrominoInQueue;
						_this.tetrominoInQueue = _this.level.getNextTetromino();
						_this.board.addTetromino(_this.nextTetromino);
						// set flag
						_this.hold = true;
					}
				}
				_this.updateBoard();
				break;
			default:
				// something else
			break;
		}
	};
	this.keyboard.init(this.keyHandler);
	this.downLoop();
	this.updateBoard();
};

/**
* Update Display
*/
Game.prototype.updateBoard = function() {
	document.getElementById(this.scoreDOM).innerHTML = this.score.print();
	document.getElementById(this.scoreDOM).innerHTML += "<br />";
	document.getElementById(this.scoreDOM).innerHTML += "QUEUE: " + this.tetrominoInQueue.print();
	document.getElementById(this.scoreDOM).innerHTML += "<br />";
	document.getElementById(this.scoreDOM).innerHTML += "HOLD: " + (this.tetrominoInHold? this.tetrominoInHold.print(): "NULL");
	document.getElementById(this.boardDOM).innerHTML = this.board.print();
};

Game.prototype.downLoop = function() {
	var _this = this;
	this.timeout = setTimeout(function() {
		if(!_this.nextTetromino.down()) {
			// tetromino cannot go down anymore

			//check lockDelay. Was last keypress less than lockDelay? If so. don't onDrop yet. call this function and return.
			if(new Date().getTime() - _this.lastKeyPress >= _this.level.lockDelay) {
				_this.onDrop();
			}
		}
		_this.updateBoard();
		if(!_this.gameOver) _this.downLoop();
		console.log(_this.level.lockDelay);
	}, _this.level.lockDelay);
};

Game.prototype.onDrop = function() {
	// check if row clear?
	// add appropriate score
	this.score.addScore(this.board.findFullLine());
	
	// stop current tetromino
	// get next tetromino
	this.nextTetromino = this.tetrominoInQueue;
	
	// add new tetromino
	if(this.board.addTetromino(this.nextTetromino)) {
		this.tetrominoInQueue = this.level.getNextTetromino();
	} else {
		this.over();
		return false;
	}
	this.hold = false;
	return true;
}

Game.prototype.over = function() {
	// stop down loop on current tertromino
	// deactivate keyboard
	this.keyboard.remove();
	this.gameOver = true;
	// print appropriate message
	console.log("GAME OVER!");
	document.getElementById("game_over").style.zIndex = "150";
}