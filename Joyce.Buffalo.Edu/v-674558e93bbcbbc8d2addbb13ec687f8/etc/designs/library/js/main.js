    $(function(){
        
    	$('.slidedeck2h').find('.img-960 img, picture source').each(function () {
            var imgW = '608';
            var imgH = '350';
            if ($(this).attr('srcset')) {
	        	$(this).attr('srcset',
	            	$(this).attr('srcset')
	                	.replace('960.400', imgW + '.' + imgH)
	                );
	            $(this).attr('srcset',
	            	$(this).attr('srcset')
	                	.replace('1920.800', imgW*2 + '.' + imgH*2)
	                );
            }
			if ($(this).attr('data-srcset')) {
                $(this).attr('data-srcset',
                    $(this).attr('data-srcset')
                        .replace('960.400', imgW + '.' + imgH)
                    );
                $(this).attr('data-srcset',
                    $(this).attr('data-srcset')
                        .replace('1920.800', imgW*2 + '.' + imgH*2)
                    );
            }
        });
    });




$(document).on('click', '.tabs > li > a', function(e) {
	var $parent = $(this).parent();
	if ($parent.is('.selected')) {
		e.preventDefault();
		// mobile support
		$(this).closest('ul').addClass('active');
	} else {
		var target = $(this).attr('href');
		$(target).siblings().removeClass('selected');
		$(target).addClass('selected');
		
		$parent.siblings().removeClass('selected');
		$parent.addClass('selected');
		// mobile support
		$(this).closest('ul').removeClass('active');
	}
});