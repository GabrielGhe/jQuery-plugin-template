// http://www.authenticsociety.com/blog/jQueryPluginTutorial_Beginner
// http://www.queness.com/post/112/a-really-simple-jquery-plugin-tutorial

//You need an anonymous function to wrap around your function to avoid conflict
(function($){
 
    //Attach this new method to jQuery
    $.fn.extend({ 
         
        //This is where you write your plugin's name
        somePopUp: function(options) {
			
			//Set the default values, use comma to separate the settings, example:
            var defaults = {
                padding: 20,
				fade: "slow"
            }
			
            var options =  $.extend(defaults, options);
			
            //Iterate over the current set of matched elements
            return this.each(function() {
				var o = options;
			
				$(this).fadeOut(o.fade).fadeIn(o.fade);
				
				$(this).click(function(){
					$(this).animate({
						opacity: '-=0.10',
						height: '+=10px',
						width: '+=10px',
					  }, 1000);
				});
                //code to be inserted here
             
            });
        }
    });
     
//pass jQuery to the function, 
//So that we will able to use any valid Javascript variable name 
//to replace "$" SIGN. But, we'll stick to $ (I like dollar sign: ) )       
})(jQuery);