let sum=0;
let n=prompt("Enter the value of n");
n=Number.ParseInt(n);
for(let i=0;i<n;i++){
  sum=sum+i;
}
console.log("sum of first "+n+"natural number is "+sum);
let obj={
  harry:90,
  khushi:45,
  avi:56
}
for(let a in obj){
  console.log("marks of"+ a+"are "+obj[a])
}