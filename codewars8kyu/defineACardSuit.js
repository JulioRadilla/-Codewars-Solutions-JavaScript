/*You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'*/
//Solution:
function defineSuit(card) {
    //Get the suit of the card by getting the last character of the string
    let suit = card.substr(-1);
    //make conditionals to check if thats the suit 
    return suit === '♣' ? 'clubs' : suit === '♠' ? 'spades' : suit === '♦' ? 'diamonds' : suit === '♥' ? 'hearts' : null 
}