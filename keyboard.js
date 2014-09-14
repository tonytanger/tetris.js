function Keyboard() {
	this.handler = 0;
}

Keyboard.prototype.onKeyDown = function(key, tetromino) {
	switch(key) {
		case 38:
		//up
			tetromino.rotate();
			console.log("rotate");
			return 0;
		case 37:
		//left
			tetromino.left();
			console.log("left");
			return 0;
		case 39:
		// right
			tetromino.right();
			console.log("right");
			return 0;
		case 40:
		//down
			tetromino.down();
			console.log("down");
			return 0;
		case 32:
		// space: drop
			tetromino.drop();
			console.log("drop");
			return 1;
		case 80:
		// p: pause
			console.log("pause");
			return 2;
		case 67:
		// c: hold
			console.log("hold");
			return 3;
	}
};

Keyboard.prototype.init = function(handler) {
	this.handler = handler;
	document.addEventListener('keydown', this.handler);
};

Keyboard.prototype.remove = function(){
	document.removeEventListener('keydown', this.handler);
};
