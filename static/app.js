$(document).ready(function() {
	console.log('power overwhelming');

	$('#fold').waypoint(function(direction){
		if (direction == "down") {
			console.log('triggered down');
			$('.nav').addClass('sticky');
		} else {
			$('.nav').removeClass('sticky');
			console.log('triggered up');
		}
	});

	$('.js--scroll-to-fold').click(function(){
		$('html, body').animate({scrollTop: $('#fold').offset().top}, 1000);
	});

/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/
















});
