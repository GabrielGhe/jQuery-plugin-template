/* 
Created by Gabriel Gheorghian
This function takes a div which contains a form
and centers it with black background around it.
Clicking on the black background will close the form
and the div.
It requires a button with an id of middleDivCancel
inside the form.
The css for the div will be left up to the user.
*/
(function($){
    $.fn.extend({ 

        gMiddleDiv: function(options) {
			
            var defaults = {
            }
			
            var options =  $.extend(defaults, options);
			
            return this.each(function() {
				var o = options;
				var display = $(this);
				
				//changes the css
				display.css({
					"position": "absolute",
					"z-index": "1001"
				})
				.css("top", 
						Math.max(0,(($(window).height() - 
						display.outerHeight()) / 2) + 
                        $(window).scrollTop()) + "px")
				.css("left", 
					Math.max(0, (($(window).width() - 
					display.outerWidth()) / 2) + 
                    $(window).scrollLeft()) + "px");
				
				//creates fwfawbfkjwbfkafe div
				jQuery('<div/>', {
					id: 'fwfawbfkjwbfkafe',
					title: 'close',
				}).appendTo('body');
				
				//gets the fwfawbfkjwbfkafe div and gives it css
				$("#fwfawbfkjwbfkafe").css({
					'position': "absolute",
					'position': "fixed",
					'top': "0px",
					'left': "0px",
					'background-color': "#DEDEDE",
					'height': "100%",
					'width': "100%",
					'z-index': "1000",
					'opacity': "0.8",
					'filter': "alpha(opacity=80)"})
				.click(function(){
					$('#middleDivCancel').trigger('click');
				});
				
				/*assigning click to the middleDivCancel button
					which clears the form and turns page back to
					normal.
				*/
				$('#middleDivCancel').click(function(){
					display.hide();
					var theForm = display.find('form')[0].reset();
					$("#fwfawbfkjwbfkafe").hide().remove();
				});
				
				display.fadeIn();
            });
        }
    });       
})(jQuery);

