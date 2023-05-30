import CardDealer from './CardDealer'
import './style.css'


const dealer = new CardDealer()

console.log(dealer.deck.data)
console.log(dealer.setJoker(true))
console.log(dealer.deck.data)
console.log(dealer.shuffleDeck())
console.log(dealer.getMultipleCard(10))
console.log(dealer.getMultipleCard(10))
console.log(dealer.getMultipleCard(10))
console.log(dealer.getMultipleCard(10))
console.log(dealer.getMultipleCard(10))
console.log(dealer.getRandomCard())
console.log(dealer.deck)

