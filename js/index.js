$(document).ready(function() {

	//I think I will save all the forms in an array..

//User selects the date from the dropdown form
//User clicks on the next button
//Date is saved in a variable and will later be inerted into the final page form
//date form is hidden
//child's name form is shown
//user fills in child's name
var forms = [
	'#caregiverForm', 
	'#childsNameForm', 
	'#todaysDate', 
	'#activity', 
	'#notesForTheDay', 
	'#activityDuration'
];

var currentIndex = 0;


//User clicks on the next button
//value of the input field is saved in a variable to be inserted later into the final form


	$('#mainForms').click(displayNextForm);

 function displayImageSelections(){
 	event.preventDefault();
 	$('this').slideDown();
 	$('this').hide();
 	$('this').show['']

 	// Next button: When you cick the skip button, display the next form in the array.

$('.btn').click(function(){
	var action = $(this).val();

	if (action == "Skip") {
		if (currentIndex < (forms.length - 1) ) {
		//Go to the next image.

		currentIndex = currentIndex + 1;

	} else {
		currentIndex = 0;
	}

		$('#image-to-vote-on').attr(forms[currentIndex]);
		}
	}

	// Back buttton;  When you click the back button, display the previous form in the array.

	// $('.btn').click(function(){
	// 	var action = $(this).val();

		if (action == "Back"){

			//make sure currentIndex is not on the first image

			if currentIndex > 0) {
			// go to previous image.

			currentIndex = currentIndex - 1;

		} else {
			currentIndex = forms.lenth - 1;
		}

			$('#image-to-vote-on').attr(forms[currentIndex]);
		}
	}

});