let { init, Sprite, SpriteSheet, GameLoop, initKeys, keyPressed } = kontra;
let { canvas, context } = init();

const speed = 5;

// this function must be called first before keyboard
// functions will work
initKeys();

let image = new Image();
image.src = 'assets/adventurer-run3-sword-Sheet.png';
image.onload = function () {
	// use spriteSheet to create animations from an image
	let spriteSheet = SpriteSheet({
		image: image,
		frameWidth: 50,
		frameHeight: 37,
		animations: {
			// create a named animation: walk
			walk: {
				frames: '0..5', // frames 0 through 9
				frameRate: 15,
			},
		},
	});

	let sprite = Sprite({
		x: 100,
		y: 100,
		anchor: { x: 0.5, y: 0.5 },

		// required for an animation sprite
		animations: spriteSheet.animations,
	});

	// use kontra.gameLoop to play the animation
	let loop = GameLoop({
		update: function (dt) {
			if (keyPressed('left')) {
				sprite.x -= speed;
			}
			if (keyPressed('right')) {
				sprite.x += speed;
			}
			if (keyPressed('space')) {
				sprite.y -= speed;
			}

			sprite.update();
		},
		render: function () {
			sprite.render();
		},
	});

	loop.start();
};
