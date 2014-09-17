function Display() {
	this.boardBoard = "";
	this.scoreBoard = "";
	this.holdBoard = "";
	this.queueBoard = "";
	this.helpBoard = "";
	this.boardClass = 0;
	this.scoreClass = 0;
	this.holdClass = 0;
	this.queueClass = 0;
}

Display.prototype.load = function(boardBoard, scoreBoard, holdBoard, queueBoard, helpBoard, boardClass, scoreClass, holdClass, queueClass) {
	this.boardBoard = boardBoard;
	this.scoreBoard = scoreBoard;
	this.holdBoard = holdBoard;
	this.queueBoard = queueBoard;
	this.helpBoard = helpBoard;
	this.boardClass = boardClass;
	this.scoreClass = scoreClass;
	this.holdClass = holdClass;
	this.queueClass = queueClass;
	this.outlineHold();
	this.outlineQueue();
};

Display.prototype.updateBoard = function() {
	$(this.boardBoard).html(this.boardClass.print());
};

Display.prototype.updateScore = function() {
	$(this.scoreBoard).html("<h3>SCORE</h3>");
	$(this.scoreBoard).append(this.scoreClass.print());
};

Display.prototype.outlineHold = function() {
	$(this.holdBoard).html("<h3>HOLD</h3>");
	$(this.holdBoard).append(new Tetromino().print());
};

Display.prototype.updateHold = function(hold) {
	this.holdClass = hold;
	if(hold) {
		hold.draw(this.holdBoard);
	}
};

Display.prototype.outlineQueue = function() {
	$(this.queueBoard).html("<h3>NEXT</h3>");
	$(this.queueBoard).append(new Tetromino().print());
};

Display.prototype.updateQueue = function(queue) {
	this.queueClass = queue;
	queue.draw(this.queueBoard);
};

Display.prototype.showHelp = function() {
	$(this.helpBoard).html("<h3>How to play:</h3>");
	$(this.helpBoard).append("UP ARROW - rotate<br />");
	$(this.helpBoard).append("DOWN ARROW - down<br />");
	$(this.helpBoard).append("LEFT ARROW - left<br />");
	$(this.helpBoard).append("RIGHT ARROW - right<br />");
	$(this.helpBoard).append("SPACE - drop<br />");
	$(this.helpBoard).append("P - pause<br />");
	$(this.helpBoard).append("C - swap with hold<br />");
};

Display.prototype.updateAll = function(hold, queue) {
	this.updateBoard();
	this.updateScore();
	this.updateHold(hold);
	this.updateQueue(queue);
};