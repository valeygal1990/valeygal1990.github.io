$(document).ready(function() {

	//I think I will save all the forms in an array..

//User selects the date from the dropdown form
//User clicks on the next button
//Date is saved in a variable and will later be inerted into the final page form
//date form is hidden
//child's name form is shown
//user fills in child's name
//

$('form').submit(saveValue);

function saveValue() {
	var childsName=$('#childsNameForm').val();

	if childsName ==''{
		event.preventDefault();
		$('#childsNameForm').hide();
    	$('#caregiverform').show();
    	console.log ('#childsNameForm');
    	console.log ('#childsNameForm');
	}
}

//User clicks on the next button
//value of the input field is saved in a variable to be inserted later into the final form


	

});