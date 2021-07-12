const cards = ["c", "d", "o", "p", "a", "m", "r"];

const shuffledCards = (cards) => {
for (var i=0; i<cards.length; i++){
  var j= Math.floor(Math.random()*(i+1));
  var temp = cards[i];
  cards[i]=cards[j];
  cards[j]=temp;
}
return cards;
}
console.log(shuffledCards(cards));