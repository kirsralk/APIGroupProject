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


// Retrieve images of cocktail results
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
});   

