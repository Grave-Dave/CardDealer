import { Card, CardDeck } from './types';

export function removeCard(id: Card[], deck: CardDeck): void {
	if (id.length > 1) {
		for (const el of id) {
			deck.data.forEach((card, index) => card.id === el.id && deck.data.splice(index, 1));
		}
	} else {
		deck.data.forEach((card, index) => card.id === id[0].id && deck.data.splice(index, 1));
	}
}
