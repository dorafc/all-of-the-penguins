
function setup() {
	createCanvas(innerWidth, innerHeight)
	frameRate(2)
	upper = 60
	colorMode(HSB, upper, upper, upper)
	// hue = 0
}

function draw() {
	
	translate(width / 2, height / 2)

	background(frameCount % upper, upper, upper)
	for (let i = 0; i < 10; i++){
		size = random(30, 100)
		// size = 100
		dir = int(random(0, 5))
		// x = 0
		x = random(-width/2 + size, width/2 - size)
		// y = 0
		y = random(-height/2 + size, height/2 - size)
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
	fill(0)
	translate(x,y)
	angleMode(DEGREES)
	rotate(random(-30, 30))
	// body
	circle(0, 0, size)
	circle(0, 0 + size, size * 1.25)

	// eyes
	fill("white")
	x0 = 0 - size * 0.1
	x1 = size * 0.1
	d0 = size * 0.15
	circle(x0, 0 + size * 0.1, d0)
	circle(x1, 0 + size * 0.1, d0)

	// pupils
	fill("green")
	downXL = x0
	downYL = 0 + size * 0.14
	downXR = x1
	downYR = 0 + size * 0.14

	centerXL = x0
	centerYL = 0 + size * 0.1
	centerXR = x1
	centerYR = 0 + size * 0.1

	rightXL = x0 + size * 0.04
	rightYL = 0 + size * 0.1
	rightXR = x1 + size * 0.04
	rightYR = 0 + size * 0.1

	leftXL = x0 + size * 0.04
	leftYL = 0 + size * 0.1
	leftXR = x1 + size * 0.04
	leftYR = 0 + size * 0.1

	upXL = x0
	upYL = 0+ d0 * .5
	upXR = x1
	upYR = 0+ d0 * .5

	console.log(dir)
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

	// flippers
	fill("black")
	push()
	translate(x1+d0, size/4*3)
	angleMode(DEGREES)
	rotate(random(-50, 50))
	triangle(0,(size/4), 0,0-(size/4), (size),0)
	pop()

	// fill("pink")
	push()
	translate(x0-d0, size/4*3)
	angleMode(DEGREES)
	rotate(random(130, 230))
	triangle(0,(size/4), 0,0-(size/4), (size),0)
	pop()

	// triangle(x0,y+(size/4), x0,y+(size), x-(size*1.1),y+(size*1.1))


	// nose
	fill("orange")
	beginShape()
	x2 = (x0 + x1) / 2
	vertex(x2, size * 0.35)
	vertex((x0 + x2) / 2, size * 0.2)
	vertex((x1 + x2) / 2, size * 0.2)
	endShape(CLOSE)

	// tummy
	fill("white")
	circle(x2, size * 1.2, size * 0.8)

	pop()
}




