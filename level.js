function Level() {
	this.level = 0;
	this.seed = 0;
	this.blockInQueue = 0;
	this.nextBlock = 0;
	this.lockDelay = 3000;
}

Level.prototype.getLevel = function() {
	return this.level;
};

Level.prototype.getNextBlock = function() {
	if(this.nextBlock instanceof IBlock) {
		this.nextBlock = new JBlock();
	} else if(this.nextBlock instanceof JBlock) {
		this.nextBlock = new LBlock();
	} else if(this.nextBlock instanceof LBlock) {
		this.nextBlock = new SBlock();
	} else if(this.nextBlock instanceof SBlock) {
		this.nextBlock = new ZBlock();
	} else if(this.nextBlock instanceof ZBlock) {
		this.nextBlock = new OBlock();
	} else if(this.nextBlock instanceof OBlock) {
		this.nextBlock = new TBlock();
	} else if(this.nextBlock instanceof TBlock) {
		this.nextBlock = new IBlock();
	} else {
		this.nextBlock = new IBlock();
	}
	console.log(this.nextBlock);
	return this.nextBlock;
};