
function setup() {
	createCanvas(innerWidth, innerHeight)
	frameRate(24)
	upper = 60
	colorMode(HSB, upper, upper, upper)
	// hue = 0
	x = 0
	y = 0

	direction = 1
	waddleSpeed = 4

	waddleAngle = 0
	currentWaddleDirection = 1

	flipperAngle = 0
	flipperDirection = 1

	size = 100
}

function changeDirection(){
	direction = direction  * -1
}

function changeWaddleDirection(){
	currentWaddleDirection = currentWaddleDirection * -1
}

function changeFlipperDirection(){
	flipperDirection = flipperDirection * -1
}

function draw() {
	
	translate(width / 2, height / 2)

	background(frameCount % upper, upper/2, upper/2)
	// for (let i = 0; i < 1; i++){
		// size = random(30, 100)
		
		dir = int(random(0, 5))
		// x = 0
		// x = random(-width/2 + size, width/2 - size)
		
		// WADDLE SPEED
		x = x + (waddleSpeed * direction)
		if (x >= width/2 - size){
			x = width/2 - size
			changeDirection()
		} else if (x <= -width/2 + size){
			x = -width/2 + size
			changeDirection()
		}

		if (random() > .99){
			changeDirection()
		}		

		// WADDLE ANGLE
		waddleAngle = waddleAngle + (2 * currentWaddleDirection)
		if (waddleAngle >= 10){
			waddleAngle = 10
			changeWaddleDirection()
		} else if (waddleAngle <= -10){
			waddleAngel = -10
			changeWaddleDirection()
		}

		if (random() > .99){
			changeWaddleDirection()
		}	

		// WADDLE ANGLE
		flipperAngle = flipperAngle + (3 * flipperDirection)
		if (flipperAngle >= 50){
			flipperAngle = 50
			changeFlipperDirection()
		} else if (flipperAngle <= -10){
			flipperAngle = -10
			changeFlipperDirection()
		}

		if (random() > .99){
			changeFlipperDirection()
		}	

		drawPenguin(x, y, size, dir, waddleAngle, flipperAngle)
}

function drawPenguin(x, y, size, dir, wAngle, fAngle) {
	push()
	noStroke()
	fill(0)
	translate(x,y)

	// waddle
	angleMode(DEGREES)
	rotate(wAngle)

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
	rotate(fAngle)
	triangle(0,(size/4), 0,0-(size/4), (size),0)
	pop()

	// fill("pink")
	push()
	translate(x0-d0, size/4*3)
	angleMode(DEGREES)
	rotate(180)
	rotate(-fAngle)
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




