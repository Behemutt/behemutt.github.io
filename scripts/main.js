/**
 * @author Andre Kishimoto
 */

document.addEventListener('DOMContentLoaded', initialize);

var canvas = null;
var context = null;

var sprite = null;		

var COS_MULTIPLIER = 50;
var SIN_MULTIPLIER = 50;
var currentDeg = 0;

var MovementAxis =
{
	X_AXIS: 1,
	Y_AXIS: 2,
	BOTH_AXES: 3,
	MAX_VALUE: 3,
};
var currentMovement = MovementAxis.BOTH_AXES;

function initialize()
{
	canvas = document.getElementById('gameCanvas');
	if (canvas != null)
		context = canvas.getContext('2d');

	sprite = new Sprite(context, Constants.get('SPRITE_IMAGE'));

	canvas.addEventListener('mouseup', onMouseUp, false);
	
	setInterval(gameLoop, Constants.get('FPS'));
}

function goFullScreen()
{
	if (canvas.webkitRequestFullScreen)
		canvas.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	else if (canvas.mozRequestFullScreen)
		canvas.mozRequestFullScreen();
}

function onMouseUp(event)
{
	if (event.which === Constants.get('MOUSE_LEFT'))
	{
		++currentMovement;
		if (currentMovement > MovementAxis.MAX_VALUE)
			currentMovement = MovementAxis.X_AXIS;
	}
	else if (event.which === Constants.get('MOUSE_MIDDLE'))
	{
		goFullScreen();
	}
}

function clearCanvas()
{
	context.fillStyle = Constants.get('COLOR_GRAY');
	context.fillRect(0, 0, Constants.get('CANVAS_WIDTH'), Constants.get('CANVAS_HEIGHT'));
}

function updateImage()
{
	currentDeg += Constants.get('STEP_DEG');
	if (currentDeg > Constants.get('MAX_DEG'))
		currentDeg = 0;
	
	sprite.setXY(Constants.centerX(sprite.getWidth()), Constants.centerY(sprite.getHeight()));
	if (currentMovement & MovementAxis.X_AXIS)
		sprite.incX(Math.cos(Constants.degToRad(currentDeg)) * COS_MULTIPLIER);
	if (currentMovement & MovementAxis.Y_AXIS)
		sprite.incY(Math.sin(Constants.degToRad(currentDeg)) * SIN_MULTIPLIER);
}

function drawImage()
{
	sprite.draw();
}

function drawInfo()
{
	context.fillStyle = Constants.get('COLOR_WHITE');
	
	context.fillText('LMB: switch movement', 2, 10);
	context.fillText('MMB: fullscreen', 2, 20);
	
	context.fillText('X-axis: ' + (currentMovement & MovementAxis.X_AXIS ? 'on' : 'off'), 2, 40);
	context.fillText('Y-axis: ' + (currentMovement & MovementAxis.Y_AXIS ? 'on' : 'off'), 2, 50);
}

function gameLoop()
{
	clearCanvas();

	updateImage();
	drawImage();
	
	drawInfo();
}