jQuery(function($) {

	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 10000,
			pause: false
		});
	});

  
  function showFormNotice()
  {
     $("#form-notice").show(); 
     $("#contactForm")[0].reset();
			setTimeout(function(){$("#form-notice").slideToggle();},2000);
  } 

	//Ajax contact
	$('#submit-form').click(function () {
    $.ajax({
      url: "//forms.brace.io/info@genencore.com",
      method: "POST",
      data: {
              message: $("#message").val(),
              name: $("#name").val(),
              phone: $("#phone").val(),
              email: $("#email").val(),
              _replyto: $("#email").val(),
              company: $("#company").val()
      },
      dataType: "json",
      success: function(data){ showFormNotice(); }
    });

  //  $this = $(this);
	//	$.post($(this).attr('action'), function(data) {
	//		$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
	//	},'json');
	//	return false;
	});

	//smooth scroll
	$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});

	//scrollspy
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	})

	//Isotope
	$(window).load(function(){
		$portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows'
		});
		$portfolio_selectors = $('.portfolio-filter >li>a');
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
	$(".navbar-default .navbar-nav li a").click(function(){
		$(".navbar-collapse").slideToggle();
	});
	$(".navbar-toggle").click(function(){
		$(".navbar-collapse").slideToggle();
	});

});
