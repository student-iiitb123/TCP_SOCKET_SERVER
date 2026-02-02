let nums = [1,2,3,4];
let bigarr = nums.filter((i) => {
    return i>10;
})
console.log(bigarr);

//this method is used for remove negative get pass

//reduse 
let sum = nums.reduce((i,acc) => {
 return   acc=acc+i;
})

console.log(sum);