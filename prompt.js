let num = parseInt(prompt("enter a num"));
while(!num)
  {
     num = parseInt(prompt("enter a num"));

  }
const tn = Math.floor(Math.random()*num)+1;
console.log(tn);
