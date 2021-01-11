// ----------------------------------------------------------------------------COUNTDOWN TIMER ------------------------------------------------------------------------ //
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


// ---------------------------------------------------------------------- TACO RELATED MAIN PAGE FUNCTIONS ------------------------------------------------------------------------- //

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

// Event listener to display random Taco
$("#popTaco").on("click",function() {
  var queryURLRT= "https://api.spoonacular.com/recipes/" + idTaco + "/information?apiKey=" + apiKey + "&includeNutrition=true";
	$('.popCocktailH-S').show(500);
  $("#panelC").empty();
  generateRandomId();
  populateRandomTaco(queryURLRT);
	$("#cocktailImg").hide();
});


// Function to show results of taco search
function addTacoResult() {
  var searchTerm = $("#tacoSearch").val().trim();
  $("#searchHead").text("Taco Search Results");
  $('#searchRes').show(500);
  $('#searchTerm').text(searchTerm);
};


//Click event  to get a Taco based on user selection
$("#NonVegBtn").on("click",function() {
  $("#resHere").empty();
  getNonVegTaco();
  $('#searchRes').show(500);
});

//Click event to get a Veg taco based on user selection
$("#VegBtn").on("click",function() {
  $("#resHere").empty();
  getVegTaco();
  $('#searchRes').show(500);
});
  

// ------------------------------------------------------------------ COCKTAIL RELATED MAIN PAGE FUNCTIONS ------------------------------------------------------------------------ //

// Function to show results of cocktail search
function addCocktailResult() {
  var searchTerm = $("#cocktailSearch").val().trim();

  $("#searchHead").text("Cocktail Search Results");
  $('#searchRes').show(500);
  $('#searchTerm').text(searchTerm);
};

// Event listener for click of Cocktail Search Button
  $("#cocktailBtn").on("click",function(){
    addCocktailResult();
  });

//Function to populate the Most Popular Cocktail
$("#popCocktail").on("click",function(){
	$("#panelC").empty();
	popularCocktail(queryURLPC);
	$('.popCocktailH-S').show(500);
});

//Function to populate if user clicks to search by alcohol drop down
$("#alcoholBtn").on("click",function(){
  $("#resHere").empty();
  getCocktailByPopularAlcohol()
	$('#searchRes').show(500);
});

// ------------------------------------------------------------------------------- GENERAL FUNCTIONS ---------------------------------------------------------------- //

//Close Panel for Most Popular cocktail or Random TACO
$("#closePanel").on("click",function() {
  $('.popCocktailH-S').hide(1000);
});

// Close the result box
$("#closeBox").on("click",function() {
  $("#searchRes").hide();
});

// Search when user presses enter key
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

// ----------------------------------------------------------------------- LOCAL STORAGE -------------------------------------------------------------- //

// Get search text from input box
var searchInput = document.querySelector("#cocktailSearch");
var cocktailForm = document.querySelector("#cocktailBtn");
var recipeFav = document.querySelector("#saveFavorite");

// Create an array to store searches
var searches = [];
init();

function init() {
  // Get stored searches from localStorage & parse the JSON string to an object
  var storedSearch = JSON.parse(localStorage.getItem("searches"));

  // If searches were retrieved from localStorage, update the search array to it
  if (storedSearch !== null) {
    searches = storedSearch;
  }
  renderSearches();
}

// When form is submitted...
function storeSearches() {
  // Stringify and set "searches" key in localStorage to search array
  localStorage.setItem("searches", JSON.stringify(searches));
}

function renderSearches() {
  // Render a new <span> item for each search
  for (var i = 0; i < searches.length; i++) {
    var search = searches[i];
    var searchHistory = $("#searchHistory");
    var searchP = document.createElement("span");
    searchP.setAttribute("class","is-italic is-capitalized");
    searchP.textContent = search + ", ";
    searchHistory.append(searchP);
  }
};

function cocktailStore() {
  // event.preventDefault();
  var searchText = searchInput.value.trim();

  // Return from function early if submitted blank
  if (searchInput === "") {
    return;
  }

  // Add new searches to the array, clear the input field
  searches.push(searchText);
  searchInput.value = "";

  // Store updated searches in localStorage, re-render the list
  storeSearches();
  $("#searchHistory").empty();
  renderSearches();
};