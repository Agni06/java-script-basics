let pass = promt("Enter a password");
if(pass.length>=6 and pass.indexOf(' ')===-1)
{
  console.log("valid");
}
else
{
  console.log("invalid");
}
