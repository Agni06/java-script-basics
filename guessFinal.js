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
  guess = parseInt(guess);
  
  if(guess==='q')
  {
    break;
    
  }
  
  
  if(guess>targetNum)
  {
    target++;
    guess = prompt("To big, please enter small number");
    
    
    
  }
  if else(guess<targetNum)
  {
    target++;
    guess = prompt("To small, please enter big number");
    
    
  }
  else
  {
    guess = prompt("Invalid , please enter a number or q ");
    
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
