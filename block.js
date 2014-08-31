var DEFAULT_BLOCK = 'x';

// Block Constructor
function Block() {
	this.blockType = DEFAULT_BLOCK;
	this.row = 0;
	this.col = 0;
}

// toString() of Block
Block.prototype.print = function() {
	if(this.blockType === DEFAULT_BLOCK) {
		return "&nbsp;";
	}
	return this.blockType;
};

Block.prototype.setCoord = function(row, col) {
	this.row = row;
	this.col = col;
};

Block.prototype.setDead = function() {
	this.blockType = DEFAULT_BLOCK;
};

Block.prototype.setAlive = function(blockType) {
	this.blockType = blockType;
};

Block.prototype.isDead = function() {
	return this.blockType === DEFAULT_BLOCK;
};

Block.prototype.isAlive = function() {
	return !this.isDead();
};