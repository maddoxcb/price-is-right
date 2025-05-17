import type { PlayerGuesses } from "./types"
import { PlayerEnum } from './types'

const getWinner = (guesses: PlayerGuesses, correctBid: number): string => {
    const firstPlayerBid = parseFloat(guesses.first) || 0
    const secondPlayerBid = parseFloat(guesses.second) || 0
    // If both players overbid or if the bids are the same, nobody wins the round
    if((firstPlayerBid === secondPlayerBid) || (firstPlayerBid > correctBid && secondPlayerBid > correctBid)) {
        return ""
    }
    // if the first player overbids, the second one wins
    if(firstPlayerBid > correctBid) {
        return PlayerEnum.Second
    }
    // if the second player overbids, the first one wins
    if(secondPlayerBid > correctBid) {
        return PlayerEnum.First
    }
    const firstPlayerDiff = correctBid - firstPlayerBid
    const secondPlayerDiff = correctBid - secondPlayerBid

    // If the first player bid was closer to the corret bid, it's correct
    if(firstPlayerDiff < secondPlayerDiff) {
        return PlayerEnum.First
    }
    return PlayerEnum.Second
}

export { getWinner }


