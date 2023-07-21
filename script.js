const changebg =()=>{
document.body.firstElementChild.computedStyleMap.backgroundColor ="red"

}
changebg();
let b= document.body
console.log("first child of b is ", b.firstElementChild)
let c= document.getElementsByClassName("card-title")[0]
c.style.color="red"