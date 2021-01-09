// Query URL for Popular Cocktail button
var queryURLPC="https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";

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
			
		// Create a new div to display results (will append to existing <div> id="panelC")
		var cocktailDiv = $('<div>');
		
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
		   
		if (cocktailData.drinks[i].strIngredient1!==null) {
			ingNotNull=cocktailData.drinks[i].strIngredient1;
		}
		if (cocktailData.drinks[i].strIngredient2!==null) {
          	ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient2;
       	}
		if (cocktailData.drinks[i].strIngredient3!==null) {
			ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient3;
      	}
        if (cocktailData.drinks[i].strIngredient4!==null) {
            ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient4;
        }
        if (cocktailData.drinks[i].strIngredient5!==null) {
            ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient5;
        }
        if (cocktailData.drinks[i].strIngredient6!==null) {
            ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient6;
        }
        if (cocktailData.drinks[i].strIngredient7!==null) {
            ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient7;
        }
      
        //Getting non null measure
        var measureNonNull="";

        if (cocktailData.drinks[i].strMeasure1!==null) {
            measureNonNull=cocktailData.drinks[i].strMeasure1;
        }

        if(cocktailData.drinks[i].strMeasure2!==null) {
            measureNonNull=measureNonNull +","+cocktailData.drinks[i].strMeasure2;
        }
        if (cocktailData.drinks[i].strMeasure3!==null) {
            measureNonNull=measureNonNull +","+cocktailData.drinks[i].strMeasure3;
        }
        if (cocktailData.drinks[i].strMeasure4!==null) {
            measureNonNulll=measureNonNull +","+cocktailData.drinks[i].strMeasure4;
        }
        if  (cocktailData.drinks[i].strMeasure5!==null) {
            measureNonNull=measureNonNull+","+cocktailData.drinks[i].strMeasure5;
        }
        if (cocktailData.drinks[i].strMeasure6!==null) {
            measureNonNull=measureNonNull+","+cocktailData.drinks[i].strMeasure6;
        }

        // Appending new html elements created 
        strIngred.html(`<b>Ingredients:</b> ${ingNotNull}`);
        strMeasure.html(`<b>Measure:</b> ${measureNonNull}`);   
		$("#panelC").append(cocktailDiv);
		cocktailDiv.append(strDrink);
		$("#cocktailImg").attr("src", imgSource);
		$("#cocktailImg").show();
		cocktailDiv.append(strIsAlcoholic);
		cocktailDiv.append(strIngred);
		cocktailDiv.append(strMeasure);
		cocktailDiv.append(strGlass);
		cocktailDiv.append(strInstruction);  
    });     
};
//Retrive cocktail by selecting Popular alcohol
function getCocktailByPopularAlcohol()
{
 var selectedAlcohol=$("#selectedA").val().trim();
 console.log(selectedAlcohol);
 var queryUrl="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + selectedAlcohol;
 $.ajax({
    url:queryUrl ,
    method: "GET"
     })
     
.done(function(cocktailData) {
    console.log(cocktailData);
    for (i=0;i<cocktailData.drinks.length;i++){
        if(cocktailData.drinks[i].strAlcoholic="Alcoholic") {
			isAlcoholic = "Yes";
			}
		var strIsAlcoholic = $('<p>');
		strIsAlcoholic.html(`<b>Alcoholic:</b> ${isAlcoholic}`);
			
		// Create a new div to display results (will append to existing <div> id="panelC")
		var cocktailDiv = $('<div>');
		
		// Create a new <figure> tag to display img portion of the results
        var imgSource = cocktailData.drinks[i].strDrinkThumb;
        var imgCocktail=$("<img>");
        imgCocktail.addClass("image is-128x128");
        imgCocktail.attr("src", imgSource);
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
        
        //Create a new image tag
        

		// Create new <p> tages to display ingredients and their measurements
		var strIngred = $('<p>');
		var strMeasure = $('<p>');
	  
	    // Get ingredients that are not null
		var ingNotNull = "";
		   
		if (cocktailData.drinks[i].strIngredient1!==null) {
			ingNotNull=cocktailData.drinks[i].strIngredient1;
		}
		if (cocktailData.drinks[i].strIngredient2!==null) {
          	ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient2;
       	}
		if (cocktailData.drinks[i].strIngredient3!==null) {
			ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient3;
      	}
        if (cocktailData.drinks[i].strIngredient4!==null) {
            ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient4;
        }
        if (cocktailData.drinks[i].strIngredient5!==null) {
            ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient5;
        }
        if (cocktailData.drinks[i].strIngredient6!==null) {
            ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient6;
        }
        if (cocktailData.drinks[i].strIngredient7!==null) {
            ingNotNull=ingNotNull +","+cocktailData.drinks[i].strIngredient7;
        }
      
        //Getting non null measure
        var measureNonNull="";

        if (cocktailData.drinks[i].strMeasure1!==null) {
            measureNonNull=cocktailData.drinks[i].strMeasure1;
        }

        if(cocktailData.drinks[i].strMeasure2!==null) {
            measureNonNull=measureNonNull +","+cocktailData.drinks[i].strMeasure2;
        }
        if (cocktailData.drinks[i].strMeasure3!==null) {
            measureNonNull=measureNonNull +","+cocktailData.drinks[i].strMeasure3;
        }
        if (cocktailData.drinks[i].strMeasure4!==null) {
            measureNonNulll=measureNonNull +","+cocktailData.drinks[i].strMeasure4;
        }
        if  (cocktailData.drinks[i].strMeasure5!==null) {
            measureNonNull=measureNonNull+","+cocktailData.drinks[i].strMeasure5;
        }
        if (cocktailData.drinks[i].strMeasure6!==null) {
            measureNonNull=measureNonNull+","+cocktailData.drinks[i].strMeasure6;
        }

        // Appending new html elements created 
        strIngred.html(`<b>Ingredients:</b> ${ingNotNull}`);
        strMeasure.html(`<b>Measure:</b> ${measureNonNull}`);   
		$("#resHere").append(cocktailDiv);
		cocktailDiv.append(strDrink);
		cocktailDiv.append(imgCocktail);
		cocktailDiv.append(strIsAlcoholic);
		cocktailDiv.append(strIngred);
		cocktailDiv.append(strMeasure);
		cocktailDiv.append(strGlass);
		cocktailDiv.append(strInstruction);    

    }

});
}

//Retrieve Cocktail search Results
document.getElementById("cocktailBtn").addEventListener("click", function() {
    let searchField = document.getElementById("cocktailSearch");

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchField.value)
    .then((response) => {
        cocktailStore();
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
                let displayIngredientTitle = document.createElement("b");

                let displayIngredients = document.createElement("ul");
                let cocktailImage = document.createElement("img");

                //list ingridients
                let displayIngredient1 = document.createElement("p");
                let displayIngredient2 = document.createElement("p");
                let displayIngredient3 = document.createElement("p");
                let displayIngredient4 = document.createElement("p");
                let displayIngredient5 = document.createElement("p");
                let displayIngredient6 = document.createElement("p");
                let displayIngredient7 = document.createElement("p");
                let displayIngredient8 = document.createElement("p");
                let displayIngredient9 = document.createElement("p");
                let displayIngredient10 = document.createElement("p");
                let displayIngredient11 = document.createElement("p");
                let displayIngredient12 = document.createElement("p");
                let displayIngredient13 = document.createElement("p");
                let displayIngredient14= document.createElement("p");
                let displayIngredient15 = document.createElement("p");

                // fill the p element with data from API
                displayIngredient1.innerHTML = cocktailData.drinks[i].strIngredient1
                displayIngredient2.innerHTML = cocktailData.drinks[i].strIngredient2
                displayIngredient3.innerHTML = cocktailData.drinks[i].strIngredient3
                displayIngredient4.innerHTML = cocktailData.drinks[i].strIngredient4
                displayIngredient5.innerHTML = cocktailData.drinks[i].strIngredient5
                displayIngredient6.innerHTML = cocktailData.drinks[i].strIngredient6
                displayIngredient7.innerHTML = cocktailData.drinks[i].strIngredient7
                displayIngredient8.innerHTML = cocktailData.drinks[i].strIngredient8
                displayIngredient9.innerHTML = cocktailData.drinks[i].strIngredient9
                displayIngredient10.innerHTML = cocktailData.drinks[i].strIngredient10
                displayIngredient11.innerHTML = cocktailData.drinks[i].strIngredient11
                displayIngredient12.innerHTML = cocktailData.drinks[i].strIngredient12
                displayIngredient13.innerHTML = cocktailData.drinks[i].strIngredient13
                displayIngredient14.innerHTML = cocktailData.drinks[i].strIngredient14
                displayIngredient15.innerHTML = cocktailData.drinks[i].strIngredient15

                // check for null results
                if (displayIngredient1 != null) {
                    displayIngredients.appendChild(displayIngredient1)
                }
                if (displayIngredient2 != null) {
                    displayIngredients.appendChild(displayIngredient2)
                }
                if (displayIngredient3 != null) {
                    displayIngredients.appendChild(displayIngredient3)
                }
                if (displayIngredient4 != null) {
                    displayIngredients.appendChild(displayIngredient4)
                }
                if (displayIngredient5 != null) {
                    displayIngredients.appendChild(displayIngredient5)
                }
                if (displayIngredient6 != null) {
                    displayIngredients.appendChild(displayIngredient6)
                }
                if (displayIngredient7 != null) {
                    displayIngredients.appendChild(displayIngredient7)
                }
                if (displayIngredient8 != null) {
                    displayIngredients.appendChild(displayIngredient8)
                }
                if (displayIngredient9 != null) {
                    displayIngredients.appendChild(displayIngredient9)
                }
                if (displayIngredient10 != null) {
                    displayIngredients.appendChild(displayIngredient10)
                }
                if (displayIngredient11 != null) {
                    displayIngredients.appendChild(displayIngredient11)
                }
                if (displayIngredient12 != null) {
                    displayIngredients.appendChild(displayIngredient12)
                }
                if (displayIngredient13 != null) {
                    displayIngredients.appendChild(displayIngredient13)
                }
                if (displayIngredient14 != null) {
                    displayIngredients.appendChild(displayIngredient14)
                }
                if (displayIngredient15 != null) {
                    displayIngredients.appendChild(displayIngredient15)
                }

                // Append results to index for display to user
                displayCocktail.innerHTML = cocktailData.drinks[i].strDrink;
                displayIngredientTitle.innerHTML = "Ingredients"
                cocktailImage.setAttribute("src", cocktailData.drinks[i].strDrinkThumb);
                cocktailImage.setAttribute("class", "image is-128x128");
                displayDrinks.appendChild(displayCocktail);
                displayDrinks.appendChild(cocktailImage);
                displayDrinks.appendChild(displayIngredientTitle);
                displayDrinks.appendChild(displayIngredients);
        }
        // console.log(cocktailData);
        };
    });
});