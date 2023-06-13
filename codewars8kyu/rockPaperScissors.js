/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"*/
//Solution:
const rps = (p1, p2) => {
    //Use object to define the rules of the game //Ex: rock beats scissors 
    const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };
  //Use if to check if both have the same value if they do return draw
  if (p1 === p2) {
    return `Draw!`;
    //else check  player1 value with the rules object and if it matches the value then player 1 won but if not then player 2 won 
  } else {
    return `Player ${rules[p1] === p2 ? 1 : 2} won!`;
  }
};