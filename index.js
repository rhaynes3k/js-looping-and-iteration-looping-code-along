let cards = [];
function writeCards(peeps){
  for(let c = 0; c < peeps.length; c++){
    cards.push(`Thank you, ${peeps[c]}, for the wonderful surprise gift!`)
  }
  return cards;
}
function countDown(num){
  let i=0;
  while(i <= num){
    console.log(num-i)
    i++
  }

}
