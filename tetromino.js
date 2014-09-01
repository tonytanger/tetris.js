/**
* Abstract Class Tetromino
*/
function Tetromino() {
	this.blockType = 'I';
	// bottom right corner
	this.row = 0;
	this.col = 0;
	this.blocks = [4];
	this.innerBlocks = [4];
	this.board = 0;
	for(var i = 0; i < 4; i++) {
		this.blocks[i] = new Block();
	}
	this.state = 0;
	for(var i = 0; i < 4; i++) {
		this.innerBlocks[i] = new Block();
	}
	this.ghostRow = BOARD_HEIGHT + 1;
}

Tetromino.prototype.print = function() {
	var returnString = "";
	for(var i = 0; i < 4; i++) {
		returnString += this.blocks[i].print();
	}
	return returnString;
};

Tetromino.prototype.rotate = function() {
	if(++this.state > 3) {
		this.state = 0;
	}
	switch(this.state) {
		case 0:
			this.state0();
		break;
		case 1:
			this.state1();
		break;
		case 2:
			this.state0();
		break;
		case 3:
			this.state3();
		break;
		default:
			this.state0();
		break;
	}
	return this.state;
};

Tetromino.prototype.down = function() {
	// check if it is already at the very bottom
	for(var i = 0; i < 4; i++) {
		if(this.blocks[i].row === this.board.height - 1) {
			console.warn("Cannot go down any further!");
			return false;
		}
	}

	// check the blocks below each block, are any of them alive?

	for(var i = 0; i < 4; i++) {
		var isBottom = true;
		for(var j = 0; j < 4; j++) {
			// check if the selected block is not the same block
			// check if they are in the same column
			// check if current blocks[i] is the lower one
			if(this.blocks[i] !== this.blocks[j] && 
				this.blocks[i].col === this.blocks[j].col &&
				this.blocks[i].row + 1 === this.blocks[j].row) {
				isBottom = false;
				break;
			}
		}
		if(isBottom) {
			// check if the block below is alive
			if(this.board.getBlock(this.blocks[i].row + 1, this.blocks[i].col).isAlive()) {
				console.warn("Cannot go down any further!");
				return false;
			}
		}
	}

	for(var i = 0; i < 4; i++) {
		this.board.setDead(this.blocks[i].row, this.blocks[i].col);
	}

	this.row++;
	for(var i = 0; i < 4; i++) {
		this.blocks[i].row++;
		this.board.setAlive(this.blocks[i].row, this.blocks[i].col, this.blocks[i].blockType);
	}
	console.log("Down!");
	return true;
};

Tetromino.prototype.left = function() {

	// check if it is already at the very left
	for(var i = 0; i < 4; i++) {
		if(this.blocks[i].col === 0) {
			console.warn("Cannot go left any further!");
			return false;
		}
	}

	// check the blocks below each block, are any of them alive?

	for(var i = 0; i < 4; i++) {
		var isLeft = true;
		for(var j = 0; j < 4; j++) {
			// check if the selected block is not the same block
			// check if they are in the same column
			// check if current blocks[i] is the lower one
			if(this.blocks[i] !== this.blocks[j] && 
				this.blocks[i].row === this.blocks[j].row &&
				this.blocks[i].col - 1 === this.blocks[j].col) {
				isLeft = false;
				break;
			}
		}
		if(isLeft) {
			// check if the block below is alive
			if(this.board.getBlock(this.blocks[i].row, this.blocks[i].col - 1).isAlive()) {
				console.warn("Cannot go left any further!");
				return false;
			}
		}
	}

	//set ghost dead
	this.setGhostDead();

	for(var i = 0; i < 4; i++) {
		this.board.setDead(this.blocks[i].row, this.blocks[i].col);
	}

	this.col--;
	// find new ghost
	this.findGhostRow();
	this.setGhostAlive();

	for(var i = 0; i < 4; i++) {
		this.blocks[i].col--;
		this.board.setAlive(this.blocks[i].row, this.blocks[i].col, this.blocks[i].blockType);
	}
	console.log("Left!");
	return true;
};

Tetromino.prototype.right = function() {
		// check if it is already at the very right
	for(var i = 0; i < 4; i++) {
		if(this.blocks[i].col === this.board.width - 1) {
			console.warn("Cannot go right any further!");
			return false;
		}
	}

	// check the blocks below each block, are any of them alive?

	for(var i = 0; i < 4; i++) {
		var isRight = true;
		for(var j = 0; j < 4; j++) {
			// check if the selected block is not the same block
			// check if they are in the same column
			// check if current blocks[i] is the lower one
			if(this.blocks[i] !== this.blocks[j] && 
				this.blocks[i].row === this.blocks[j].row &&
				this.blocks[i].col + 1 === this.blocks[j].col) {
				isRight = false;
				break;
			}
		}
		if(isRight) {
			// check if the block below is alive
			if(this.board.getBlock(this.blocks[i].row, this.blocks[i].col + 1).isAlive()) {
				console.warn("Cannot go right any further!");
				return false;
			}
		}
	}

	//set ghost dead
	this.setGhostDead();

	for(var i = 0; i < 4; i++) {
		this.board.setDead(this.blocks[i].row, this.blocks[i].col);
	}

	this.col++;
	// find new ghost
	this.findGhostRow();
	this.setGhostAlive();

	for(var i = 0; i < 4; i++) {
		this.blocks[i].col++;
		this.board.setAlive(this.blocks[i].row, this.blocks[i].col, this.blocks[i].blockType);
	}
	console.log("Right!");
	return true;
};

Tetromino.prototype.drop = function() {
	while(this.down());
	return true;
};

Tetromino.prototype.state0 = function() {
	this.innerBlocks[0].setCoord(0, 0);
	this.innerBlocks[1].setCoord(0, 0);
	this.innerBlocks[2].setCoord(0, 0);
	this.innerBlocks[3].setCoord(0, 0);
	console.error("You shouldn't have done this!");
};

Tetromino.prototype.rotate = function() {
	//set ghost dead

	this.setGhostDead();
	//check if new position is full
	switch(this.state) {
		case 0:
			this.state1();
		break;
		case 1:
			this.state2();
		break;
		case 2:
			this.state3();
		break;
		case 3:
			this.state0();
		break;
	}
	this.state++;
	if(this.state > 3) {
		this.state = 0;
	}

	// check if new location is occupied
	for(var i = 0; i < 4; i++) {

		// check if new location is out of bound
		if(this.innerBlocks[i].row + this.row > 22 || this.innerBlocks[i].row + this.row < 0 || this.innerBlocks[i].col + this.col > 9 || this.innerBlocks[i].col + this.col < 0) {
			cancelRotate(this);
			console.warn("rotation: out of bound!");
			//reset ghost
			this.setGhostAlive();
			return false;
		}

		// check if new location is one of the old locations

		var newLocation = true;

		for(var j = 0; j < 4; j++) {
			if(this.innerBlocks[i].row + this.row === this.blocks[j].row && this.innerBlocks[i].col + this.col === this.blocks[j].col) {
				newLocation = false;
			}
		}
		
		// check if new location is occupied
		if(newLocation && this.board.getBlock(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col).isAlive()) {
			// new location is occupied.
			cancelRotate(this);
			console.warn("rotation: location occupied!");
			//reset ghost
			this.setGhostAlive();
			return false;
		}
	}

	//TODO: wall kick

	//do the rotation

	//NOTE: cannot do setGhostDead() here because rotation already happened to innerBlocks

	// set old positions dead
	for(var i = 0; i < 4; i++) {
		this.board.setDead(this.blocks[i].row, this.blocks[i].col);
	}

	// find new ghost
	this.findGhostRow();
	this.setGhostAlive();

	// set new coordinates and set them alive
	for(var i = 0; i < 4; i++) {
		this.blocks[i].row = this.innerBlocks[i].row + this.row;
		this.blocks[i].col = this.innerBlocks[i].col + this.col;
		this.board.setAlive(this.blocks[i].row, this.blocks[i].col, this.blockType);
	}
	console.log("Rotate!");
	return true;
};

function cancelRotate(tetromino) {
	switch(tetromino.state) {
		case 0:
			tetromino.state3();
		break;
		case 1:
			tetromino.state0();
		break;
		case 2:
			tetromino.state1();
		break;
		case 3:
			tetromino.state2();
		break;
	}
	tetromino.state--;
	if(tetromino.state < 0) {
		tetromino.state = 3;
	}
}

Tetromino.prototype.findGhostRow = function() {
	// switch(this.blockType) {
	// 	case 'J': case 'L': case 'S': case 'Z': case 'T':
	// 	this.ghostRow = BOARD_HEIGHT;
	// 	break;
	// 	case 'I':
	// 	this.ghostRow = BOARD_HEIGHT - 1 + th;
	// 	break;
	// 	case 'O':
	// 	this.ghostRow = BOARD_HEIGHT - 1;
	// 	break;
	// }

	this.ghostRow = this.board.height + 1;
	// for(var i = 0; i < 4; i++) {
	// 	for(var j = this.ghostRow; j > 1; j--) {
	// 		if(this.innerBlocks[i].row + j < 22 && this.board.getBlock(this.innerBlocks[i].row + j, this.innerBlocks[i].col + this.col).isDead()) {
	// 			this.ghostRow = j;
	// 			break;
	// 		}	
	// 	}
	// }
	for(var i= 0; i < 4; i++) {
		if(this.innerBlocks[i].row + this.row === this.board.height - 1){
			this.ghostRow = this.row;
			return this.ghostRow;
		}
	}

	for(var i = 0; i < 4; i++) {
		var isBottom = true;
		for(var j = 0; j < 4; j++) {
			// check if the selected block is not the same tetromino
			// check if they are in the same column
			// check if current blocks[i] is the lower one
			if(this.innerBlocks[i].col === this.innerBlocks[j].col && this.innerBlocks[i].row + 1 === this.innerBlocks[j].row) {
				isBottom = false;
				console.log(this.innerBlocks[i].row, this.innerBlocks[i].col);
				break;
			}
		}
		if(isBottom) {
			// find the "lowest" row that is dead
			// console.log("Cond1: " + (this.ghostRow - this.innerBlocks[i].row));
			// console.log("Cond2: " + this.board.height);
			for(var j = this.innerBlocks[i].row + this.row + 1; j < this.board.height + 1; j++) {
				//console.log(this.board.getBlock(j, this.blocks[i].col));
				if(this.board.getBlock(j, this.innerBlocks[i].col + this.col).isAlive()) {
					if(j - this.innerBlocks[i].row - 1 < this.ghostRow){
						this.ghostRow = j - this.innerBlocks[i].row - 1;
					}
					console.log("isAlive: " + j);
					break;
				} else if (j === this.board.height - 1) {
					if(this.board.height - this.innerBlocks[i].row - 1 < this.ghostRow){
						this.ghostRow = this.board.height - this.innerBlocks[i].row - 1;
					}
					console.log("Reach Bottom: " + j);
					break;
				}
			}
		}
		// console.log("count me 4 times.");
	}
	console.log("Ghost Row: " + this.ghostRow);
	return this.ghostRow;
};

// add a method to point to the right blocks in the board as ghosts
Tetromino.prototype.setGhostDead = function() {
	for(var i = 0; i < 4; i++) {
		// console.log("dead: ", this.innerBlocks[i].row + this.ghostRow, this.innerBlocks[i].col + this.col);
		this.board.setDead(this.innerBlocks[i].row + this.ghostRow, this.innerBlocks[i].col + this.col);
	}
};

Tetromino.prototype.setGhostAlive = function() {
	for(var i = 0; i < 4; i++) {
		// console.log("alive: ", this.innerBlocks[i].row + this.ghostRow, this.innerBlocks[i].col + this.col);
		//console.log(this.innerBlocks[i].row + this.ghostRow, this.innerBlocks[i].col + this.col);
		this.board.setAlive(this.innerBlocks[i].row + this.ghostRow, this.innerBlocks[i].col + this.col, GHOST_BLOCK);
	}
};