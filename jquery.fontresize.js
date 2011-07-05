// Version 1.0
(function($){
	$.fn.fontResize = function(options) {
		
		var defaults = {
			percent: 3.75,
			ratio: null,
			min: null,
			max: null
		};
	
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			var obj = this;
		
			var originalWinWidth = $(window).width();
			var originalFontSize = $(window).width() * options.percent / 100;
			
			if (options.max != null && originalFontSize > options.max) originalFontSize = options.max;
			if (options.min != null && originalFontSize < options.min) originalFontSize = options.min;
		
			$(obj).css("font-size", originalFontSize);
		
			$(window).bind("resize", {obj:obj}, function(event){  
				var obj = event.data.obj;
				
				var winWidth = $(window).width();
				var widthDiff = winWidth - originalWinWidth;
				
				if (options.ratio == null) {
					var newFontSize = winWidth * options.percent / 100;
				} else {
					if (widthDiff > 0) {
						var newFontSize = originalFontSize + Math.round(widthDiff / options.ratio);
					} else {
						var newFontSize = originalFontSize - Math.round(Math.abs(widthDiff) / options.ratio);
					}
				}
				
				if (options.max != null && newFontSize > options.max) newFontSize = options.max;
				if (options.min != null && newFontSize < options.min) newFontSize = options.min;
				
				$(obj).css("font-size", newFontSize);
			});  
		});
	};
})(jQuery);