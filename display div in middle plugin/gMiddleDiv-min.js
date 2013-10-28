/* 
gMiddleDiv

Created by Gabriel Gheorghian
This function takes a div which contains a form
and centers it with black background around it.
Clicking on the black background will close the form
and the div.

It requires a button with an id of middleDivCancel
inside the form.
The css for the div will be left up to the user.
*/
(function($){$.fn.extend({gMiddleDiv:function(options){return this.each(function(){var o=options;var display=$(this);display.css({"position":"absolute","z-index":"1001"}).css("top",Math.max(0,(($(window).height()-display.outerHeight())/2)+$(window).scrollTop())+"px").css("left",Math.max(0,(($(window).width()-display.outerWidth())/2)+$(window).scrollLeft())+"px");jQuery('<div/>',{id:'fwfawbfkjwbfkafe',title:'close',}).appendTo('body');$("#fwfawbfkjwbfkafe").css({'position':"absolute",'top':"0px",'left':"0px",'background-color':"#DEDEDE",'position':'fixed','height':"100%",'width':"100%",'z-index':"1000",'opacity':"0.8",'filter':"alpha(opacity=80)"}).click(function(){$('#middleDivCancel').trigger('click');});$('#middleDivCancel').click(function(){display.hide();var theForm=display.find('form')[0].reset();$("#fwfawbfkjwbfkafe").hide().remove();});display.fadeIn();});}});})(jQuery);

