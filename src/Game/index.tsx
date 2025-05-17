import { useEffect } from 'react';
import { getData } from './api'
import useGameStats from './useGameStats'
import { PlayerEnum } from './types'

const Game = () => {    
    const {
        setQuestions,
        currentPlayer,
        playerGuesses,
        isEndGame,
        handleBid,
        handleSubmission,
        getWinningMessage,
        clearGame,
        getCurrentQuestion,
    } = useGameStats()
    useEffect(() => {
        getData().then(results => {
            if(results) {
                setQuestions(results)
            }
        }).catch(error => console.log('Error retrieving data: ', error))
    }, [])
    const currentInput: string = currentPlayer === PlayerEnum.First ? playerGuesses.first : playerGuesses.second;
    const playerNumber: string = currentPlayer === PlayerEnum.First ? '1' : '2'
    return (
        <>
            {!isEndGame && (
                <>
                    <h1>Player {playerNumber} - Your turn:</h1>
                    <div>
                        <label className="pr-4" htmlFor="question">{getCurrentQuestion()}</label>
                        <input id="question" name="question" className="outline-solid" type="number" onChange={handleBid} value={currentInput}/>
                    </div>
                    <button className="outline-solid" onClick={handleSubmission}>Submit Guess</button>
                </>
            )}
            {isEndGame && (
                <>
                    <h1>{getWinningMessage()}</h1>
                    <div>
                        <button className="outline-solid" onClick={clearGame}>Restart Game</button>
                    </div>
                </>
            )}
        </>
    )
}

export default Game;
