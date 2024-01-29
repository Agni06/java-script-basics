let a = [];
let b= [1,2,3,4];
let arr = ["Agni", "12", false, "teja", 10, true];
console.log(arr.length);
console.log(a.length);
console.log(b.length);
console.log(arr);

arr[2]  = 50;
arr[5] = NaN;

console.log(arr);
arr.push('oliver');
console.log(arr);
arr.push('harry','hermione');
console.log(arr);
console.log(arr.pop());
let f = arr.shift();
console.log(f);
console.log(arr.shift());
console.log(arr.shift());

console.log(arr.unshift("VIP1"));
console.log(arr.unshift("VIP2"));

let cat = ['blue','kitty'];
let dog = ['rusty','wyatt'];
console.log(cat.concat(dog));

console.log(cat.includes('blue'));
console.log(cat.includes('rusty'));

console.log(cat.indexOf('blue'));
console.log(dog.indexOf('wyatt'));
console.log(dog.indexOf('kitty'));


console.log(cat.reverse());
console.log(dog.reverse());

let score = [3,-1,2.33,2500,9,100];
console.log(score.sort());
let months = ['feb','dec','may','jan'];
console.log(months.sort());

let colors = ['orange','red','yellow','green','blue','indigo','violet'];
console.log(colors.slice(5,1))
console.log(colors.slice(5))
