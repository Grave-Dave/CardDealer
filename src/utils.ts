import { Card, CardDeck } from './types';

export function removeCard(cards: Card[], deck: CardDeck): void {
	if (cards.length > 1) {
		for (const el of cards) {
			deck.data.forEach((card, index) => card.id === el.id && deck.data.splice(index, 1));
		}
	} else {
		deck.data.forEach((card, index) => card.id === cards[0].id && deck.data.splice(index, 1));
	}
}
