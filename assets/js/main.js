;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

			var agent = navigator.userAgent;
			if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1) {
				console.log("ios");
			}
			else {
				console.log("not ios");
					$('#headerwrap').css({backgroundAttachment : 'fixed'});
					$('#subwrap0').css({backgroundAttachment : 'fixed'});
					$('#subwrap1').css({backgroundAttachment : 'fixed'});
					$('#subwrap2').css({backgroundAttachment : 'fixed'});
			}


})(jQuery)
