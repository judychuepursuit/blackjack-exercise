/*
The following methods are available to you, defined in htmlFunctions.js:

blackjackHtmlMethods.addCardToCardContainer(card)
Adds whatever text you put in as the "card" parameter to the body
of index.html, contained in the HTML element called "card-container"

blackjackHtmlMethods.addMessageToMessageContainer(message)
Replaces the text of the "message-container" HTML element with
whatever text you provide.

htmlFunctions.js also sets up the button element so that when you
click it, the "drawCard" function runs.
*/



let total = 0;

function drawCard() {
    //console.log("Its Cold outside.")
    // console.log("Drawing card.") 
    let card = pickRandomCard(deckOfCards) 
    // adding this to get message
    total += getValueOfCard(card)
    blackjackHtmlMethods.addCardToCardContainer(card)
//     console.log(card)
    // blackjackHtmlMethods.addMessageToMessageContainer(
    //     getValueOfCard(card)
    // edited this to get message on html adding total
    blackjackHtmlMethods.addMessageToMessageContainer(total)
}

const faceCardValues = {
    Ace: 1,
    Jack: 10,
    Queen: 10,
    King: 10,

}

function getValueOfCard(card){ 
    const result = Number.parseInt(card)
    //return Number.parseInt(card)
    // if (Number.isNaN(result)) {
    //     //console.log(card)

    //     return faceCardValues[card.split(" ")[0]]
    // } else {
    //     return result
    // }
// ^^ as a teranary operator:
return Number.isNaN(result) ? faceCardValues[card.split(" ")[0]] : result;
}
function pickRandomCard(deck) {
    let randomNumber = Math.floor(Math.random() * deck.length)
//    return deck[Math.floor(Math.random() *52)]
//    return deck[Math.floor(Math.random() * deck.length)]
    return deck.splice(randomNumber, 1)[0] 
   //return deck.splice(randomNumber, 1)[0]
}


let randomCard = pickRandomCard(deckOfCards) 
console.log(randomCard)
console.log(getValueOfCard(randomCard))

// console.log(deckOfCards);
// console.log(pickRandomCard(deckOfCards))


// John Goodman posted Bonus on nw class chat
// Some challenge steps for the blackjack project if you want to keep working on it:
// Make it so that the message tells you whether you're over 21 or not
// Make it so you can't draw a new card if you're over 21
// Even more challenging: edit the getValueOfCard function so that it makes an Ace worth 1 or 11, depending on whether it would put you over 21. May require making it so that the function has two parameters: card, and something like totalValueSoFar.
// Make it look nicer












// function drawCard() {
//     //console.log("Its Cold outside.")
//     let card = pickRandomCard(deckOfCards)
//     blackjackHtmlMethods.addCardToCardContainer(card)
//     console.log(card)
//     blackjackHtmlMethods.addMessageToMessageContainer(
//         getValueOfCard(card)
//     )
// }

// const faceCardValues = {
//     Ace: 1,
//     Jack: 10,
//     Queen: 10,
//     King: 10,

// }
// function getValueOfCard(card){
//     const result = Number.parseInt(card)
//     //return Number.parseInt(card)
//     if (Number.isNaN(result)) {
//         //console.log(card)

//         return faceCardValues[card.split(" ")[0]]
//     } else {
//         return resultsnaps
//     }
// }

// function pickRandomCard(deck) {
//     let randomNumber = Math.floor(Math.random() * deck.length)
//    //return deck[Math.floor(Math.random() *52)]
//    //return deck[Math.floor(Math.random() * deck.length)]
//     return deck.splice(randomNumber, 1)[0]
//    //return deck.splice(randomNumber, 1)[0]
// }

// let randomCard = pickRandomCard(deckOfCards)
// console.log(randomCard)
// // console.log(getValueOfCard(randomCard))
// //console.log(deckOfCards)


