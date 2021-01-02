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


function addCocktailResult() {
    // alert("This function runs");
    var searchTerm = $("#cocktailSearch").val().trim();

	$("#searchHead").text("Cocktail Search Results");
    $('#searchRes').show(500);
    $('#searchTerm').text(searchTerm);
};

$("#cocktailBtn").on("click",function(){
	addCocktailResult();
});


  