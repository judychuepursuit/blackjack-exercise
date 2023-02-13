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

function drawCard() {
    console.log("Drawing card.")
    let card = drawCardFromDeck(deck)
    drawnCards.push(card)
    blackjackHtmlMethods.addCardToCardContainer(card)
    blackjackHtmlMethods.addMessageToMessageContainer(`Total: ${getTotalCardValue(drawnCards)}`)
}

function drawCardFromDeck(deck) {
    let randomNumber = Math.floor(Math.random() * deck.length)
    return deck.splice(randomNumber, 1)[0];
}

const faceCardValues = {
    Ace: 1,
    Jack: 10,
    Queen: 10,
    King: 10,
}

function getValueOfCard(card) {
    let cardValue = Number.parseInt(card);
    if (Number.isNaN(cardValue)) {
        return faceCardValues[card.split(" ")[0]]
    } else {
        return cardValue
    }
}

function getTotalCardValue(hand) {
    let total = 0;
    for (const card of hand) {
        total += getValueOfCard(card);
    }
    return total;
}

let deck = deckOfCards.slice()

let drawnCards = [];