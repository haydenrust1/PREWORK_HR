$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})

var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
$("#funText").css("color", "orange")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})


$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})

// // When the factButton is clicked...
// $("#factButton").on("click", function() {
// 	// We generate a random number between 0 and 4 (the number of facts in the catFactArray)
// 	var number = Math.floor((Math.random() * catFactArray.length));
// 	// We display the fact from the catFactArray that is in the random position we just generated.
// 	$("#factText").text(catFactArray[number])
// })

// // This array holds all of our Grumpy Cat facts!
// var catFactArray = ["Grumpy was born on April 4, 2012", "Grumpy's unique look comes from feline dwarfism and an underbite", "Grumpy has a brother named Pokey", "Her favorite Friskies food is Savory Shreds"]

// // When the textPink button is pressed...
// $("#textPink").on("click", function() {
// 	// Change funText to pink.
// 	$("#funText").css("color", "pink")
// })

// // When the textOrange button is pressed...
// $("#textOrange").on("click", function() {
// 	// Change funText to orange.
// 	$("#funText").css("color", "orange")
// })

// // When the textGreen button is pressed...
// $("#textGreen").on("click", function() {
// 	// Change funText to green.
// 	$("#funText").css("color", "green")
// })


// // When the boxGrow button is clicked... 
// $("#boxGrow").on("click", function() {
// 	// Increase the size of the box.
// 	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
// })

// // When the boxShrink button is clicked...
// $("#boxShrink").on("click", function() {
// 	// Decrease the size of the box.
// 	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
// })