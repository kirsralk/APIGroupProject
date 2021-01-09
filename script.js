// Countdown line on main page
var countDownDate = new Date("May 5, 2021 00:00:01").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

// Display the result in the element with id="countdown"
document.getElementById("countdown").innerHTML = "<b>" + days + " Days until Cinco de Mayo 2021!" + "</b>";
});

// Function to show results of taco search
function addTacoResult() {
  // alert("This function runs");
  var searchTerm = $("#tacoSearch").val().trim();
  $("#searchHead").text("Taco Search Results");
  $('#searchRes').show(500);
  $('#searchTerm').text(searchTerm);
};

$("#tacoBtn").on("click",function(){
addTacoResult();
});

// Function to show results of cocktail search
function addCocktailResult() {
  // alert("This function runs");
  var searchTerm = $("#cocktailSearch").val().trim();

  $("#searchHead").text("Cocktail Search Results");
  $('#searchRes').show(500);
  $('#searchTerm').text(searchTerm);
};

// Event listener for click of Cocktail Search Button
  $("#cocktailBtn").on("click",function(){
    addCocktailResult();
  });

//Main Process
//Function to populate a random Taco
function populateRandomTaco(queryRandomTaco) {
  $.ajax({
    url:queryRandomTaco,
    method: "GET"
  }).done(function(tacoData) {
        var tacoDiv = $('<div>');
        var tacoName = $('<p>');
        tacoName.text(tacoData.title);        
        var pRandomTaco=$('<p>');
        pRandomTaco.html(tacoData.instructions);
        var tacoImg = tacoData.image;

        // Create a new <h4> tag to display the drink's title
		    var strTaco = $('<h4>');
		    strTaco.text(tacoData.title);
		    strTaco.addClass("subtitle is-4");
        
        // Appending new html element created
         $("#panelC").append(tacoDiv);
         tacoDiv.append(strTaco);
         $("#cocktailImg").attr("src", tacoImg);
         $("#cocktailImg").show();
         tacoDiv.append(pRandomTaco);
         console.log(tacoData);
        //console.log(tacoData.instructions);
      });
};

//Function to populate the Most Popular Cocktail
$("#popCocktail").on("click",function(){
	$("#panelC").empty();
	popularCocktail(queryURLPC);
	$(".panel-heading").text("Most Popular Cocktail");
	$('.popCocktailH-S').show(500);
});

$("#popTaco").on("click",function(){
	$('.popCocktailH-S').show(500);
  $("#panelC").empty();
  generateRandomId();
  console.log(idTaco);
  //Query url for random Taco
  var queryURLRT="https://api.spoonacular.com/recipes/"+idTaco+"/information?apiKey="+ apiKey + "&includeNutrition=true";
	populateRandomTaco(queryURLRT);
	$(".panel-heading").text("Here is your Taco");
	$("#cocktailImg").hide();
});

//
$("#alcoholBtn").on("click",function(){
  $("#resHere").empty();
  getCocktailByPopularAlcohol()
	$('#searchRes').show(500);
});

//Close Panel for Most Popular cocktail or Random TACO
$("#closePanel").on("click",function(){
  $('.popCocktailH-S').hide(1000);
});
  
//Save as Favorite
$("#closePanel").on("click",function(){
  $('.popCocktailH-S').hide();
});


// ENTER KEY SEARCH
// Get the input field
var input = document.getElementById("cocktailSearch");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("cocktailBtn").click();
  }
});

