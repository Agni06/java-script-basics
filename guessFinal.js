let max = praseInt(prompt("enter a number"));
while(!max)
  {
    max = praseInt(prompt("enter a number"));
  }
const targetNum = Math.floor(Math.random()*max + 1);
let guess = praseInt(prompt("enter a number"));
const target = 1;

while(parseInt(guess)!==targetNum)
{
  if(guess==='q')
  {
    break;
    
  }
  target++;
  
  if(guess>targetNum)
  {
    guess = prompt("To big, please enter small number");
    
    
    
  }
  else
  {
    guess = prompt("To small, please enter big number");
    
    
  }
}
if(guess=='q')
{
  console.log("Ok you quite");
  
}
else
{

console.log("you guessed ${guess} and took ${target} chances");
}
