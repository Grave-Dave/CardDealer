import {cardDeck} from './main'
import {Card} from "./types";

export function removeCard(id: Card[]): void {
    if (id.length > 1) {
        for (const el of id) {
            cardDeck.data.forEach((card, index) => card.id === el.id && cardDeck.data.splice(index, 1))
        }
    } else {
        cardDeck.data.forEach((card, index) => card.id === id[0].id && cardDeck.data.splice(index, 1))
    }
}

