jQuery(function (){
	//jQuery('.gallery').flexslider({controlNav:false});
	initIeFunctions();
	
	var navItems = jQuery('#mainNav li');
	navItems.find('a').click(function (){
		navItems.removeClass('active');
		this.parentNode.className += ' active';
	});
	
	initScrollNav({
		nav:'#mainNav a'
	});
});

function initIeFunctions(){
	if(jQuery.browser.msie){
		createFormValues();
		clearInputs();
	}
}

function createFormValues(){
	jQuery("input[type='text'], textarea").each(function (){
		this.value = jQuery(this).attr('placeholder');
	});
}

function clearInputs(){
	jQuery('input:text, input:password, textarea').each(function(){
		var _el = jQuery(this);
		_el.data('val', _el.val());
		_el.bind('focus', function(){
			if(_el.val() == _el.data('val')) _el.val('');
		}).bind('blur', function(){
			if(_el.val() == '') _el.val(_el.data('val'));
		});
	});
}

function initScrollNav(_options){
	var options = jQuery.extend({
		nav:'#nav a',
		animSpeed:750
	}, _options);
	var window = jQuery('html,body');
	var addingHeight = jQuery("#header").outerHeight(true);
	
	var nav = jQuery(options.nav);;
	nav.each(function (){
		var hold = jQuery(this);
		var block = jQuery(hold.attr('href'));
		if(block.length){
			hold.click(function (){
				var curPos = window.scrollTop();
				var blockPost = block.offset().top - addingHeight;
				
				window.stop().animate({scrollTop: blockPost},{duration: options.animSpeed});
				return false;
			});
		}
	});
}

function pad(num, size) {
    var s = "00000" + num;
    return s.substr(s.length-size);
}

function getRandomPhrase()
{
	var randomStrings =
	[
		'make you call for your mama.',
		'make you want to go back play that game with candies.',
		'make you chill to the bone.',
		'make you wish you were not here.',
		'make you their meal.',
		'take your flesh out of your bones.',
		'break your bones then your soul.',
		'make you lost the match and start all over.'
	];
	return randomStrings[Math.floor(Math.random() * randomStrings.length)];
}