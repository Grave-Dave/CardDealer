import { removeCard } from './utils.ts';
import { Card, CardDeck, Figure } from './types.ts';

export default class CardDealer {
	private joker: boolean;
	public deck: CardDeck;
	private deckId: number;

	constructor() {
		this.joker = false;
		this.deck = this.createDeck();
		this.deckId = 0;
	}

	public createDeck() {
		this.deckId++;
		return {
			id: this.deckId,
			data: this.joker
				? new Array(54).fill(0).map(
						(_el: number, i: number): Card => ({
							id: i,
							figure: i < 52 ? Figure[i % 13] : 'Joker',
							color:
								i <= 12 ? '♣ Clubs' : i <= 25 ? '♦ Diamonds' : i <= 38 ? '♥ Hearts' : i <= 51 ? '♠ Spades' : '🃏 Joker',
						})
				  )
				: new Array(52).fill(0).map(
						(_el: number, i: number): Card => ({
							id: i,
							figure: Figure[i % 13],
							color: i <= 12 ? '♣ Clubs' : i <= 25 ? '♦ Diamonds' : i <= 38 ? '♥ Hearts' : '♠ Spades',
						})
				  ),
		};
	}
	public getRandomCard(): Card | null {
		let cardToDeal: Card;
        if(this.deck.data.length){
            const randomNum: number = Math.floor(Math.random() * this.deck.data.length);        
            cardToDeal = this.deck.data[randomNum];
            removeCard([cardToDeal], this.deck);
            return cardToDeal;
        }
        return null
	}

	public getMultipleCard(cards: number): Card[] | null {
		const cardArray: number[] = [];
		let cardsToDeal: Card[];
		if (cards > 0 && cards <= this.deck.data.length) {
			while (cardArray.length < cards) {
				const randomNum: number = Math.floor(Math.random() * this.deck.data.length);
				if (cardArray.indexOf(randomNum) === -1) cardArray.push(randomNum);
			}
            cardsToDeal = cardArray.map(el => this.deck.data[el]);
            removeCard(cardsToDeal, this.deck);
            return cardsToDeal;
		}
        return null
	}

	public setJoker(joker: boolean) {
		this.joker = joker;
		this.deck = this.createDeck();
	}
    
    // with this function, user can shuffle deck of cards, which is sorted by default

	public shuffleDeck() {
		for (let i = 0; i < this.deck.data.length; i++) {
			let shuffle = Math.floor(Math.random() * this.deck.data.length);
			let temp = this.deck.data[i];
			this.deck.data[i] = this.deck.data[shuffle];
			this.deck.data[shuffle] = temp;
		}
		return this.deck.data;
	}
}
