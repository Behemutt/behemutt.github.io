/**
 * @author Andre Kishimoto
 */

function Sprite(context, image)
{
	this.context = context;

	this.sprite = new Image();
	this.sprite.src = image;

	this.x = 0;
	this.y = 0;
}

Sprite.prototype =
{
	constructor: Sprite,
	
	getWidth: function()
	{
		return this.sprite.width;
	},
	
	getHeight: function()
	{
		return this.sprite.height;
	},
	
	getX: function()
	{
		return this.x;
	},
	
	getY: function()
	{
		return this.y;
	},
	
	setX: function(x)
	{
		this.x = x;
	},
	
	setY: function(y)
	{
		this.y = y;
	},
	
	setXY: function(x, y)
	{
		this.x = x;
		this.y = y;
	},
	
	incX: function(x)
	{
		this.x += x;
	},
	
	incY: function(y)
	{
		this.y += y;
	},
	
	draw: function()
	{
		this.context.drawImage(this.sprite, this.x, this.y);
	}
}
