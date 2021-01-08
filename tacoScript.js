//Setup variables
//Variable for Random idTaco
var idTaco = 662744;
var apiKey="1f55b1e7b1524a14a289349c7a011b63";



// Query url for random Taco
//var queryURLRT="https://api.spoonacular.com/recipes/662744/information?apiKey=844a117f5f0d427abe3f7d0dda4d2705&includeNutrition=true";

// Query URL for Taco Search
var queryURLTaco ="https://api.spoonacular.com/recipes/complexSearch";

function searchTaco(queryURLTaco) {
    $.ajax({
    url: queryURLTaco,
    method: "GET"
    })

    .done(function(){
        console.log();
    });
};

// Function to retrieve Random Taco ID
function generateRandomId(){
    var queryURL="https://api.spoonacular.com/recipes/complexSearch?&number=20&apiKey="+ apiKey + "&query=taco";

    $.ajax({
    url: queryURL,
    method: "GET"
    })
        .done(function(response) {
            var arrayTaco = response.results
            var tacolimit = arrayTaco.length;
            var randomNum = Math.floor(Math.random() * tacolimit);
            var taco = arrayTaco[randomNum].id;
            console.log(taco);
            console.log(response.results);
            console.log(arrayTaco);
            console.log(tacolimit);
            idTaco = taco;
        });
};

  