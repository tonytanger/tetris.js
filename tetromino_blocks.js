function IBlock() {
	Tetromino.call(this);
	this.blockType = 'I';
	this.row = 4;
	this.col = 3;
	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
}

IBlock.prototype = Object.create(Tetromino.prototype);

IBlock.prototype.constructor = IBlock;

IBlock.prototype.state0 = function() {
	this.state = 0;
	this.innerBlocks[0].setCoord(-2, 0);
	this.innerBlocks[1].setCoord(-2, 1);
	this.innerBlocks[2].setCoord(-2, 2);
	this.innerBlocks[3].setCoord(-2, 3);
	console.log("I block state 0");
};

IBlock.prototype.state1 = function() {
	this.state = 1;
	this.innerBlocks[0].setCoord(-3, 2);
	this.innerBlocks[1].setCoord(-2, 2);
	this.innerBlocks[2].setCoord(-1, 2);
	this.innerBlocks[3].setCoord(0, 2);
	console.log("I block state 1");
};

IBlock.prototype.state2 = function() {
	this.state = 2;
	this.innerBlocks[0].setCoord(-1, 0);
	this.innerBlocks[1].setCoord(-1, 1);
	this.innerBlocks[2].setCoord(-1, 2);
	this.innerBlocks[3].setCoord(-1, 3);
	console.log("I block state 2");
};

IBlock.prototype.state3 = function() {
	this.state = 3;
	this.innerBlocks[0].setCoord(-3, 1);
	this.innerBlocks[1].setCoord(-2, 1);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(0, 1);
	console.log("I block state 3");
};

IBlock.prototype.reset = function() {
	this.blockType = 'I';
	this.row = 4;
	this.col = 3;
	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
};

//J
function JBlock() {
	Tetromino.call(this);
	this.blockType = 'J';
	this.row = 3;
	this.col = 3;
	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
}

JBlock.prototype = Object.create(Tetromino.prototype);

JBlock.prototype.constructor = JBlock;

JBlock.prototype.state0 = function() {
	this.state = 0;
	this.innerBlocks[0].setCoord(-2, 0);
	this.innerBlocks[1].setCoord(-1, 0);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(-1, 2);
	console.log("J block state 0");
};

JBlock.prototype.state1 = function() {
	this.state = 1;
	this.innerBlocks[0].setCoord(-2, 1);
	this.innerBlocks[1].setCoord(-2, 2);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(0, 1);
	console.log("J block state 1");
};

JBlock.prototype.state2 = function() {
	this.state = 2;
	this.innerBlocks[0].setCoord(0, 2);
	this.innerBlocks[1].setCoord(-1, 2);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(-1, 0);
	console.log("J block state 2");
};

JBlock.prototype.state3 = function() {
	this.state = 3;
	this.innerBlocks[0].setCoord(0, 0);
	this.innerBlocks[1].setCoord(0, 1);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(-2, 1);
	console.log("J block state 3");
};

JBlock.prototype.reset = function() {
	this.blockType = 'J';
	this.row = 3;
	this.col = 3;
	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}	
};

//L
function LBlock() {
	Tetromino.call(this);
	this.blockType = 'L';
	this.row = 3;
	this.col = 3;
	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
}

LBlock.prototype = Object.create(Tetromino.prototype);

LBlock.prototype.constructor = LBlock;

LBlock.prototype.state0 = function() {
	this.state = 0;
	this.innerBlocks[0].setCoord(-2, 2);
	this.innerBlocks[1].setCoord(-1, 2);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(-1, 0);
	console.log("L block state 0");
};

LBlock.prototype.state1 = function() {
	this.state = 1;
	this.innerBlocks[0].setCoord(0, 2);
	this.innerBlocks[1].setCoord(0, 1);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(-2, 1);
	console.log("L block state 1");
};

LBlock.prototype.state2 = function() {
	this.state = 2;
	this.innerBlocks[0].setCoord(0, 0);
	this.innerBlocks[1].setCoord(-1, 0);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(-1, 2);
	console.log("L block state 2");
};

LBlock.prototype.state3 = function() {
	this.state = 3;
	this.innerBlocks[0].setCoord(-2, 0);
	this.innerBlocks[1].setCoord(-2, 1);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(0, 1);
	console.log("L block state 3");
};

LBlock.prototype.reset = function() {
	this.blockType = 'L';
	this.row = 3;
	this.col = 3;
	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
};

//S
function SBlock() {
	Tetromino.call(this);
	this.blockType = 'S';
	this.row = 3;
	this.col = 3;	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
}

SBlock.prototype = Object.create(Tetromino.prototype);

SBlock.prototype.constructor = SBlock;

SBlock.prototype.state0 = function() {
	this.state = 0;
	this.innerBlocks[0].setCoord(-1, 0);
	this.innerBlocks[1].setCoord(-1, 1);
	this.innerBlocks[2].setCoord(-2, 1);
	this.innerBlocks[3].setCoord(-2, 2);
	console.log("S block state 0");
};

SBlock.prototype.state1 = function() {
	this.state = 1;
	this.innerBlocks[0].setCoord(0, 2);
	this.innerBlocks[1].setCoord(-1, 2);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(-2, 1);
	console.log("S block state 1");
};

SBlock.prototype.state2 = function() {
	this.state = 2;
	this.innerBlocks[0].setCoord(0, 0);
	this.innerBlocks[1].setCoord(0, 1);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(-1, 2);
	console.log("S block state 2");
};

SBlock.prototype.state3 = function() {
	this.state = 3;
	this.innerBlocks[0].setCoord(0, 1);
	this.innerBlocks[1].setCoord(-1, 1);
	this.innerBlocks[2].setCoord(-1, 0);
	this.innerBlocks[3].setCoord(-2, 0);
	console.log("S block state 3");
};

SBlock.prototype.reset = function() {
	Tetromino.call(this);
	this.blockType = 'S';
	this.row = 3;
	this.col = 3;	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
};

//Z
function ZBlock() {
	Tetromino.call(this);
	this.blockType = 'Z';
	this.row = 3;
	this.col = 3;
	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
}

ZBlock.prototype = Object.create(Tetromino.prototype);

ZBlock.prototype.constructor = ZBlock;

ZBlock.prototype.state0 = function() {
	this.state = 0;
	this.innerBlocks[0].setCoord(-1, 2);
	this.innerBlocks[1].setCoord(-1, 1);
	this.innerBlocks[2].setCoord(-2, 1);
	this.innerBlocks[3].setCoord(-2, 0);
	console.log("Z block state 0");
};

ZBlock.prototype.state1 = function() {
	this.state = 1;
	this.innerBlocks[0].setCoord(0, 1);
	this.innerBlocks[1].setCoord(-1, 1);
	this.innerBlocks[2].setCoord(-1, 2);
	this.innerBlocks[3].setCoord(-2, 2);
	console.log("Z block state 1");
};

ZBlock.prototype.state2 = function() {
	this.state = 2;
	this.innerBlocks[0].setCoord(0, 2);
	this.innerBlocks[1].setCoord(0, 1);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(-1, 0);
	console.log("Z block state 2");
};

ZBlock.prototype.state3 = function() {
	this.state = 3;
	this.innerBlocks[0].setCoord(0, 0);
	this.innerBlocks[1].setCoord(-1, 0);
	this.innerBlocks[2].setCoord(-1, 1);
	this.innerBlocks[3].setCoord(-2, 1);
	console.log("Z block state 3");
};

ZBlock.prototype.reset = function() {
	this.blockType = 'Z';
	this.row = 3;
	this.col = 3;
	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
};

//O
function OBlock() {
	Tetromino.call(this);
	this.blockType = 'O';
	this.row = 2;
	this.col = 4;
	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
}

OBlock.prototype = Object.create(Tetromino.prototype);

OBlock.prototype.constructor = OBlock;

OBlock.prototype.state0 = function() {
	this.state = 0;
	this.innerBlocks[0].setCoord(0, 0);
	this.innerBlocks[1].setCoord(-1, 0);
	this.innerBlocks[2].setCoord(0, 1);
	this.innerBlocks[3].setCoord(-1, 1);
	console.log("O block state 0");
};

OBlock.prototype.state1 = function() {
	this.state = 1;
	this.innerBlocks[0].setCoord(0, 0);
	this.innerBlocks[1].setCoord(-1, 0);
	this.innerBlocks[2].setCoord(0, 1);
	this.innerBlocks[3].setCoord(-1, 1);
	console.log("O block state 1");
};

OBlock.prototype.state2 = function() {
	this.state = 2;
	this.innerBlocks[0].setCoord(0, 0);
	this.innerBlocks[1].setCoord(-1, 0);
	this.innerBlocks[2].setCoord(0, 1);
	this.innerBlocks[3].setCoord(-1, 1);
	console.log("O block state 2");
};

OBlock.prototype.state3 = function() {
	this.state = 3;
	this.innerBlocks[0].setCoord(0, 0);
	this.innerBlocks[1].setCoord(-1, 0);
	this.innerBlocks[2].setCoord(0, 1);
	this.innerBlocks[3].setCoord(-1, 1);
	console.log("O block state 3");
};

OBlock.prototype.reset = function() {
	this.blockType = 'O';
	this.row = 2;
	this.col = 4;
	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
};

OBlock.prototype.rotate = function() {
	return true;
}

//T
function TBlock() {
	Tetromino.call(this);
	this.blockType = 'T';
	this.row = 3;
	this.col = 3;
	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
}

TBlock.prototype = Object.create(Tetromino.prototype);

TBlock.prototype.constructor = TBlock;

TBlock.prototype.state0 = function() {
	this.state = 0;
	this.innerBlocks[0].setCoord(-1, 0);
	this.innerBlocks[1].setCoord(-1, 1);
	this.innerBlocks[2].setCoord(-1, 2);
	this.innerBlocks[3].setCoord(-2, 1);
	console.log("T block state 0");
};

TBlock.prototype.state1 = function() {
	this.state = 1;
	this.innerBlocks[0].setCoord(-2, 1);
	this.innerBlocks[1].setCoord(-1, 1);
	this.innerBlocks[2].setCoord(0, 1);
	this.innerBlocks[3].setCoord(-1, 2);
	console.log("T block state 1");
};

TBlock.prototype.state2 = function() {
	this.state = 2;
	this.innerBlocks[0].setCoord(-1, 2);
	this.innerBlocks[1].setCoord(-1, 1);
	this.innerBlocks[2].setCoord(-1, 0);
	this.innerBlocks[3].setCoord(0, 1);
	console.log("T block state 2");
};

TBlock.prototype.state3 = function() {
	this.state = 3;
	this.innerBlocks[0].setCoord(0, 1);
	this.innerBlocks[1].setCoord(-1, 1);
	this.innerBlocks[2].setCoord(-2, 1);
	this.innerBlocks[3].setCoord(-1, 0);
	console.log("T block state 3");
};

TBlock.prototype.reset = function() {
	this.blockType = 'T';
	this.row = 3;
	this.col = 3;
	this.state0();
	for(var i = 0; i < 4; i++) {
		this.blocks[i].blockType = this.innerBlocks[i].blockType = this.blockType;
		this.blocks[i].setCoord(this.innerBlocks[i].row + this.row, this.innerBlocks[i].col + this.col);
	}
};
