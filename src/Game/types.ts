type Item = {
    id: number,
    name: string,
    price: number
}

type PlayerWins = {
    first: number,
    second: number
}

// Need to support empty fields if user deletes everything
type PlayerGuesses = {
    first: string,
    second: string
}

const PlayerEnum = {
    First: 'first',
    Second: 'second'
} as const 

export type { Item, PlayerWins, PlayerGuesses }
export { PlayerEnum }
