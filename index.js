const canvas = document.getElementById('canvas');
const canvasRect = canvas.getBoundingClientRect();
const width = canvas.clientWidth;
const height = canvas.clientHeight;
const speed = 10;
var keyState = {};
var x = width / 2;
var y = height / 2;
const randomInt = (min, max) => {
	return Math.random() * (max - min) + min;
};

window.addEventListener(
	'keydown',
	function (e) {
		keyState[e.keyCode || e.which] = true;
	},
	true
);

window.addEventListener(
	'keyup',
	function (e) {
		keyState[e.keyCode || e.which] = false;
	},
	true
);

(function gameLoop() {
	if ((keyState[37] || keyState[65]) && x > canvasRect.left) {
		// left
		x -= speed;
	}
	if (
		(keyState[39] || keyState[68]) &&
		x < canvasRect.right - sprite.clientWidth
	) {
		// right
		x += speed;
	}
	if ((keyState[38] || keyState[87]) && y > canvasRect.top) {
		// up
		y -= speed;
	}
	if (
		(keyState[40] || keyState[83]) &&
		y < canvasRect.bottom - sprite.clientHeight
	) {
		// down
		y += speed;
	}

	document.getElementById('sprite').style.left = x + 'px';
	document.getElementById('sprite').style.top = y + 'px';
	setTimeout(gameLoop, 10);
})();
