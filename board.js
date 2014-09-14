var BOARD_HEIGHT = 22;
var BOARD_WIDTH = 10;

// Board Constructor
function Board() {
	this.width = BOARD_WIDTH;
	this.height = BOARD_HEIGHT;
	this.theBoard = [this.height];
	for (var i = 0; i < this.height; i++) {
		this.theBoard[i] = [this.width];
		for(var j = 0; j < this.width; j++) {
			this.theBoard[i][j] = new Block();
			this.theBoard[i][j].setCoord(i, j);
		}
	}
}

// toString() of Board
Board.prototype.print = function() {
	var returnString = "<table id='board'>";
	for(var i = 0; i < this.height; i++) {
		// print top number markers
		// if(i === 0) {
		// 	returnString += "<tr><th class='board_title'>G</th>";
		// 	for(var k = 0; k < this.width; k++) {
		// 		returnString += "<th>" + k + "</th>";
		// 	}
		// 	returnString += "</tr>";
		// }
		if(i === 0 || i === 1) {
			continue;
		}
		returnString += "<tr>"
		// if(i < 10) {
		// 	returnString += "<td class='board_title'>" + i + "</td>";
		// } else {
		// 	returnString += "<td class='board_title'>" + i + "</td>";
		// }
		for(var j = 0; j < this.width; j++) {
			returnString += "<td class='block_" + this.theBoard[i][j].blockType.toLowerCase() + "'>";
			returnString += this.theBoard[i][j].print() + "";
			returnString += "</td>"
		}
		returnString += "</tr>";
	}
	returnString += "</table>"
	return returnString;
};

Board.prototype.reset = function() {
	for (var i = 0; i < this.height; i++) {
		this.theBoard[i] = [this.width];
		for(var j = 0; j < this.width; j++) {
			this.theBoard[i][j] = new Block();
		}
	}
};

Board.prototype.getBlock = function(row, col) {
	return this.theBoard[row][col];
};

Board.prototype.addTetromino = function(tetromino) {
	// get x and y of the blocks, and add it to the board.
	tetromino.board = this;

	// check if any of the blocks are already occupied.
	for(var i = 0; i < 4; i++) {
		if(this.getBlock(tetromino.blocks[i].row, tetromino.blocks[i].col).isAlive()) {
			tetromino = null;
			console.warn("Cannot Create Another Tetromino!");
			return false;
		}
	}

	tetromino.findGhostRow();
	tetromino.setGhostAlive();

	for(var i = 0; i < 4; i++) {
		this.setAlive(tetromino.blocks[i].row, tetromino.blocks[i].col, tetromino.blocks[i].blockType);
	}
	return true;
};

Board.prototype.removeTetromino = function(tetromino) {
	tetromino.setGhostDead();
	for(var i = 0; i < 4; i++) {
		this.setDead(tetromino.blocks[i].row, tetromino.blocks[i].col, tetromino.blocks[i].blockType);
	}
	tetromino.reset();
	return true;
};

Board.prototype.setDead = function(row, col) {
	this.theBoard[row][col].setDead()
};

Board.prototype.setAlive = function(row, col, blockType) {
	this.theBoard[row][col].setAlive(blockType);
};

// findFullLines () -> int
// loop through theBoard array and return the number of rows are full

Board.prototype.findFullLine = function() {
	var isFull = true;
	var count = 0;
	for(var i = 0; i < this.height; i++) {
		isFull = true;
		for(var j = 0; j < this.width; j++) {
			if(this.theBoard[i][j].isDead()) {
				// as soon as one block is dead, no need to see the rest
				isFull = false;
				break;
			}
		}
		if(isFull) {
			count++;
			// remove this row;
			this.removeRow(i);
			console.log(i, " row removed!");
		}
	}
	return count;
};

Board.prototype.removeRow = function(row) {
	for(var i = row; i > 2; i--) {
		for(var j = 0; j < this.width; j++) {
			this.theBoard[i][j].blockType = this.theBoard[i - 1][j].blockType;
		}
	}
};