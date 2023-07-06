let a=3;
let b=4;
let c=7;

console.log("Average of a and b is ", (a+b)/2)

function avg(x,y){
  return (x+y)/2
}

console.log("Average of a and b is ", avg(a,b));
console.log("Average of a and b is ", avg(c,b));
console.log("Average of a and b is ", avg(a,c));
const hello= () => {
    console.log("Hey how r u ")
    return "hi"
  }
  
  let v=hello();
  console.log(v);
  
  const sum=(a,b)=> {
    return a+b;
  }
  console.log("sum of 4 and 9" ,sum(4,9));