import {removeCard} from "./utils.ts";
import {Card, CardDeck} from "./types.ts";
import './style.css'

let deckId = 0

const Figure: string[] = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

export default class CardDealer {
    private readonly deckToDeal: number
    private joker: boolean

    constructor(deck: number, joker: boolean) {
        this.deckToDeal = deck
        this.joker = joker
    }

    public getRandomCard(): Card[] {
        let cardToDeal: Card
        const randomNum: number = Math.floor(Math.random() * cardDeck.data.length)
        cardToDeal = cardDeck.data[randomNum]
        removeCard([cardToDeal])
        return [cardToDeal]
    }

    public getMultipleCard(): Card[] {
        const cardArray: number[] = []
        let cardsToDeal: Card[]
        while (cardArray.length < this.deckToDeal) {
            const randomNum: number = Math.floor(Math.random() * cardDeck.data.length)
            if (cardArray.indexOf(randomNum) === -1) cardArray.push(randomNum);
        }
        cardsToDeal = cardArray.map(el => cardDeck.data[el])
        removeCard(cardsToDeal)
        return cardsToDeal
    }

    public checkJoker(): boolean {
        return this.joker
    }
}

const cards = new CardDealer(10, false)

export const cardDeck: CardDeck = {
    id: deckId,
    data: cards.checkJoker()
        ? new Array(54).fill(0).map((el: number, i: number): Card => ({
            id: i,
            figure: i < 52 ? Figure[i % 13] : 'Joker',
            color: i <= 12 ? 'Clubs' : i <= 25 ? 'Diamonds' : i <= 38 ? 'Hearts' : i <= 51 ? 'Spades' : 'Joker'
        }))
        : new Array(52).fill(0).map((el: number, i: number): Card => ({
            id: i,
            figure: Figure[i % 13],
            color: i <= 12 ? 'Clubs' : i <= 25 ? 'Diamonds' : i <= 38 ? 'Hearts' : 'Spades'
        }))

}

let cardToDisplay : string[]
let cardsToDisplay : string[]

function displayCard() {
    cardToDisplay = cards.getRandomCard().map(el => `<div class="card">${el.figure}</div>`)
    render()
}
function displayCards() {
    cardsToDisplay = cards.getMultipleCard().map(el => `<div class="card">${el.figure}</div>`)
    render()
}

document.querySelector('.random').addEventListener('click', displayCard)
document.querySelector('.multiple').addEventListener('click', displayCards)

function render(){

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="box">  
        ${cardToDisplay ? cardToDisplay : cardsToDisplay ? cardsToDisplay : 'choose card'}       
      </div>
`
}

