//Setup variables
//Variable for Random idTaco
var idTaco = 662744;
var apiKey="8c8f02ded73c4da991a56ffcd21c77ed";
var arrNonVegetarian=[];
var arrVegetarian=[];
searchTaco();
console.log(arrNonVegetarian.length);


function searchTaco() {
     var arr1=[];
     var arr2=[];
    var queryURLTaco ="https://api.spoonacular.com/recipes/complexSearch?apiKey="+apiKey +"&titleMatch=taco&number=50";
    $.ajax({
    url: queryURLTaco,
    method: "GET"
    })

    .done(function(TacoData){
        console.log("below is my object");
        console.log(TacoData);
        for(i=0;i<TacoData.results.length;i++)
        {
            console.log(TacoData.results[i].id);
            var queryURLTaco1 ="https://api.spoonacular.com/recipes/"+ TacoData.results[i].id+"/information?apiKey="+ apiKey  +"&includeNutrition=true";
            $.ajax({
            url: queryURLTaco1,
            method: "GET"
            })
            .done(function(TacoData1){
                
                if(TacoData1.vegetarian===false)
                {
                    var idT=TacoData1.id;
                    var queryNonVeg ="https://api.spoonacular.com/recipes/"+ idT +"/information?apiKey="+ apiKey  +"&includeNutrition=true";
            $.ajax({
            url: queryNonVeg,
            method: "GET"
            })
            .done(function(TacoNonVeg){
                var optNonVeg=$("<option>");
                optNonVeg.attr("value",TacoNonVeg.id);
                optNonVeg.text(TacoData1.title);
                optNonVeg.attr("id",TacoNonVeg.id);
                $("#selectedNV").append(optNonVeg);
             });
                }
                else
                {
                    var idT1=TacoData1.id;
                    var queryVeg ="https://api.spoonacular.com/recipes/"+ idT1 +"/information?apiKey="+ apiKey  +"&includeNutrition=true";
            $.ajax({
            url: queryVeg,
            method: "GET"
            })
        
            .done(function(TacoVeg){
                var optVeg=$("<option>");
                optVeg.attr("value",TacoVeg.id);
                optVeg.text(TacoData1.title);
                optVeg.attr("id",TacoVeg.id);
                $("#selectedV").append(optVeg);
                     
            });
        }
            });
               
          
    }
 });
}


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
}

//Function to search Non-Vegeterian Taco
function getNonVegTaco()
{
    var idTaco=$("#selectedNV").val().trim();
    var queryNVTaco="https://api.spoonacular.com/recipes/"+ idTaco +"/information?apiKey="+ apiKey  +"&includeNutrition=true"
    $.ajax({
        url:queryNVTaco,
        method: "GET"
      }).done(function(Data) {
            var tacoDiv = $('<div>');
            var tacoName = $('<p>');
            tacoName.text(Data.title);        
            var pTaco=$('<p>');
            pTaco.html(Data.instructions);
            var tacoImg = Data.image;
            var imgTaco=$("<img>");
            imgTaco.addClass("image is-128x128");
            imgTaco.attr("src", tacoImg);
            imgTaco.attr("style", "float: left; padding-right: 10px;");
    
            // Create a new <h4> tag to display the drink's title
                var strTaco = $('<h4>');
                strTaco.text(Data.title);
                strTaco.addClass("subtitle is-4");
            
            // Appending new html element created
             $("#resHere").append(tacoDiv);
             tacoDiv.append(strTaco);
             tacoDiv.append(imgTaco);
             tacoDiv.append(pTaco);
             
          });
    
}

function getVegTaco()
{
    var idTacoV=$("#selectedV").val().trim();
    var queryVTaco="https://api.spoonacular.com/recipes/"+ idTacoV +"/information?apiKey="+ apiKey  +"&includeNutrition=true"
    $.ajax({
        url:queryVTaco,
        method: "GET"
      }).done(function(Data) {
            var tacoDiv = $('<div>');
            var tacoName = $('<p>');
            tacoName.text(Data.title);        
            var pTaco=$('<p>');
            pTaco.html(Data.instructions);
            var tacoImg = Data.image;
            var imgTaco=$("<img>");
            imgTaco.addClass("image is-128x128");
            imgTaco.attr("src", tacoImg);
            imgTaco.attr("style", "float: left; padding-right: 10px;");
    
            // Create a new <h4> tag to display the drink's title
                var strTaco = $('<h4>');
                strTaco.text(Data.title);
                strTaco.addClass("subtitle is-4");
            
            // Appending new html element created
             $("#resHere").append(tacoDiv);
             tacoDiv.append(strTaco);
             tacoDiv.append(imgTaco);
             tacoDiv.append(pTaco);
             
            
          });
}