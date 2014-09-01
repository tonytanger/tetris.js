
var handler = function(event) {
	switch(event.keyCode) {
		case 38:
		//up
			nextBlock.rotate();
			break;
		case 37:
		//left
			nextBlock.left();
			break;
		case 39:
		// right
			nextBlock.right();
			break;
		case 40:
		//down
			nextBlock.down();
			break;
		case 32:
		// space
			nextBlock.drop();
			deactivateKeyboard();
			gameLoop(downInterval);
			break;
		case 88:
		// special
			clearInterval(downInterval);
		break;
	}
	updateBoard();
};

function activateKeyboard() {
	document.addEventListener('keydown', handler);
}

function deactivateKeyboard() {
	document.removeEventListener('keydown', handler);	
}