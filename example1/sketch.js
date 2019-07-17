
function setup() {
	createCanvas(innerWidth, innerHeight)
	frameRate(10)
	upper = 60
	colorMode(HSB, upper, upper, upper)
	// hue = 0
}

function draw() {
	
	translate(width / 2, height / 2)

	background(frameCount % upper, upper, upper)
	for (let i = 0; i < 20; i++){
		size = random(30, 100)
		dir = int(random(0, 5))
		x = random(-width/2 + size, width/2 - size)
		y = 0
		drawPenguin(x, y, size, dir)
	}
	

	// hue += 1
	// if (hue >= 100) {
	// 	hue = 0
	// } else {
	// 	hue += 1
	// }
}

function drawPenguin(x, y, size, dir) {
	push()
	noStroke()
	console.log(dir)
	fill(0)

	// body
	circle(x, y, size)
	circle(x, y + size, size * 1.25)

	// eyes
	fill("white")
	x0 = x - size * 0.1
	x1 = x + size * 0.1
	d0 = size * 0.15
	circle(x0, y + size * 0.1, d0)
	circle(x1, y + size * 0.1, d0)

	// pupils
	fill("green")
	downXL = x0
	downYL = y + size * 0.14
	downXR = x1
	downYR = y + size * 0.14

	centerXL = x0
	centerYL = y + size * 0.1
	centerXR = x1
	centerYR = y + size * 0.1

	rightXL = x0 + size * 0.04
	rightYL = y + size * 0.1
	rightXR = x1 + size * 0.04
	rightYR = y + size * 0.1

	leftXL = x0 + size * 0.04
	leftYL = y + size * 0.1
	leftXR = x1 + size * 0.04
	leftYR = y + size * 0.1

	upXL = x0
	upYL = y+ d0 * .5
	upXR = x1
	upYR = y+ d0 * .5

	if (dir === 0){
		circle(downXL, downYL, d0 * .5)
		circle(downXR, downYR, d0 * .5)
	} else if (dir === 1){
		circle(centerXL, centerYL, d0 * .5)
		circle(centerXR, centerYR, d0 * .5)
	} else if (dir === 2){
		circle(upXL, upYL, d0 * .5)
		circle(upXR, upYR, d0 * .5)
	} else if (dir === 3){
		circle(leftXL, leftYL, d0 * .5)
		circle(leftXR, leftYR, d0 * .5)
	} else if (dir === 4){
		circle(rightXL, rightYL, d0 * .5)
		circle(rightXR, rightYR, d0 * .5)
	}

	// nose
	fill("orange")
	beginShape()
	x2 = (x0 + x1) / 2
	vertex(x2, y + size * 0.35)
	vertex((x0 + x2) / 2, y + size * 0.2)
	vertex((x1 + x2) / 2, y + size * 0.2)
	endShape(CLOSE)

	// tummy
	fill("white")
	circle(x2, y + size * 1.2, size * 0.8)

	pop()
}




