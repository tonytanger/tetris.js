function Level() {
	this.level = 1;
	this.rand = 0;
	this.blockInQueue = 0;
	this.nextBlock = 0;
	this.lockDelay = 1000;
}

Level.prototype.getLevel = function() {
	return this.level;
};

Level.prototype.getNextBlock = function() {
	var new_rand = Math.floor(Math.random() * 7) + 1;
	while(new_rand === this.rand) {
		new_rand = Math.floor(Math.random() * 7) + 1;
	}
	this.rand = new_rand;
	console.log("Random Nunber: " + this.rand);
	switch(this.rand) {
		case 1:
			this.nextBlock = new IBlock();
		break;
		case 2:
			this.nextBlock = new JBlock();
		break;
		case 3:
			this.nextBlock = new SBlock();
		break;
		case 4:
			this.nextBlock = new ZBlock();
		break;
		case 5:
			this.nextBlock = new OBlock();
		break;
		case 6:
			this.nextBlock = new TBlock();
		break;
		case 7:
			this.nextBlock = new LBlock();
		break;
	}
	// if(this.nextBlock instanceof IBlock) {
	// 	this.nextBlock = new JBlock();
	// } else if(this.nextBlock instanceof JBlock) {
	// 	this.nextBlock = new LBlock();
	// } else if(this.nextBlock instanceof LBlock) {
	// 	this.nextBlock = new SBlock();
	// } else if(this.nextBlock instanceof SBlock) {
	// 	this.nextBlock = new ZBlock();
	// } else if(this.nextBlock instanceof ZBlock) {
	// 	this.nextBlock = new OBlock();
	// } else if(this.nextBlock instanceof OBlock) {
	// 	this.nextBlock = new TBlock();
	// } else if(this.nextBlock instanceof TBlock) {
	// 	this.nextBlock = new IBlock();
	// } else {
	// 	this.nextBlock = new IBlock();
	// }
	return this.nextBlock;
};

Level.prototype.levelUp = function() {
	if(this.lockDelay >= 400) {
		this.lockDelay -= 100;
		clearInterval(downInterval);
		setInterval(function() {gameLoop(downInterval)}, this.lockDelay);
	} else {
		this.lockDelay -= 50;
		clearInterval(downInterval);
		setInterval(function() {gameLoop(downInterval)}, this.lockDelay);
	}
	if(this.level < 15) {
		this.level++;
	}
	return this.level;
};