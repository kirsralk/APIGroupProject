
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

