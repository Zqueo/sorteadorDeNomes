// Jquery selects submit button and adds click function to it //
$("#submitBtn").click(function() { 
 // Takes list of names input by user and splits them into an array named 'names' //
  let names = $('#input').val().split('\n');
 // Generates random number the same length as the array created by user input //
  let randomNumber = Math.floor(Math.random()*names.length);
 // Modifies HTML to add the name of the winner by making the random number the number of array item displayed //
  $("#winner").html(names[randomNumber]);
});