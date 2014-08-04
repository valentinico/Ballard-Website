var currOption='collapseOne';currIconType='';

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





/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
  
    // Toggle Nav on Click
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });

  
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}


<!-- more and less -->

    
function changeIcon(cont) {
    var iconType='＋';
    $('.panel .panel-heading .more').html('＋');
    if(currOption != cont){    
        $('.panel .panel-heading .'+cont).html('－');
        iconType='－';
    }else if(currIconType==iconType){
        if(currIconType == '＋'){
            $('.panel .panel-heading .'+cont).html('－');iconType='－';
        }else{
            $('.panel .panel-heading .'+cont).html('＋');iconType='＋';
        }
    }
    currOption = cont;
    currIconType=iconType;
}    
    
    
function changeNavIcon() {
    $( "#nav_arrow h3" ).toggle();
}    
    