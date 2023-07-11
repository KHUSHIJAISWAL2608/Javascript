let num=[1,2,3,4,5,6,7,8,];
console.log(num.length);

// delete  num[0];
console.log(num[0]);
console.log(num.length)
let num_2=[11,121,131,14,15,16,17];
let num_concat=num.concat(num_2);
console.log(num_concat);
let num_3=[111,131,331,314,315,316];
let num_4=num.concat(num_2,num_3);
console.log(num_4);
num.sort();
console.log(num_2);
let deleted=num.splice(2,4,122,113,114,334);
console.log(deleted);
console.log(num);
let num_6=num_3.slice(3);//does n't  modify original array.
console.log(num_6);