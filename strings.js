let name= "harry";
console.log(name.length)
let friend ='prakash'
console.log(friend)
let myFriend= "avinash"
console.log(myFriend);

// Nikhil is a friend of pramod
let  boy1="raju"
let  boy2="ram";
 let sentence = `${boy1} is friend of ${boy2}`;
 console.log(sentence);

 let fruit= 'bana\'na';
 console.log(fruit);

 //to Upper case in Strings
 let nam="Khushi";
 console.log(nam.toUpperCase());

 //to Lower case in Strings
 let names="khusHI";
 console.log(names.toLowerCase());
 //slice of strings from 2 to 4 ( 4 not included in the string)
 namee="khushi jaiswal";
 console.log(namee.slice(2,4));

 //slice 2 here  2 to end 
 console.log(namee.slice(2));

 //Replace  the strings
sent= namee.replace("jaiswal" , "singh");
console.log(sent);

//concatination 
let name3= namee.concat(name , "yes");
console.log(name3);

// remove white spaces 
let name4= "    khushi     singh     "
let newname= name4.trim();
console.log(newname);
console.log(name3[3]);
