let target = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);
while(true)
  {
    if(guess == target)
    {
      let guess = Math.floor(Math.random()*10);

      console.log("The number is ${guess}");
      break;
    }
    else
    {
      console.log("guessed number ${guess}..... incorrect");
    }
  }
