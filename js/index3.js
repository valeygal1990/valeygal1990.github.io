$(document).ready(function() {

	$('.accordion').on('click','accordion-control',function(e){ //when clicked
		event.preventDefault();//Prevent default action of button
		$(this) // Get the element the user clicked on
			.next('.accordion-panel') //Select following panel
			.not(':animated')//If it is not currently animating
			.slideToggle();//Use slide toggle to show or hide it


	});
//below is the activity duration slider
	// var range = $('#activityDuration');

	$('#activityDuration').slider({
		range : true,
		min:0,
		max:24,
		values:[''],
		slide:function(event,ui){
			$('#activityDuration').val('$' + ui.values[0]) + '- $' + ui.values[1];
		}

	});
	$('#activityDuration')
		.val('$' + $('#activityDuration').slider('values', 0)
		+ '-$') + $('#activityDuration').slider('values', 1);
});

