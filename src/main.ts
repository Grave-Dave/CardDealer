import {removeCard} from "./utils.ts";
import {Card, CardDeck} from "./types.ts";
import './style.css'

let deckId = 0

const Figure: string[] = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

export default class CardDealer {
    private readonly cardsToDeal: number
    private joker: boolean
    public deck :CardDeck

    constructor(cards: number, joker: boolean) {
        this.cardsToDeal = cards
        this.joker = joker
        this.deck = this.createDeck()
    }

    public createDeck() {
        return {
            id: deckId,
            data: this.joker
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
    }
    public getRandomCard(): Card {
        let cardToDeal: Card
        const randomNum: number = Math.floor(Math.random() * this.deck.data.length)
        cardToDeal = this.deck.data[randomNum]
        removeCard([cardToDeal])
        return cardToDeal
    }

    public getMultipleCard(): Card[] {
        const cardArray: number[] = []
        let cardsToDeal: Card[]
        while (cardArray.length < this.cardsToDeal) {
            const randomNum: number = Math.floor(Math.random() * this.deck.data.length)
            if (cardArray.indexOf(randomNum) === -1) cardArray.push(randomNum);
        }
        cardsToDeal = cardArray.map(el => this.deck.data[el])
        removeCard(cardsToDeal)
        return cardsToDeal
    }


}
export const cards = new CardDealer(52, false)

console.log(cards.getMultipleCard())
console.log(cards.getRandomCard())

