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
let cardChosen=[];
let cardChosenId=[];
let cardWon= [];


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
//CHECK THE MATCH

function checkForMatch(){
    let cards = document.querySelectorAll ("img")
    const optionOneId = cardChosenId [0]
    const optionTwoId = cardChosenId [1]
    if(cardChoosen[0]===cardChosen[1]){
         alert("you found a match")
         cards[optionOneId].setAttribute("src", "images/white.png")
         cards[optionTwoId].setAttribute("src", "images/white.png")
         cardWon.push(cardChosen)
    } else {
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert ("sorry,try it again")

    }
    cardChosen=[];
    cardChoseId=[];
   resultDispaly

}



 //FLIP THE CARD
 function flipCard (){
     //CREATE AN EMPITY ARRAY OF CARD CHOSEN 
     let cardId = this.getAttribute("data-id")
     cardChosen.push(cardArray[cardId].name)
     cardChosenId.push(cardId)
     this.setAttribute("src", cardArray[cardId].img)
     if (cardChosen.length === 2){
         setTimeout (checkForMatch,500)
     }

 }
 
 


 createBoard()


 })