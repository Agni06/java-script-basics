let pass = "Dog cat";
if(pass.length>=6)
{
  if(pass.indexOf(' ')!==-1)
  {
    console.log("password does not contains spaces");
    
  }
  else
  {
    console.log("valid password");
  }
}
else
{
console.log("password is too short");
  
}
