$(document).ready(function() {

$('.nav.nav-tabs a').click(function () {
  e.preventDefault()
  $(this).tab('show')
})
	
$('#myTabs a').click(function() {
  event.preventDefault();
  $(this).tab('show');
})

$('#myTabs a[href="#profile"]').tab('show'); // Select tab by name
$('#myTabs a:first').tab('show'); // Select first tab
$('#myTabs a:last').tab('show'); // Select last tab
$('#myTabs li:eq(2) a').tab('show'); // Select third tab (0-indexed)

//Clear form field on click

$(".reset").click(function() {
    $(this).('form').find("input[type=text], textarea").val("");
});

// GOAL: Add a new item daily notes list from the form.

    // User types item into the input box
    // User submits
    // Item is added.


    $('#submit.btn').click(function() {
        event.preventDefault();

        // Get what the user typed in.
        var formEntries = $('caregiversName').val();
        console.log(formEntries);


        // Add these form entries to my notes in my HTML
        $('#caregiversName').append('<li><input type="text"> ' + formEntries + '</li>');

        // Clear out my input.
        $('caregiversName').val('');

    });

    



)};