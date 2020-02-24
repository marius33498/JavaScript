// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

  
  
      
   
fetch("https://api.magicthegathering.io/v1/cards")
     .then(function(response){
	 return response.json();
})
	.then(function(json){
		showHouses(json)
	})
	
  function showHouses(cardsDisplay){
      cardsDisplay.cards.forEach(function(card){
         
       document.querySelector("#cards").innerHTML +='<div class="col-sm-4"><div class="card-container"><h4>' + card.name +' </h4><img src="'+ card.imageUrl +' " width="100%"><a href="card-specific.html?id='+ card.id + ' "class="btn btn-success">View More</a></div></div>'
		
      })
  }


 
  
  

   

 
    