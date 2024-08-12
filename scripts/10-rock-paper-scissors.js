let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();
// if (score===null){
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   }
//}
function playGame(playerMove){
const comove= pickComputerMove();

let result = '';
if (playerMove==='Nagini'){
if(comove === 'Neville'){
  result = 'You lose.';
} else if(comove === 'Snape'){
  result = 'You win.';
} else if(comove === 'Nagini'){
  result = 'Tie.';
}
} else if (playerMove==='Snape'){
if(comove === 'Neville'){
  result = 'You win.';
} else if(comove === 'Snape'){
  result = 'Tie.';
} else if(comove === 'Nagini'){
  result = 'You lose.';
}
} else if (playerMove==='Neville'){      
if(comove === 'Neville'){
  result = 'Tie.'
} else if(comove === 'Snape'){
  result = 'You lose.';
} else if(comove === 'Nagini'){
  result = 'You win.'
}
}

if(result === 'You win.'){
score.wins ++;
}else if(result === 'You lose.'){
score.losses++;
}else if(result ==='Tie.'){
score.ties++;
}
localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-result').innerHTML= result;
document.querySelector('.js-moves').innerHTML = 
`You
<img src="images/${playerMove}.png" class="move-icon">
<img src="images/${comove}.png" class="move-icon">
Computer`;
}

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML= `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
const randomno = Math.random();
let comove = '' ;
if(randomno >=0 && randomno < 1/3){
  comove = 'Neville';
} else if (randomno >=1/3 && randomno <2/3){
  comove = 'Snape';
} else if ( randomno >=2/3 && randomno<1){
  comove = 'Nagini';
}

return comove;
}