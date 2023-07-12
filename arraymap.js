let arr=[45,23,56,11];
console.log(arr);

let a=arr.map((value)=>{
    console.log(value)
    return value+1
})
console.log(a); 
let b= arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value+index;
})
console.log(b);
let arr2=[1,2,45,32,2,5,45,67,89,7,6,5];
    let d= arr2.filter((value)=>{
        return value<8;
    });
    console.log(d);
    let arr3=[2,3,4,5,8,15];
    let c =arr3.reduce((h1,h2)=>{
return h1+h2;
})
console.log(c);
const newarr=(h1,h2)=>{
 return h1+h2;
}
let newaar2=arr3.reduce(newarr);
console.log(newaar2);
