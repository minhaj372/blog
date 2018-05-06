
$(function() {
	$("body").easeScroll();

	$(".smooth-link").click(function() {
			let $this = $(this),
					$target = $($this.attr("href"));
					// $('.smooth-link').parent().removeClass('active');
					// $this.parent().addClass('active');
			$("html, body").animate({
				scrollTop: $target.offset().top - ($(".navbar-dark").outerHeight() - 1)
			});

			return false;
		});


	$(window).scroll(function() {
		let $this = $(this);
		$(".section").each(function() {
			if($this.scrollTop() >= ($(this).offset().top - $(".navbar-dark").outerHeight())) {
				$(".smooth-link").parent().removeClass("active");
				$(".smooth-link[href='#"+$(this).attr("id")+"']").parent().addClass('active');
			}
		});
	});
});























