function functionName(Parametri1,Parametri2){
    // code that need to be executed
}

function showMessage(){
    alert("This message is inside the funcction");
}

showMessage();

function sum(Number1,Number2){
    return Number1 + Number2;
}

console.log(sum(25,5));

var result = toCelsius(54);

console.log("54 farhnheit is equal to "+result+"celsius");

function toCelsius(f){
    return(5/9) * (f-32);
}

console.log("54 farhnheit is equal to "+toCelsius(54)+"celsius");

var arrrowFunction = () => alert("Hello World");
arrrowFunction();

var arrrowFunction = name => alert('Hello ${name}');
arrrowFunction ("John Doe");

function newFunction(){
    var localVar = "This is a local variable";
    alert(localVar);
}

function toSeconds(minuta){
    return minutes * 60;
}

var result = toSeconds(5);

console.log("5 minuta jane" + result + "sekonda");

//kjo nuk punon
newFunction();

//kjo nuk punon
alert(localVar);


//objektet

var car = { name:"BMW",
     color:"grey",
     year:2020, 
     kilometers:200444
    startEngine : function(){
        alert("Vroom");
    }
};


var school = {
    name:"Digital School",
    subject:"programming",
    students:5,
    year:2026
};


alert(car.name);

alert(car['color']);

var computer = new Object();

computer.name = "Lenovo";
computer.CPU = "intel i7";
computer.RAM = "16GB";
computer.GPU = "nVidia GeForce 4070";

computer.type = function () {
    return this.name + ", " + this.CPU + ", " + this.RAM + ", " + this,GPU
};  

delete computer.GPU;

console.log(car.getKilometers);
car.setKilometers = 100;
console.log(car.getKilometers);
