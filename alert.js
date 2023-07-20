alert("enter the value of a");
let a= prompt("Enter a here ",158);
a= Number.parseInt(a);
alert("you've entered a of "+(typeof(a)));
let write = confirm("Do you want to write ");
if(write){
  document.write(a);
}
else{
  document.write("Please allow me")
}
