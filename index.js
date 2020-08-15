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
const tileGen = (map) => {
	// take a 2d array
	// 160 tiles
	const tiles = [];
	var xOffset = 0;
	var yOffset = 0;
	for (var i = 0; i < map.length; i++) {
		const tile = document.createElement('img');
		const container = document.createElement('div');
		tile.src = 'assets/ClassicRPG_SheetLarge.png';
		container.classList = 'tile-container';
		// sets the position on the screen
		container.style.left = `${canvasRect.left + xOffset}px`;
		container.style.top = `${canvasRect.top + yOffset}px`;
		tile.classList = 'tile';
		// sets which tile to use
		const mapy = Math.floor(map[i] / 20);
		const mapx = map[i] > 19 ? map[i] % 20 : map[i];
		console.log(mapx, mapy);
		tile.style.objectPosition = `${0 - mapx * 64}px ${0 - mapy * 64}px`;
		container.appendChild(tile);
		tiles.push(container);
		document.getElementById('canvas').appendChild(container);

		if (canvasRect.left + xOffset + 100 >= canvasRect.right) {
			xOffset = 0;
			yOffset += 64;
		} else {
			xOffset += 64;
		}
	}
};
const map = [
	45,
	45,
	28,
	45,
	45,
	45,
	8,
	45,
	45,
	45,
	28,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	// new row
	130,
	45,
	150,
	45,
	45,
	65,
	65,
	65,
	45,
	106,
	107,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	// new row
	130,
	45,
	45,
	45,
	46,
	13,
	14,
	13,
	44,
	126,
	127,
	129,
	45,
	45,
	45,
	45,
	33,
	35,
	38,
	45,
	// new row
	130,
	45,
	45,
	45,
	46,
	13,
	14,
	13,
	44,
	45,
	45,
	45,
	129,
	45,
	45,
	45,
	53,
	55,
	58,
	45,
	// new row
	130,
	45,
	45,
	45,
	46,
	13,
	14,
	13,
	44,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	94,
	95,
	97,
	45,
	// new row
	130,
	45,
	45,
	45,
	45,
	25,
	25,
	25,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	105,
	17,
	59,
	17,
	123,
	// new row
	130,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	150,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	// new row
	130,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	// new row
	130,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	// new row
	130,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	// new row
	130,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	// new row
	130,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
	45,
];
console.log(map);
tileGen(map);

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
