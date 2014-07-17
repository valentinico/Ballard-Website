// JavaScript Document

<!-- scrollr inicializacion si es desktop-->

var device = navigator.userAgent
if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i))
 { 
	$(function(){<!-- Si es un mobile, solo activa un desplazamiento suave-->

		 $('a[href*=#]').click(function() {
	
		 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			 && location.hostname == this.hostname) {
	
				 var $target = $(this.hash);
	
				 $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	
				 if ($target.length) {
	
					 var targetOffset = $target.offset().top;
	
					 $('html,body').animate({scrollTop: targetOffset}, 1000);
	
					 return false;
	
				}
	
		   }
	
	   });
	
	});
 

}
else
{	<!-- Si es desktop, activa skrollr con todas sus funciones-->
	setTimeout(function() {
		var s = skrollr.init();
		
		skrollr.menu.init(s, {
		animate: true,
		duration: 1000,
		easing: 'sqrt'
		})
		
	}, 500);
	
}


<!-- Preloader -->

//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow':'visible'});
	})
//]]>



<!-- toggle bar -->

$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
	$('.row-offcanvas').toggleClass('active')
  });
});
    
    
    