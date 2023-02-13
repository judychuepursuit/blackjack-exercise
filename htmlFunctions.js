const blackjackHtmlMethods = {};

// Creates a new HTML element, containing the provided text.
// Then adds that HTML element to the card-container element.
blackjackHtmlMethods.addCardToCardContainer = function(card) {
    const container = document.getElementsByClassName("card-container")[0]
    let newHtmlElement = document.createElement("li")
    newHtmlElement.innerText = card
    container.appendChild(newHtmlElement)
}

// Puts the provided text into the message-container element.
blackjackHtmlMethods.addMessageToMessageContainer = function(message) {
    const container = document.getElementsByClassName("message-container")[0]
    container.innerText = message
}

// Once the Document Object Module (DOM) has loaded, assigns the
// "drawCard" function to be run every time the draw-button element
// is clicked.
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementsByClassName("draw-button")[0]
    button.onclick = drawCard
})