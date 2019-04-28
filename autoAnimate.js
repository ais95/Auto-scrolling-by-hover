			//Vertical scrolling animation
			$(document).ready(function(){
				//var vAheight = $('.vAnimate').height();
				//var vIheight = $('.vAnimate>.vItem').height();
				//console.log('container height '+vAheight+'px');
				
				$(".vAnimate").mouseover(function(){
					var vAheight = $(this).height();
					var vIheight = $(this).find('.vItem').height();
				  $(this).find(".vItem").css("top",-vIheight);
				  $(this).find(".vItem").css("margin-top",vAheight);
				});
				
				$(".vAnimate").mouseout(function(){
				  $(this).find(".vItem").css("top",'0');
				  $(this).find(".vItem").css("margin-top",'0');
				});
			});
			
			//Horizontal scrolling animation
			$(document).ready(function(){
				//var hAwidth = $('.hAnimate').width();
				//var hIwidth = $('.hAnimate>.hItem').width();
				//console.log('container width '+hAwidth+'px');
				
				$(".hAnimate").mouseover(function(){
					var hAwidth = $(this).width();
					var hIwidth = $(this).find('.hItem').width();
				  $(this).find(".hItem").css("left",-hIwidth);
				  $(this).find(".hItem").css("margin-left",hAwidth);
				});
				
				$(".hAnimate").mouseout(function(){
				  $(this).find(".hItem").css("left",'0');
				  $(this).find(".hItem").css("margin-left",'0');
				});
			});