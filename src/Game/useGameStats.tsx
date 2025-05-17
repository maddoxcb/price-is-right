import { useState } from 'react';
import type { PlayerGuesses, PlayerWins, Item } from './types';
import { getWinner } from './utils';
import { PlayerEnum } from './types'

const useGameStats = () => {
    const [currentPlayer, setCurrentPlayer] = useState<string>(PlayerEnum.First);
    const [playerGuesses, setPlayerGuesses] = useState<PlayerGuesses>({
        first: '',
        second: ''
    });
    const [playerWins, setPlayerWins] = useState<PlayerWins>({
        first: 0,
        second: 0
    })
    const [currentQuestionIndex, setQuestionIndex] = useState<number>(0)
    const [questions, setQuestions] = useState<Item[]>([])

    const togglePlayers = (): void => {
        if(currentPlayer ===  PlayerEnum.First) {
            setCurrentPlayer(PlayerEnum.Second)
        } else {
            setCurrentPlayer(PlayerEnum.First)
        }
    }
    const clearGame = (): void => {
        setCurrentPlayer(PlayerEnum.First)
        setPlayerGuesses({
            first: '',
            second: ''
        })
        setPlayerWins({
            first: 0,
            second: 0
        })
        setQuestionIndex(0)
    }

    const isEndGame: boolean = currentQuestionIndex === questions.length

    const handleSubmission = (): void => {
        // If that's the second user, increment the question and clear out prevous answers
        if(currentPlayer === PlayerEnum.Second) {
            const winner = getWinner(playerGuesses, questions[currentQuestionIndex].price)
            if(winner) {
                const prevWins = winner === PlayerEnum.First ? playerWins.first : playerWins.second
                setPlayerWins({...playerWins, [winner]: prevWins + 1})
            }
            // Increment current question
            setQuestionIndex(prev => prev + 1)
            // Clear guesses for next question
            setPlayerGuesses({ 
                first: '',
                second: ''
            })
        }
        togglePlayers()
    }
    const handleBid = (event: React.ChangeEvent<HTMLInputElement>) => {
        const bid = event?.currentTarget?.value
        // 0 is valid
        if(bid !== undefined) {
            // Input is a string so it needs to be parsed to an integer
            const updatedGuesses = {...playerGuesses, [currentPlayer]: bid}
            setPlayerGuesses(updatedGuesses)
        }
        
    }
    const getWinningMessage = (): string => {
        if(isEndGame && playerWins.first > playerWins.second) {
            return 'Congratulations player 1'
        }
        if(isEndGame && playerWins.first < playerWins.second) {
            return 'Congratulations player 2'
        }
        return 'Game tied!'
    }
    const getCurrentQuestion = (): string => {
        // It increments past the length after the last round
        if(currentQuestionIndex === questions.length) {
            return "";
        }
        return questions[currentQuestionIndex].name;
    }
    
    return {
        setQuestions,
        currentPlayer,
        playerGuesses,
        isEndGame,
        handleBid,
        handleSubmission,
        getWinningMessage,
        clearGame,
        getCurrentQuestion,
    }
}

export default useGameStats
