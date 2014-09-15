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
	// var returnString = "<table id='nextTetromino'>";
	// for(var i = 0; i < 4; i++) {
	// 	returnString += this.innerblocks[i].print();
	// }
	// returnString += "</table>";
	var returnString = this.blockType;
	return returnString;
};

// Tetromino.prototype.state0 = function() {
// 	this.state =  0;
// 	console.log(this.state);
// };

// Tetromino.prototype.state1 = function() {
// 	this.state =  1;
// 	console.log(this.state);
// };

// Tetromino.prototype.state2 = function() {
// 	this.state =  2;
// 	console.log(this.state);
// };

// Tetromino.prototype.state3 = function() {
// 	this.state =  3;
// 	console.log(this.state);
// };

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

function checkAlive(tetromino, colDif, rowDif) {
	for(var i = 0; i < 4; i++) {
		if( tetromino.innerBlocks[i].row + tetromino.row - rowDif >= tetromino.board.height || 
			tetromino.innerBlocks[i].row + tetromino.row - rowDif < 0 || 
			tetromino.innerBlocks[i].col + tetromino.col + colDif >= tetromino.board.width || 
			tetromino.innerBlocks[i].col + tetromino.col + colDif < 0 ) {
			// new location is out of bound
			return false;
		} else if( tetromino.board.getBlock(tetromino.innerBlocks[i].row + tetromino.row - rowDif, tetromino.innerBlocks[i].col + tetromino.col + colDif).isAlive() ) { 
			// new location is already occupied
			return false;
		}
	}
	return true;
}

function doRotation(tetromino, colDif, rowDif) {
	tetromino.col += colDif;
	tetromino.row += -rowDif;

	// find new ghost
	tetromino.findGhostRow();
	tetromino.setGhostAlive();

	// set new coordinates and set them alive
	for(var i = 0; i < 4; i++) {
		tetromino.blocks[i].row = tetromino.innerBlocks[i].row + tetromino.row;
		tetromino.blocks[i].col = tetromino.innerBlocks[i].col + tetromino.col;
		tetromino.board.setAlive(tetromino.blocks[i].row, tetromino.blocks[i].col, tetromino.blockType);
	}

	console.log("Rotate!");
	return true;
}

// rotate logic:

// "remove" all blocks from board
// remember where they are
// check all 5 new locations
// as soon as one works. do that
// draw it at new location

// if none works, draw it back at old location

Tetromino.prototype.rotate = function() {
	//set ghost dead
	this.setGhostDead();

	//set current positions dead
	for(var i = 0; i < 4; i++) {
		this.board.setDead(this.blocks[i].row, this.blocks[i].col);
	}

	//check if new position is full
	var rotationFound = true;

	// for non I or O block
	switch(this.state) {
		case 0:
			// original position
			this.state1();
			// check (0,0)
			rotationFound = checkAlive(this, 0, 0);
			if(rotationFound) {
				// do rotation
				doRotation(this, 0, 0);
				return true;
			}

			// check (-1, 0)
			rotationFound = checkAlive(this, -1, 0);
			if(rotationFound) {
				// do rotation
				doRotation(this, -1, 0);
				return true;
			}

			// check (-1, +1)
			rotationFound = checkAlive(this, -1, 1);
			if(rotationFound) {
				// do rotation
				doRotation(this, -1, 1);
				return true;
			}
			// check (0, -2)
			rotationFound = checkAlive(this, 0, -2);
			if(rotationFound) {
				// do rotation
				doRotation(this, 0, -2);
				return true;
			}
			// check (-1, -2)
			rotationFound = checkAlive(this, -1, -2);
			if(rotationFound) {
				// do rotation
				doRotation(this, -1, -2);
				return true;
			}
			// none worked
			// reset ghost
			if(!rotationFound) {
				cancelRotation(this);
				return false;
			}
			return false;
		case 1:
			this.state2();
			// 90 degree position
			// check (0,0)
			rotationFound = checkAlive(this, 0, 0);
			if(rotationFound) {
				// do rotation
				doRotation(this, 0, 0);
				return true;
			}
			// check (+1, 0)
			rotationFound = checkAlive(this, 1, 0);
			if(rotationFound) {
				// do rotation
				doRotation(this, 1, 0);
				return true;
			}
			// check (+1, -1)
			rotationFound = checkAlive(this, 1, -1);
			if(rotationFound) {
				// do rotation
				doRotation(this, 1, -1);
				return true;
			}
			// check (0, +2)
			rotationFound = checkAlive(this, 0, 2);
			if(rotationFound) {
				// do rotation
				doRotation(this, 0, 2);
				return true;
			}
			// check (+1, +2)
			rotationFound = checkAlive(this, 1, 2);
			if(rotationFound) {
				// do rotation
				doRotation(this, 1, 2);
				return true;
			}
			// none worked
			// reset ghost
			if(!rotationFound) {

				cancelRotation(this);
				return false;
			}
			return false;
		case 2:
			// 180 degree position
			this.state3();
			// check (0, 0)
			rotationFound = checkAlive(this, 0, 0);
			if(rotationFound) {
				// do rotation
				doRotation(this, 0, 0);
				return true;
			}
			// check (+1, 0)
			rotationFound = checkAlive(this, 1, 0);
			if(rotationFound) {
				// do rotation
				doRotation(this, 1, 0);
				return true;
			}
			// check (+1, +1)
			rotationFound = checkAlive(this, 1, 1);
			if(rotationFound) {
				// do rotation
				doRotation(this, 1, 1);
				return true;
			}

			// check (0, -2)
			rotationFound = checkAlive(this, 0, -2);
			if(rotationFound) {
				// do rotation
				doRotation(this, 0, -2);
				return true;
			}

			// check (+1, -2)
			rotationFound = checkAlive(this, 1, -2);
			if(rotationFound) {
				// do rotation
				doRotation(this, 1, -2);
				return true;
			}

			// none worked
			// reset ghost
			if(!rotationFound) {				
				cancelRotation(this);
				return false;
			}
			return false;
		case 3:
			this.state0();
			// 270 degree position
			// check (0, 0)
			rotationFound = checkAlive(this, 0, 0);
			if(rotationFound) {
				// do rotation
				doRotation(this, 0, 0);
				return true;
			}
			// check (-1, 0)
			rotationFound = checkAlive(this, -1, 0);
			if(rotationFound) {
				// do rotation
				doRotation(this, -1, 0);
				return true;
			}
			// check (-1, -1)
			rotationFound = checkAlive(this, -1, -1);
			if(rotationFound) {
				// do rotation
				doRotation(this, -1, -1);
				return true;
			}

			// check (0, +2)
			rotationFound = checkAlive(this, 0, 2);
			if(rotationFound) {
				// do rotation
				doRotation(this, 0, 2);
				return true;
			}

			// check (-1, +2)
			rotationFound = checkAlive(this, -1, 2);	
			if(rotationFound) {
				// do rotation
				doRotation(this, -1, 2);
				return true;
			}

			// none worked		
			// reset ghost
			if(!rotationFound) {
				cancelRotation(this);
				return false;
			}
			return false;
	}
};

function cancelRotation(tetromino) {
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

	tetromino.setGhostAlive();

	for(var i = 0; i < 4; i++) {
		tetromino.blocks[i].row = tetromino.innerBlocks[i].row + tetromino.row;
		tetromino.blocks[i].col = tetromino.innerBlocks[i].col + tetromino.col;
		tetromino.board.setAlive(tetromino.blocks[i].row, tetromino.blocks[i].col, tetromino.blockType);
	}
	console.log("Rotation Failed");
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
				// console.log(this.innerBlocks[i].row, this.innerBlocks[i].col);
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
	console.log("Ghost Row: " + this.ghostRow + " and Regular Row: " + this.row);
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

Tetromino.prototype.reset = function() {};