let arr = [1,2,3,4,5];
//add 6 at end 
arr.push(6);
console.log(arr);
//remove first
arr.shift();
console.log(arr);
arr.splice(1,0,100);
console.log(arr);
//slice make a new array
let newarr = arr.slice(4,6);
console.log(newarr);
