
function setup() {
	createCanvas(innerWidth, innerHeight)
	frameRate(2)
	upper = 60
	colorMode(HSB, upper, upper, upper)
	// hue = 0
	penguins = []

	penguin = {
		x: 
	}
}

function draw() {
	
	translate(width / 2, height / 2)

	background(frameCount % upper, upper, upper)
	for (let i = 0; i < 100; i++){
		size = random(50, 100)
		drawPenguin(random(-width/2 + size, width/2 - size), random(-5, 5), size)
	}
	

	// hue += 1
	// if (hue >= 100) {
	// 	hue = 0
	// } else {
	// 	hue += 1
	// }
}

function drawPenguin(x, y, size) {
	push()

	noStroke()
	fill(0)

	// body
	circle(x, y, size)
	circle(x, y + size, size * 1.25)

	// eyes
	fill("green")
	x0 = x - size * 0.1
	x1 = x + size * 0.1
	d0 = size * 0.15
	circle(x0, y + size * 0.1, d0)
	circle(x1, y + size * 0.1, d0)

	// nose
	fill("orange")
	beginShape()
	x2 = (x0 + x1) / 2
	vertex(x2, y + size * 0.5)
	vertex((x0 + x2) / 2, y + size * 0.2)
	vertex((x1 + x2) / 2, y + size * 0.2)
	endShape(CLOSE)

	// tummy
	fill("white")
	circle(x2, y + size * 1.2, size * 0.8)

	pop()
}




