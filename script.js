// This will make the selected tag dark and other tag light
function changeClass() { 
      document.getElementById('clickme').className = "selected-tag"; 
      document.getElementById('clickme1').className = "tag";
      document.getElementById('clickme2').className = "tag"; 
      document.getElementById('clickme3').className = "tag"; 
      document.getElementById('clickme4').className = "tag"; 
      document.getElementById('clickme5').className = "tag"; 
      document.getElementById('clickme6').className = "tag"; 
            
} 

function changeClass1() { 
      document.getElementById('clickme').className = "tag"; 
      document.getElementById('clickme1').className = "selected-tag";
      document.getElementById('clickme2').className = "tag"; 
      document.getElementById('clickme3').className = "tag"; 
      document.getElementById('clickme4').className = "tag"; 
      document.getElementById('clickme5').className = "tag"; 
      document.getElementById('clickme6').className = "tag"; 
}

function changeClass2() { 
      document.getElementById('clickme').className = "tag"; 
      document.getElementById('clickme1').className = "tag";
      document.getElementById('clickme2').className = "selected-tag"; 
      document.getElementById('clickme3').className = "tag"; 
      document.getElementById('clickme4').className = "tag"; 
      document.getElementById('clickme5').className = "tag"; 
      document.getElementById('clickme6').className = "tag"; 
}


function changeClass3() { 
      document.getElementById('clickme').className = "tag"; 
      document.getElementById('clickme1').className = "tag";
      document.getElementById('clickme2').className = "tag"; 
      document.getElementById('clickme3').className = "selected-tag"; 
      document.getElementById('clickme4').className = "tag"; 
      document.getElementById('clickme5').className = "tag"; 
      document.getElementById('clickme6').className = "tag"; 
}


function changeClass4() { 
      document.getElementById('clickme').className = "tag"; 
      document.getElementById('clickme1').className = "tag";
      document.getElementById('clickme2').className = "tag"; 
      document.getElementById('clickme3').className = "tag"; 
      document.getElementById('clickme4').className = "selected-tag"; 
      document.getElementById('clickme5').className = "tag"; 
      document.getElementById('clickme6').className = "tag"; 
}


function changeClass5() { 
      document.getElementById('clickme').className = "tag"; 
      document.getElementById('clickme1').className = "tag";
      document.getElementById('clickme2').className = "tag"; 
      document.getElementById('clickme3').className = "tag"; 
      document.getElementById('clickme4').className = "tag"; 
      document.getElementById('clickme5').className = "selected-tag"; 
      document.getElementById('clickme6').className = "tag"; 
}


function changeClass6() { 
      document.getElementById('clickme').className = "tag"; 
      document.getElementById('clickme1').className = "tag";
      document.getElementById('clickme2').className = "tag"; 
      document.getElementById('clickme3').className = "tag"; 
      document.getElementById('clickme4').className = "tag"; 
      document.getElementById('clickme5').className = "tag"; 
      document.getElementById('clickme6').className = "selected-tag"; 
}


// This will filter the event based on tag selected
(function ($) {
    
    $.autofilter = function( options ) {

        var settings = $.extend({
            showClass: 'show',
            htmlAsFilter: false,
            subString: false,
            caseSensitive: false,
            animation: true,
            duration: 0
        }, options );

        $('[data-filter]:not(input)').click(function() {
            if (settings.htmlAsFilter) {
                var filterValue = $(this).html().trim();
            } else {
                var filterValue = $(this).attr('data-filter').trim();
            }

            if (filterValue!='')
                af_filter(filterValue);
            else
                $('[data-tags],[data-to-filter]').fadeIn(settings.duration).addClass(settings.showClass);
        });

        function af_filter(filterValue) {
            $('[data-tags],[data-to-filter]').each(function() {
                var tags = $(this).attr('data-tags');
                var tofilter = Array();
                var valid = false;
                
                if (!settings.caseSensitive) 
                    filterValue = filterValue.toLowerCase();

                if (tags) {
                    tofilter = tags.split(',');
                } else {
                    tofilter.push($(this).html());
                    settings.subString = true;
                }

                if (!settings.caseSensitive) 
                    tofilter = tofilter.map(v => v.toLowerCase());

                if (settings.subString) {
                    tofilter.forEach(function(toFilterOne) {
                        if (toFilterOne.indexOf(filterValue) > -1) {
                            valid = true;
                        }
                    });
                } else {
                    valid = tofilter.includes(filterValue);
                }

                if (valid) {
                    if (settings.animation)
                        $(this).fadeIn(0);
                    
                    $(this).addClass(settings.showClass);
                } else {
                    if (settings.animation)
                        $(this).fadeOut(settings.duration);
                    
                    $(this).removeClass(settings.showClass);
                }

            });
        }
 
    };

}(jQuery));



//-----------------------------------Header scroll back when page is scrolled down--------------------------------------------------

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
    	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	

	
	
  })(jQuery);


//--------------------------------------------------back to top button--------------------------------------------------

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: target.offset().top
			}, 500);
			return false;
		});
});

// -----------------------------------------------------header-----------------------------------------------------//
 $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })