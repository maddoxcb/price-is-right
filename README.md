# Price is Right Game — Interview Project

## Project Overview

Build a simple game inspired by "The Price is Right" using React and TypeScript.

## Instructions

1. **Consume an API endpoint** at `/api/items` (or http://localhost:5173/api/items for the absolute path) that returns a list of items. Each item will have a name and price.
2. **Implement a two-player game**: Player 1 and Player 2.
3. **Display items one at a time**. For each item, prompt both players to submit their bids.
4. **Determine the winner for each item**: The player whose bid is closest to the actual price (but not more the price) wins that round.
5. **Tally the results** after all items have been bid on. The player who wins the most rounds is the overall winner.
6. **Show the winner** at the end of the game.
7. **Bonus**: After displaying the winner, reset the game state so players can play again.

## Requirements

- Use React and TypeScript.
- Use Node.js and npm for setup.

## Getting Started

- Install dependencies:  
  `npm install`
- Run the app:  
  `npm run dev`
- The app should be available at `http://localhost:5173`.

## Styling

- If you wish to include styling, the application has tailwindCSS 4.0 pre-configured.

## API Example

- **GET** `/api/items`  
  Returns:
  ```json
  [
    {
      "name": "Item Name",
      "price": 100
    }
  ]
  ```

---