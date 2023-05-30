export interface CardDeck {
    id: number,
    data: Card[],
}

export interface Card {
    id: number
    figure: string,
    color: string
}

export const Figure: string[] = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']






