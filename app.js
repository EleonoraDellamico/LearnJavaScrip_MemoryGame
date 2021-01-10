document.addEventListener("DOMContentLoaded",() => {

const cardArray =[
{
    name: "fries",
    img: "images/fries.png"
}, 

{
    name: "blank",
    img: "images/blank.png"
},
{
    name:"cheesburger",
    img: "images/cheesburger.png"
},

{
    name:"hotdog",
    img:"images/hotdog.png"
},

{ 
    name: "ice.cream",
    img: "images/ice-cream.png"

},

{ 
    name: "milkshake",
    img: "images/milkshake.png"

},

{ 
    name: "pizza",
    img: "images/pizza.png"

},

{ 
    name: "white",
    img: "images/white.png"
}

]


const grid = document.querySelector (".grid");
cardChoosen=[]

//CREATE A BOARD

 function createBoard () {
     for (let i=0; i < cardArray.length; i++){
         let card = document.createElement("img")
         card.setAttribute("src", "images/blank.png")
         card.setAttribute("data-id", i)
         card.addEventListener ("click", flipCard)
         grid.appendChild(card)// add Card into Div
     }
 }

 //FLIP THE CARD
 function flipCard (){
     //CREATE AN EMPITY ARRAY OF CARD CHOOSEN 
     let carId = this.getAttribute("data-id")
     cardChoosen.push(cardArray[cardId].name)
 }
 
 
 
 //CHECK THE MATCH


 createBoard()


 })