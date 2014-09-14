function Score(level) {
	this.points = 0;
	this.level = level;
	this.linesCleared = 0;
}

Score.prototype.print = function() {
	var returnString = "Score: " + this.points;
	returnString += "<br />Level: " + this.level.getLevel();
	returnString += "<br />Lines Cleared: " + this.linesCleared;
	return returnString;
};

Score.prototype.addScore = function(num_lines) {
	// example: num_lines 3 lines, current level 3
	// 3 * 3 * 10 * 3 = 270
	this.points += this.round(num_lines * num_lines * 10 * this.level.getLevel());
	// example: lines cleared 9, num lines 1
	// 9 % 10 = 9 + 1 >= 10
	if((this.linesCleared % 10) + num_lines >= 10) {
		this.levelUp();
		console.log(this.linesCleared + num_lines);
	}
	console.log("Number of Lines: " + num_lines);
	this.linesCleared += num_lines;
	return this.points;
};

Score.prototype.round = function(num) {
	if(num > 1000) {
		// round to near hundred
		return Math.round(num / 100) * 100;
	} else if(num > 10) {
		// round to near 10
		return Math.round(num / 10) * 10;
	}
	return num;
};

Score.prototype.levelUp = function() {
	this.level.levelUp();
	return true;
};