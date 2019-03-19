"use strict";

// Image gallery burger - show more, show less

$(document).ready(function(){
	$('.gallery-btn').click(function(e){
		$('.hidden').toggleClass('show');
		$('.show1').toggleClass('hidden1');
			e.preventDefault();
	});
});

// $(document).ready(function(){
// 	$('.nav-list').click(function(e){
// 		$('.hidden').toggleClass('show');
// 			e.preventDefault();
// 	});
// });
