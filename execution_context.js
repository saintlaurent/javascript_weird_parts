'use strict';
// someFunction();
hoisted();
console.log("Animal " + animal);
var animal = 12345;

var o = { p: 1, p: 2 };
let someFunction = function(){
    console.log("Not hoisted");
}

function hoisted(){
    console.log("Hoisted");
}



function a(){
    b();
    const b =  function(){
        console.log('myVar ' + myVar);
    }

    
    var myVar = 2;
}

var myVar = 1;
a();