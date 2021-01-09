// Query URL for Popular Cocktail button
var queryURLPC="https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";

//Functions to retreive Popular cocktail
function popularCocktail(queryUrlPopularCocktail){
	$.ajax({
		url: queryUrlPopularCocktail,
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
			ingNotNull = cocktailData.drinks[i].strIngredient1;
		}
		if (cocktailData.drinks[i].strIngredient2!==null) {
          	ingNotNull = ingNotNull + ", " + cocktailData.drinks[i].strIngredient2;
       	}
		if (cocktailData.drinks[i].strIngredient3!==null) {
			ingNotNull = ingNotNull + ", " + cocktailData.drinks[i].strIngredient3;
      	}
        if (cocktailData.drinks[i].strIngredient4!==null) {
            ingNotNull = ingNotNull + ", " + cocktailData.drinks[i].strIngredient4;
        }
        if (cocktailData.drinks[i].strIngredient5!==null) {
            ingNotNull = ingNotNull + ", " + cocktailData.drinks[i].strIngredient5;
        }
        if (cocktailData.drinks[i].strIngredient6!==null) {
            ingNotNull = ingNotNull + ", " + cocktailData.drinks[i].strIngredient6;
        }
        if (cocktailData.drinks[i].strIngredient7!==null) {
            ingNotNull = ingNotNull + ", " + cocktailData.drinks[i].strIngredient7;
        }
      
        //Getting non null measure
        var measureNonNull="";

        if (cocktailData.drinks[i].strMeasure1!==null) {
            measureNonNull=cocktailData.drinks[i].strMeasure1;
        }

        if(cocktailData.drinks[i].strMeasure2!==null) {
            measureNonNull = measureNonNull + ", " + cocktailData.drinks[i].strMeasure2;
        }
        if (cocktailData.drinks[i].strMeasure3!==null) {
            measureNonNull = measureNonNull + ", " + cocktailData.drinks[i].strMeasure3;
        }
        if (cocktailData.drinks[i].strMeasure4!==null) {
            measureNonNulll = measureNonNull + ", " + cocktailData.drinks[i].strMeasure4;
        }
        if  (cocktailData.drinks[i].strMeasure5!==null) {
            measureNonNull = measureNonNull + ", " + cocktailData.drinks[i].strMeasure5;
        }
        if (cocktailData.drinks[i].strMeasure6!==null) {
            measureNonNull = measureNonNull + ", " + cocktailData.drinks[i].strMeasure6;
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

//Retrive cocktail by selecting Popular alcohol from dropdown menu
function getCocktailByPopularAlcohol() {
    var selectedAlcohol = $("#selectedA").val().trim();
    // console.log(selectedAlcohol);
    var queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + selectedAlcohol;

    $.ajax({
    url: queryUrl,
    method: "GET"
    })
     
    .done(function(cocktailData) {
        console.log(cocktailData);
        for (i = 0; i < cocktailData.drinks.length; i++){
        if (cocktailData.drinks[i].strAlcoholic = "Alcoholic") {
			isAlcoholic = "Yes";
		}
		var strIsAlcoholic = $('<p>');
		strIsAlcoholic.html(`<b>Alcoholic:</b> ${isAlcoholic}`);
			
		// Create a new div to display results 
		var cocktailDiv = $('<div>');
		
		// Create a new <figure> tag to display img portion of the results
        var imgSource = cocktailData.drinks[i].strDrinkThumb;
        var imgCocktail=$("<img>");
        imgCocktail.addClass("image is-128x128");
        imgCocktail.attr("src", imgSource);
        imgCocktail.attr("style", "float: left; padding-right: 10px;");

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
			ingNotNull = cocktailData.drinks[i].strIngredient1;
		}
		if (cocktailData.drinks[i].strIngredient2!==null) {
          	ingNotNull=ingNotNull + ", " + cocktailData.drinks[i].strIngredient2;
       	}
		if (cocktailData.drinks[i].strIngredient3!==null) {
			ingNotNull=ingNotNull + ", " +cocktailData.drinks[i].strIngredient3;
      	}
        if (cocktailData.drinks[i].strIngredient4!==null) {
            ingNotNull=ingNotNull + ", " +cocktailData.drinks[i].strIngredient4;
        }
        if (cocktailData.drinks[i].strIngredient5!==null) {
            ingNotNull=ingNotNull + ", " +cocktailData.drinks[i].strIngredient5;
        }
        if (cocktailData.drinks[i].strIngredient6!==null) {
            ingNotNull=ingNotNull + ", " +cocktailData.drinks[i].strIngredient6;
        }
        if (cocktailData.drinks[i].strIngredient7!==null) {
            ingNotNull=ingNotNull + ", " +cocktailData.drinks[i].strIngredient7;
        }
      
        //Getting non null measure
        var measureNonNull = "";

        if (cocktailData.drinks[i].strMeasure1!==null) {
            measureNonNull = cocktailData.drinks[i].strMeasure1;
        }

        if(cocktailData.drinks[i].strMeasure2!==null) {
            measureNonNull = measureNonNull + ", " + cocktailData.drinks[i].strMeasure2;
        }
        if (cocktailData.drinks[i].strMeasure3!==null) {
            measureNonNull = measureNonNull + ", " + cocktailData.drinks[i].strMeasure3;
        }
        if (cocktailData.drinks[i].strMeasure4!==null) {
            measureNonNulll = measureNonNull + ", " + cocktailData.drinks[i].strMeasure4;
        }
        if  (cocktailData.drinks[i].strMeasure5!==null) {
            measureNonNull= measureNonNull + ", " + cocktailData.drinks[i].strMeasure5;
        }
        if (cocktailData.drinks[i].strMeasure6!==null) {
            measureNonNull = measureNonNull + ", " + cocktailData.drinks[i].strMeasure6;
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
        cocktailDiv.append("<hr />");
        $("#showSearch").hide();
        $('.popCocktailH-S').hide();    
        
        // Scroll to results if not within visible area
        var elmnt = document.getElementById("searchRes");
        elmnt.scrollIntoView();
    }
});
}

//Search for cocktail by keyword
document.getElementById("cocktailBtn").addEventListener("click", function() {
    $("#resHere").empty();
    var searchField = document.getElementById("cocktailSearch");
    // console.log(selectedAlcohol);
    var queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchField.value;

    $.ajax({
    url: queryUrl,
    method: "GET"
    })
     
    .done(function(cocktailData) {

        // if Results or No Results
        if (cocktailData.drinks === null) {
          // no result display
          var displayDrinks = document.getElementById("resHere");
          displayDrinks.innerHTML = "<span style='color: red;'> No Results Display </span>";
          $("#showSearch").show();
        //   displayDrinks.appendChild(resultDisplay);
          return;
        }

        else {
            cocktailStore();
            $("#showSearch").show();
            console.log(cocktailData);

            for (i = 0; i < cocktailData.drinks.length; i++) {
            if (cocktailData.drinks[i].strAlcoholic = "Alcoholic") {
			    isAlcoholic = "Yes";
		    }
		    var strIsAlcoholic = $('<p>');
             strIsAlcoholic.html(`<b>Alcoholic:</b> ${isAlcoholic}`);
        			
		// Create a new div to display results 
		var cocktailDiv = $('<div>');
		
		// Create a new <figure> tag to display img portion of the results
        var imgSource = cocktailData.drinks[i].strDrinkThumb;
        var imgCocktail=$("<img>");
        imgCocktail.addClass("image is-128x128");
        imgCocktail.attr("src", imgSource);
        imgCocktail.attr("style", "float: left; padding-right: 10px;");

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
			ingNotNull = cocktailData.drinks[i].strIngredient1;
		}
		if (cocktailData.drinks[i].strIngredient2!==null) {
          	ingNotNull=ingNotNull + ", " + cocktailData.drinks[i].strIngredient2;
       	}
		if (cocktailData.drinks[i].strIngredient3!==null) {
			ingNotNull=ingNotNull + ", " + cocktailData.drinks[i].strIngredient3;
      	}
        if (cocktailData.drinks[i].strIngredient4!==null) {
            ingNotNull=ingNotNull + ", " + cocktailData.drinks[i].strIngredient4;
        }
        if (cocktailData.drinks[i].strIngredient5!==null) {
            ingNotNull=ingNotNull + ", " + cocktailData.drinks[i].strIngredient5;
        }
        if (cocktailData.drinks[i].strIngredient6!==null) {
            ingNotNull=ingNotNull + ", " + cocktailData.drinks[i].strIngredient6;
        }
        if (cocktailData.drinks[i].strIngredient7!==null) {
            ingNotNull=ingNotNull + ", " + cocktailData.drinks[i].strIngredient7;
        }
      
        //Getting non null measure
        var measureNonNull = "";

        if (cocktailData.drinks[i].strMeasure1!==null) {
            measureNonNull = cocktailData.drinks[i].strMeasure1;
        }
        if (cocktailData.drinks[i].strMeasure2!==null) {
            measureNonNull = measureNonNull + ", " + cocktailData.drinks[i].strMeasure2;
        }
        if (cocktailData.drinks[i].strMeasure3!==null) {
            measureNonNull = measureNonNull + ", " + cocktailData.drinks[i].strMeasure3;
        }
        if (cocktailData.drinks[i].strMeasure4!==null) {
            measureNonNulll = measureNonNull + ", " + cocktailData.drinks[i].strMeasure4;
        }
        if  (cocktailData.drinks[i].strMeasure5!==null) {
            measureNonNull= measureNonNull + ", " + cocktailData.drinks[i].strMeasure5;
        }
        if (cocktailData.drinks[i].strMeasure6!==null) {
            measureNonNull = measureNonNull + ", " + cocktailData.drinks[i].strMeasure6;
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
        cocktailDiv.append("<hr />");
        $('.popCocktailH-S').hide();    
        
        // Scroll to results if not within visible area
        var elmnt = document.getElementById("searchRes");
        elmnt.scrollIntoView();
        }
    }
    });
});