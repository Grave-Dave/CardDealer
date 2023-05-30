import {cards} from './main'
import {Card} from "./types";

export function removeCard(id: Card[]): void {
    if (id.length > 1) {
        for (const el of id) {
            cards.deck.data.forEach((card, index) => card.id === el.id && cards.deck.data.splice(index, 1))
        }
    } else {
        cards.deck.data.forEach((card, index) => card.id === id[0].id && cards.deck.data.splice(index, 1))
    }
}

