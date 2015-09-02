/**
 * @author Andre Kishimoto
 */

var Constants = function ()
{
	var privateConstants =
	{
		'COLOR_BLACK': '#000',
		'COLOR_WHITE': '#fff',
		'COLOR_GRAY': '#555',
		
		'KEY_UP': 38,
		'KEY_DOWN': 40,
		'KEY_LEFT': 37,
		'KEY_RIGHT': 39,
		
		'MOUSE_LEFT': 1,
		'MOUSE_MIDDLE': 2,
		'MOUSE_RIGHT': 3,
		
		'FPS': 30,
		
		'CANVAS_WIDTH': 512,
		'CANVAS_HEIGHT': 512,
		
		'SPRITE_IMAGE': 'media/sprite.png',
		
		'MAX_DEG': 360,
		'STEP_DEG': 6,
	};
	
	var returnConstant = function(constantName)
	{ 
		return privateConstants[constantName];
	};
	
	var degToRadFunction = function(degValue)
	{
		return degValue * (Math.PI / 180.0);
	}
	
	var radToDegFunction = function(radValue)
	{
		return radValue * (180.0 / Math.PI);
	}
	
	var centerXFunction = function(imageWidth)
	{
		return (privateConstants['CANVAS_WIDTH'] - imageWidth) * 0.5;
	}
	
	var centerYFunction = function(imageHeight)
	{
		return (privateConstants['CANVAS_HEIGHT'] - imageHeight) * 0.5;
	}
	
	var exposed =
	{
		get: returnConstant,
		degToRad: degToRadFunction,
		radToDeg: radToDegFunction,
		centerX: centerXFunction,
		centerY: centerYFunction,
	};
	
	return exposed;
}();
