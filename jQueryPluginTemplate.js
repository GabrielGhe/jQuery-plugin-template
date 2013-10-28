(function($){
    $.fn.extend({ 

        pluginName: function(options) {
			
            var defaults = {
                padding: 20
            }
			
            var options =  $.extend(defaults, options);
			
            return this.each(function() {
				var o = options;
			
				$(this).fadeOut(o.padding);
            });
        }
    });       
})(jQuery);