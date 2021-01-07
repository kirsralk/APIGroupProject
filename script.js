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

//Setup variables
//query Url for popular cocktail
var queryURLPC="https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";
//Query url for random Taco
var queryURLRT="https://api.spoonacular.com/recipes/662744/information?apiKey=844a117f5f0d427abe3f7d0dda4d2705&includeNutrition=true";

//Functions to retreive Popular cocktail
function popularCocktail(queryUrlPopularCocktail){
	$.ajax({
		url:queryUrlPopularCocktail ,
    	method: "GET"
		 })
		 
	.done(function(cocktailData) {
        console.log(cocktailData);
		var i = 0;
	
		// Set Alcoholic value to Yes or No and display as new <p> tag
        var isAlcoholic = "No";
        	if(cocktailData.drinks[i].strAlcoholic="Alcoholic") {
			isAlcoholic = "Yes";
			}
		var strIsAlcoholic = $('<p>');
		strIsAlcoholic.html(`<b>Alcoholic:</b> ${isAlcoholic}`);
			
		// Create a new div to display results (will append to existing <a> with id="panelC")
		var cocktailDiv = $('<div>');
		var wraptextDiv = $('<div>');
		
		// Create a new <figure> tag to display img portion of the results
		var imgSource = cocktailData.drinks[i].strDrinkThumb;

		// Create a new <p> tag to display the instructions
		var strInstruction = $('<p>');
		strInstruction.html(`<b>Instructions:</b> ${cocktailData.drinks[i].strInstructions}`);
		
		// Create a new <p> tag to display the required glass
		var strGlass = $('<p>');
		strGlass.html(`<b> Glass:</b> ${cocktailData.drinks[i].strGlass}`);

		// Create a new <h4> tag to display the drink's title
		var strDrink = $('<h4>');
		strDrink.text(cocktailData.drinks[i].strDrink);
		strDrink.addClass("subtitle is-4");

		// Create new <p> tages to display ingredients and their measurements
		var strIngred = $('<p>');
		var strMeasure = $('<p>');
	  
		// Get ingredients that are not null
			var ingNotNull = "";
		   
		   if(cocktailData.drinks[i].strIngredient1!==null){
			ingNotNull=cocktailData.drinks[i].strIngredient1;
			}
		
		   if(cocktailData.drinks[i].strIngredient2!==null){
          	ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient2;
       		}
	   
		   if(cocktailData.drinks[i].strIngredient3!==null){
			ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient3;
      		}
      if(cocktailData.drinks[i].strIngredient4!==null){
        ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient4;
      }
      if(cocktailData.drinks[i].strIngredient5!==null){
        ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient5;
      }
      if(cocktailData.drinks[i].strIngredient6!==null){
        ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient6;
      }
      if(cocktailData.drinks[i].strIngredient7!==null){
        ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient7;
      }
      
      //Getting non null measure
      var measureNonNull="";
      if(cocktailData.drinks[i].strMeasure1!==null){
        measureNonNull=cocktailData.drinks[i].strMeasure1;
      }
      if(cocktailData.drinks[i].strMeasure2!==null){
        measureNonNull=measureNonNull +","+cocktailData.drinks[i].strMeasure2;
      }
      if(cocktailData.drinks[i].strMeasure3!==null){
        measureNonNull=measureNonNull +","+cocktailData.drinks[i].strMeasure3;
     }
     if(cocktailData.drinks[i].strMeasure4!==null){
      measureNonNulll=measureNonNull +","+cocktailData.drinks[i].strMeasure4;
     }
     if(cocktailData.drinks[i].strMeasure5!==null){
      measureNonNull=measureNonNull+","+cocktailData.drinks[i].strMeasure5;
     }
     if(cocktailData.drinks[i].strMeasure6!==null){
      measureNonNull=measureNonNull+","+cocktailData.drinks[i].strMeasure6;
     }


       strIngred.html(`<b>Ingredients:</b> ${ingNotNull}`);
       strMeasure.html(`<b>Measure:</b> ${measureNonNull}`);


    	// Appending new html elements created 
		$("#panelC").append(cocktailDiv);
		cocktailDiv.append(strDrink);
		$("#cocktailImg").attr("src", imgSource);
		$("#cocktailImg").show();
		cocktailDiv.append(wraptextDiv);
		cocktailDiv.append(strIsAlcoholic);
		cocktailDiv.append(strIngred);
		cocktailDiv.append(strMeasure);
		cocktailDiv.append(strGlass);
		cocktailDiv.append(strInstruction);  
     
    });     

}


//function to populate a random Taco
function populateRandomTaco(queryRandomTaco) {
  $.ajax({
    url:queryRandomTaco,
    method: "GET"
  }).done(function(tacoData) {
        var tacoSection=$('<a>');
        tacoSection.addClass("panel-block");
        var tacoName=$('<p>');
         var pRandomTaco=$('<p>');
         tacoName.text(tacoData.title);
         var tacoimg=$("<img>");
         tacoimg.attr("src",tacoData.image);
         pRandomTaco.text(tacoData.instructions);
        
        // //appending new html element created
         $("#panelC").append(tacoSection);
         tacoSection.append(tacoName);
         tacoSection.append(tacoimg)
         tacoSection.append(pRandomTaco);
         console.log(tacoData);
        //console.log(tacoData.instructions);
      });

};

//Main Process
//To populate 5 popular cocktails
$("#popCocktail").on("click",function(){
	$("#panelC").empty();
	popularCocktail(queryURLPC);
	$(".panel-heading").text("Most Popular Cocktail");
	$('.popCocktailH-S').show(500);
});

$("#popTaco").on("click",function(){
	$('.popCocktailH-S').show(500);
	$("#panelC").empty();
	populateRandomTaco(queryURLRT);
	$(".panel-heading").text("Here is your Taco");
	$("#cocktailImg").hide();
});

//Close Panel for Most Popular cocktail or Random TACO
$("#closePanel").on("click",function(){
  $('.popCocktailH-S').hide(1000);
  });
  
  //Save as Favorite
  $("#closePanel").on("click",function(){
    $('.popCocktailH-S').hide();
    });

// ------------------------------------------------------ MIKES ---------------------------------------------------------
//Retrieve images of cocktail results
 document.getElementById("cocktailBtn").addEventListener("click", function() {
    let searchField = document.getElementById("cocktailSearch");

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchField.value)
    .then((response) => {
        return response.json();
    })
    // ************************************************** APP  starts HERE*****************************************************
    .then((cocktailData) => {
    
        // Get place holder element from html
        let displayDrinks = document.getElementById("resHere");

        // Reset search result
        displayDrinks.innerHTML = "";

        // if Results or No Results
        if (cocktailData.drinks === null) {
          // no result display
          let resultDisplay = document.createElement("p");
          resultDisplay.innerHTML = "<span style='color: red;'> No Results Display </span>"
          displayDrinks.appendChild(resultDisplay);

        }

        else { 
        // new search
          for (let i =0 ; i < cocktailData.drinks.length ; i++) {
              let displayCocktail = document.createElement("p");
              let cocktailImage = document.createElement("img");

              displayCocktail.innerHTML = cocktailData.drinks[i].strDrink;
              cocktailImage.setAttribute("src", cocktailData.drinks[i].strDrinkThumb);
              cocktailImage.setAttribute("class", "image is-128x128");
              displayDrinks.appendChild(displayCocktail);
              displayDrinks.appendChild(cocktailImage);
          }

        }

 

        console.log(cocktailData)
    });
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

