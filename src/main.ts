import './style.css'

let deckId: number = 0
let joker: boolean = false

interface CardDeck {
    id: number,
    data: Card[],
    joker: boolean
}

interface Card {
    id: number
    figure: string,
    color: string
}

const Figure: string[] = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

const cardDeck: CardDeck = {
    id: deckId,
    data: new Array(52).fill(0).map((el: number, i: number): Card => ({
        id: i + 1,
        figure: Figure[i % 13],
        color: i <= 12 ? 'Clubs' : i <= 25 ? 'Diamods' : i <= 38 ? 'Hearts' : 'Spades'
    })),
    joker: joker
}

function removeCard(id: number[]): void {
    if (id.length > 1) {
        for (const el:number of id) {
            cardDeck.data.forEach(card => card.id === el && cardDeck.data.splice(el, 1))
        }
    } else {
        cardDeck.data.forEach(card => card.id === id[0] && cardDeck.data.splice(id[0], 1))
    }
}

class CardDealer {
    private deckToDeal: number

    constructor(deck: number) {
        this.deckToDeal = deck
    }

    public getRandomCard(): Card {
        const randomNum: number = Math.floor(Math.random() * 52) + 1
        removeCard([randomNum])
        return cardDeck.data[randomNum]
    }

    public getMultipleCard(): Card[] {
        const cardArray: number[] = []
        while (cardArray.length < this.deckToDeal) {
            const randomNum: number = (Math.floor(Math.random() * 52) + 1)
            if (cardArray.indexOf(randomNum) === -1) cardArray.push(randomNum);

        }
        removeCard(cardArray)
        return cardArray.map(el => cardDeck.data[el - 1])
    }

}

const cards: CardDealer = new CardDealer(5)

console.log(cards.getMultipleCard())
console.log(cards.getRandomCard())
console.log(cardDeck.data)


// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//
//   </div>
// `

