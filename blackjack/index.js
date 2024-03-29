let cards = [] //array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let player = {
    name: "Per",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
   let randomNumber = Math.floor(Math.random() * 13 ) + 1
   if(randomNumber > 10){
       return 10
   }else if(randomNumber === 1){
        return 11
   }else {
       return randomNumber
   }
    
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    //render out firstCard and secondCard
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent  += cards[i] + " "
    }
    // render out ALL the cards we have
    sumEl.textContent = "Sum: " + sum
    if (sum < 21){
        message="Do you want to draw a new card? "
    } else if (sum === 21) {
        message="You've got Blackjack! "
        hasBlackJack = true
    } else {
        message="You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
    
    
}

function newCard(){
    if(isAlive && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
} 

/* let sentence = ["Hello", "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")


for(let i = 0; i < sentence.length; i++){
    greetingEl.textContent += sentence[i] + " "
} */