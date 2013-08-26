function fullHeight() {
	$(".block").each(function() {
		var $block = $(".block");
		var heightBlock = Math.floor($(window).height() - 100);
		$block.css("height", heightBlock);
		$centerBlock = $(".block").children(".center-block");
		var heightCenterBlock = Math.floor(heightBlock - 100);
		$centerBlock.css("height", heightCenterBlock);
	});

}

function verticalAlignCenter() {
	$(".vac").each(function() {
		var $vac = $(this);
		var $parentVac = $vac.parent("div");
		var vacPaddingTop = Math.floor(($parentVac.height() - $vac.height()) / 2);
		$vac.css("padding-top", vacPaddingTop);
	});
}

function aap(){
	var viewportW = $(window).width();
	var $aapContainer = $('.aap');
	var aapNb = $('.aap-elmt').length;

	$('.aap-elmt').css('width', viewportW);

	$aapContainer.css('width', viewportW * aapNb);
}

// Hack to reduce stroke of top bubbles project
function projectBubbleStroke() {
	$('.bubble-project.top').each(function() {
		var projectH = $(this).parents('.project-item').find('.content').height();
		$('span', this).css('bottom', projectH + 5);
	});
}

// Trigger function only when all assets are loaded
$(window).load(function() {
	projectBubbleStroke();
});

$(document).ready(function(){
	fullHeight();
	verticalAlignCenter();
	aap();

	$(window).resize(function() {
		fullHeight();
		verticalAlignCenter();
		aap();
		projectBubbleStroke();
	})

	// Video incrustation script
	$('.play-video').click(function() {
		var heightBlock = $('.home-heading .content').height();
		var widthBlock = $('.home-heading .content').width();

		var vidLang = $(this).attr('id');
		var vidId;

		switch(vidLang) {
			case 'video-fr':
			vidId = "73131022"
			break;
			case 'video-en':
			vidId = "73131023"
			break;
		}
		
		//var tmp = $('.home-heading .content .vac').detach();

		$('.home-heading .content').html('<iframe src="//player.vimeo.com/video/' + vidId + '?title=0&amp;byline=0&amp;portrait=0&amp;color=3399FF&amp;autoplay=1" width="' + widthBlock + '" height="' + heightBlock + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	})

	// Initialize slides effect index
	if ($('ul.three-panels').length != 0) {
		$('ul.three-panels').kwicks({
       	    maxSize : '50%',
            behavior: 'menu'
        });
	}

	//scrollTo function
	$('.scrolldown').click(function(e) {
		e.preventDefault();
		var hash = $(this).attr('href');

		if (hash != '#') {
			$.scrollTo( $(hash), 800, {offset: -100, axis: 'y'});
		}
	});

	$('.ctrl-slide').click(function(e) {
		e.preventDefault();
		var hash = $(this).attr('href');

		if (hash != '#') {
			$.scrollTo( $(hash), 800, {axis:'x'});
		}
	});

	// Partners-wall hover b&w to color function
	$('.partners-wall ul li a').hover(function() {
		$('img.nb-logo', this).stop().fadeTo(200, 0);
	}, function() {
		$('img.nb-logo', this).stop().fadeTo(200, 1);
	});
});

