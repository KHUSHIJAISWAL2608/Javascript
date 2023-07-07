let marks={
    harry : 29,
    khushi : 30,
    avi: 31,
}
for(let key in marks ){
    console.log("The marks of  "+ key + " are "+ marks[key])
}
for (let i=0; i<Object.keys(marks).length; i++){
    console.log ("The marks of "+ Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]])
}