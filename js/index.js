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
 	$('this').hide();
 	$('this').show['']

 	// Next button: When you cick the name button, display the next form in the array.

$('.btn').click(function(){
	var action = $(this).val();

	if (action == "next") {
		if (currentIndex < (forms.length - 1) ) {
		
		currentIndex = currentIndex + 1;

	} else {
		currentIndex = 0;
	}

		$('form').attr(forms[currentIndex]);
		}
	}

	// Back buttton;  When you click the back button, display the previous form in the array.

	// $('.btn').click(function(){
	// 	var action = $(this).val();

		if (action == "Back"){	

			if currentIndex > 0) {
			
			currentIndex = currentIndex - 1;

		} else {
			currentIndex = forms.length - 1;
		}

			$('form').attr(forms[currentIndex]);
		}
	}

});