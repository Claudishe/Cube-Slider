var debug = true;

(function($)
{
    $.vari = "$.vari";
    $.fn.vari = "$.fn.vari";

	var speed = 3000;
	var stilltime = 5000;
	
    // $.fn is the object we add our custom functions to
    $.fn.cubeSlider = function()
    {
		
        return this.each(function()
        {
			var index = 0;
			var Contents;
			var _cube = $(this);
			
			function SwitchForward (){
				
				index++;
				index = index%Contents.length ;
				console.log(index);

				
				$(_cube).append("<div id='curtain'></div");
			
				$("#curtain").animate({
					width:'600px',
					opacity:0.5
				}, speed, function(){
					$("#curtain").fadeOut("300",function(){
						$(_cube).html(Contents[index]);
					});
					
				});
				
				console.log($(this));	
			};
			
			function SwitchBackward (){

				index--;
				if(index <0)index = Contents.length-1
				index = index%Contents.length ;
				console.log(index);

				$(_cube).html(Contents[index]);
				console.log($(this));	
			};
			
			
			$(this).before("<div id='cube-slider-btn-previous'></div>");
			$(this).after("<div id='cube-slider-btn-next'></div>");
			$("#cube-slider-btn-next").click(function(){
				SwitchForward();
			});
			$("#cube-slider-btn-previous").click(function(){
				SwitchBackward();
			});	
			
			Contents = $(this).find("div");
			
			$(this).html(Contents[0]);
			
			(debug)?console.log(Contents[1]):"";
			
         	  

        });

    };


})(jQuery);


