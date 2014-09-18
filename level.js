function Level() {
	this.level = 1;
	this.rand = 0;
	this.tetrominoInQueue = 0;
	this.nextTetromino = 0;
	this.lockDelay = 1000;
}

Level.prototype.getLevel = function() {
	return this.level;
};

Level.prototype.getNextTetromino = function() {
	var new_rand = Math.floor(Math.random() * 7) + 1;
	while(new_rand === this.rand) {
		new_rand = Math.floor(Math.random() * 7) + 1;
	}
	this.rand = new_rand;
	console.log("Random Nunber: " + this.rand);
	switch(this.rand) {
		case 1:
			this.nextTetromino = new IBlock();
		break;
		case 2:
			this.nextTetromino = new JBlock();
		break;
		case 3:
			this.nextTetromino = new SBlock();
		break;
		case 4:
			this.nextTetromino = new ZBlock();
		break;
		case 5:
			this.nextTetromino = new OBlock();
		break;
		case 6:
			this.nextTetromino = new TBlock();
		break;
		case 7:
			this.nextTetromino = new LBlock();
		break;
	}
	return this.nextTetromino;
};

Level.prototype.levelUp = function() {
	if(this.lockDelay >= 500) {
		this.lockDelay -= 100;
	} else {
		this.lockDelay -= 30;
	}
	if(this.level < 15) {
		this.level++;
	}
	return this.level;
};