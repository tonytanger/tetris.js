function Score() {
	this.points = 0;
	this.level = 1;
	this.linesCleared = 9;
}

Score.prototype.print = function() {
	var returnString = "Score: " + this.points;
	returnString += "<br />Level: " + this.level;
	returnString += "<br />Lines Cleared: " + this.linesCleared;
	return returnString;
};

Score.prototype.addScore = function(num_lines) {
	this.points += this.round(num_lines * num_lines * 10 * this.level);
	if(this.linesCleared % 10 + num_lines >= 10) {
		this.levelUp();
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
	this.level++;
	level.levelUp();
	return true;
};