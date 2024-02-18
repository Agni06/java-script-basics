let str = "lol";
for(let i=0;i<=4;i++)
  {
    console.log("outer loop :"  ,i);
    for(int j=0;j<str.length;j++)
    {
      console.log("inner loop: ", str[j]);
    }
    
  }
for(let i=1;i<=10;i++)
  {
    console.log('i is ${i}');
    for(let j=1;i<4;j++)
      {
        console.log('    j is ${j}');
        
      }
  }

const seatingChart = [
[‘Kristen’, ‘Erik’, ‘Antonio’, ’Namita’], [‘Geoffrey’, ‘Jianita’, ‘Jim’, ‘Rum’], [‘Yuma’,  ’Skura’, ‘Jack’, ‘Agni’]
]
for(let i =0 ; i<seatingChart.length; i++)
  {
    console.log(seatingChart[i]);
  }

for(let i =0 ; i<seatingChart.length; i++)
  {
    let row = seatingChart[i];
    console.log('row: ${i}');
    for(let j=0;j<row.length;j++)
      {
        console.log(row[j]);
      }
  }
