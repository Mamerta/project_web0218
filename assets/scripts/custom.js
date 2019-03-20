"use strict";

// Menu burger

$(document).ready(function(){
	$('.toggle-btn').click(function(){
		$('.nav-list').toggleClass('show');
	});
});


// Image gallery burger - show more, show less

$(document).ready(function(){
	$('.gallery-btn').click(function(e){
		$('.hidden').toggleClass('show');
		$('.show1').toggleClass('hidden1');
			e.preventDefault();
	});
});