// Countdown line on main page
var countDownDate = new Date("May 5, 2021 00:00:01").getTime();

var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

// Display the result in the element with id="demo", update every second
document.getElementById("countdown").innerHTML = "<b>" + days + " Days until Cinco de Mayo 2021!" + "</b>";
}, 1000);


/* Retrieve images of cocktail results
 document.getElementById("cocktailBtn").addEventListener("click", function() {
    let searchField = document.getElementById("cocktailSearch");

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchField.value)
    .then((response) => {
        return response.json();
    })
    // ************************************************** APP  starts HERE*****************************************************
    .then((cocktailData) => {
    
        for (let i =0 ; i < cocktailData.drinks.length ; i++) {
            let displayCocktail = document.createElement("div");
            let cocktailImage = document.createElement("img");
    
            displayCocktail.innerHTML = cocktailData.drinks[i].strDrink;
            cocktailImage.setAttribute("src", cocktailData.drinks[i].strDrinkThumb);
            cocktailImage.setAttribute("class", "image is-128x128");
            let displayDrinks = document.getElementById("cocktailResults");


            displayDrinks.appendChild(displayCocktail);
            displayDrinks.appendChild(cocktailImage);
        }

        console.log(cocktailData)
    });
});   */

//Setup variables
//query Url for popular cocktail
var queryURLPC="https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";
//Query url for random Taco
var queryURLRT="http://taco-randomizer.herokuapp.com/random/";
var NumResult=1;
 $('.popCocktailH-S').hide();

//Functions to retreive Popular cocktail
function popularCocktail(queryUrlPopularCocktail)
{
   $.ajax({
       url:queryUrlPopularCocktail ,
       method: "GET"
     }).done(function(CocktailData) {
         var isAlcoholic=""
         for(i=0;i<NumResult;i++)
         {
           console.log(CocktailData.drinks[i].strDrink);
           if(CocktailData.drinks[i].strAlcoholic="Alcoholic"){
                isAlcoholic="Yes";
           }
           else {
               isAlcoholic="No";
           }
           var cocktailSection=$('<a>')
       cocktailSection.addClass("panel-block");
       var pTest=$('<p>');
       var cocktailDiv=$('<div>');
       var wraptextDiv=$('<div>');
       var figureDrink=$('<figure>');
       var spanImage=$('<span>');
       figureDrink.addClass("img-cocktail");
       spanImage.addClass("image is-128x128");
       //wraptextDiv.addClass("media-content");
       var alco="Alcoholic";
       var strInstruction=$('<p>');
       strInstruction.html(`<b>Instructions : </b>${CocktailData.drinks[i].strInstructions}`)
       var strGlass=$('<p>');
       strGlass.html(`<b> Glass :</b> ${CocktailData.drinks[i].strGlass}`)
       var imgsource=CocktailData.drinks[i].strDrinkThumb;
       var imgDrink=$('<img>');
       imgDrink.attr("src",imgsource);
       var strDrink=$('<h1>');
       var strIsAlcoholic=$('<p>');
        strIsAlcoholic.html(`<b>${alco}</b> : ${isAlcoholic}`);
       var strIngrediens=$('<p>');
       var strMeasure=$('<p>');
      
       //Getting not null ingrediens
       var ingrediensnotNull="";
       if(CocktailData.drinks[i].strIngredient1!==null){
         ingrediensnotNull=CocktailData.drinks[i].strIngredient1;
       }
       if(CocktailData.drinks[i].strIngredient2!==null){
          ingrediensnotNull=ingrediensnotNull +","+CocktailData.drinks[i].strIngredient2;
       }
       if(CocktailData.drinks[i].strIngredient3!==null){
        ingrediensnotNull=ingrediensnotNull +","+CocktailData.drinks[i].strIngredient3;
      }
      if(CocktailData.drinks[i].strIngredient4!==null){
        ingrediensnotNull=ingrediensnotNull +","+CocktailData.drinks[i].strIngredient4;
      }
      if(CocktailData.drinks[i].strIngredient5!==null){
        ingrediensnotNull=ingrediensnotNull +","+CocktailData.drinks[i].strIngredient5;
      }
      if(CocktailData.drinks[i].strIngredient6!==null){
        ingrediensnotNull=ingrediensnotNull +","+CocktailData.drinks[i].strIngredient6;
      }
      if(CocktailData.drinks[i].strIngredient7!==null){
        ingrediensnotNull=ingrediensnotNull +","+CocktailData.drinks[i].strIngredient7;
      }
      
      //Getting non null measure
      var measureNonNull="";
      if(CocktailData.drinks[i].strMeasure1!==null){
        measureNonNull=CocktailData.drinks[i].strMeasure1;
      }
      if(CocktailData.drinks[i].strMeasure2!==null){
        measureNonNull=measureNonNull +","+CocktailData.drinks[i].strMeasure2;
      }
      if(CocktailData.drinks[i].strMeasure3!==null){
        measureNonNull=measureNonNull +","+CocktailData.drinks[i].strMeasure3;
     }
     if(CocktailData.drinks[i].strMeasure4!==null){
      measureNonNulll=measureNonNull +","+CocktailData.drinks[i].strMeasure4;
     }
     if(CocktailData.drinks[i].strMeasure5!==null){
      measureNonNull=measureNonNull+","+CocktailData.drinks[i].strMeasure5;
     }
     if(CocktailData.drinks[i].strMeasure6!==null){
      measureNonNull=measureNonNull+","+CocktailData.drinks[i].strMeasure6;
     }


       strIngrediens.html(`<b>Ingredient : </b>${ingrediensnotNull}`);
       strMeasure.html(`<b>Measure : </b>${measureNonNull}`);
       strDrink.text(CocktailData.drinks[i].strDrink);
       strDrink.addClass("has-text-weight-bold");

       // Appending new html elements created 
       $(".Panel-C").append(cocktailSection);
       cocktailSection.append(cocktailDiv);
       cocktailDiv.append(strDrink);
       cocktailDiv.append(figureDrink);
       figureDrink.append(spanImage); 
       spanImage.append(imgDrink);   
       cocktailDiv.append(wraptextDiv);
       wraptextDiv.append(strIsAlcoholic);
       wraptextDiv.append(strIngrediens) ;
       wraptextDiv.append(strMeasure);
       wraptextDiv.append(strGlass);
       wraptextDiv.append(strInstruction)  
    //    cocktailDiv.append(strIsAlcoholic);
    //    cocktailDiv.append(strIngrediens) ;
    //    cocktailDiv.append(strMeasure);
    //    cocktailDiv.append(strGlass);
    //    cocktailDiv.append(strInstruction);
         }
 
     });     

}

//function to populate a random Taco
function populateRandomTaco(queryRandomTaco) {
  $.ajax({
    url:queryRandomTaco,
    method: "GET"
  }).done(function(tacoData) {
        var tacoSection=$('<a>')
        tacoSection.addClass("panel-block");
        var pRandomTaco=$('<p>');
        pRandomTaco.text(`${tacoData.base_layer.name}, with ${tacoData.condiment.name}, garnished with ${tacoData.mixin.name}, topped off with ${tacoData.seasoning.name} and wrapped in ${tacoData.shell.name} `);
        
        //appending new html element created
        $(".Panel-C").append(tacoSection);
        tacoSection.append(pRandomTaco);
      });

}

//Main Process
//To populate 5 popular cocktails
$("#popCocktail").on("click",function(){
  $('.popCocktailH-S').show(500);
  $(".Panel-C").empty();
   popularCocktail(queryURLPC);
   $(".result").text("Popular Cocktail");
});
$("#popTaco").on("click",function(){
  $('.popCocktailH-S').show(500);
  $(".Panel-C").empty();
   populateRandomTaco(queryURLRT);
   $(".result").text("Here is your Taco");
});

