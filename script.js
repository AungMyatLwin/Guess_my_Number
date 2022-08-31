'use strict';
console.log(document.querySelector('.message').textContent)
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let hight_score=0;
let temp=0;

function msg(strMsg){
  document.querySelector('.message').textContent=strMsg
}

document.querySelector('.check').addEventListener('click',function(){
  let guess=Number(document.querySelector('.guess').value);
  console.log(guess,typeof guess);
  console.log(!guess)
  //when there is no input
  if(!guess)
  {
  msg("NO NUMBER");
  }

  //when player wins
  else if(guess===secretNumber)
  {
      msg("You Win")
      document.querySelector('.number').textContent=secretNumber;
      document.querySelector('body').style.backgroundColor='#60b347';
      document.querySelector('.number').style.width='30rem';
      console.log(score)
      if(score>hight_score){
      hight_score=score
      temp=hight_score
      document.querySelector('.highscore').textContent=hight_score;
      }
  }
  //guess too low
  else if(guess<secretNumber)
  {
      if(score>1)
      {
      msg("Too Low")
        score-=1;
        document.querySelector('.score').textContent=String(score);
      }
      else
      {
        document.querySelector('.message').textContent="You lost the game"
        document.querySelector('.score').textContent=0;
      }
  }
    //guess too High
  else if(guess>=secretNumber)
    {
        document.querySelector('.message').textContent="Too High"
        score-=1;
        document.querySelector('.score').textContent=String(score);


    }
  })

// Again.. Restoring The initial values and colors
document.querySelector('.again').addEventListener('click',()=>{
  score=20;
  secretNumber=Math.trunc(Math.random()*20)+1;
  document.querySelector('.score').textContent=score;
  document.querySelector('.guess').value=' ';
  document.querySelector('.message').textContent="Start guessing...";

  document.querySelector('.number').textContent="?";
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem';
  document.querySelector('.highscore').textContent=0;
})
