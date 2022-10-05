

console.log("------------ EASY -----------------");


// // Easy #1 
console.log("Easy #1:");

let arr =[1,2,3,4,5,6,7,8,9,10]; 

let evens = arr.filter (n => n%2 === 0); 
console.log(evens);

let odds = arr.filter (n => n%2);
console.log(odds);
// The filter method creates a new array filled with elements that pass a test provided by a function.




//Easy #2 
console.log(" ");
console.log("Easy #2:");
let numberArray = [1,2,3,4,5,6,7,8,10];

var num; 

var oddNumbers = [];

for (num in numberArray) {

    if (num % 2 != 0) { 

        oddNumbers.push(num)

    } 

} 

console.log(oddNumbers);




console.log(" ");
console.log("------------ MEDIUM -----------------");

//Medium #1 
console.log("Medium #1:");

function vowelChecker(x) {
    if ((x === "a" || x === "e" || x === "i" || x ==="o"|| x ==="u")) {
        console.log("This is a vowel");
    } else
    console.log( "This is not a vowel");

}

vowelChecker("a");
vowelChecker("z");   




//Medium #2 
console.log(" ");
console.log("Medium #2:");


function split(str1, str2) {

    let parse1 = str1.split(""); //splits the string into its characters and puts the characters in an array. 
    let parse2 = str2.split("");

    let sortedParse1 = parse1.sort(); //sorts the character array in alphabetical order
    let sortedParse2 = parse2.sort(); 

    let strComp1 = sortedParse1.toString();  //converts the array values into a string for comparison. 
    let strComp2 = sortedParse2.toString(); 



    if (strComp1 === strComp2) {

        console.log("true");

    } else {

        console.log("False")

    }


}

split("gustavo", "ovatsug"); 

split("gustavo", "richard");





//Medium #3
console.log(" ");
console.log("Medium #3:");

function gdc_two_numbers(x, y) {
    var r;
    while(0 !== y) {
        r = x % y;
        x = y;
        y=r;
    }
    return x;
}

console.log(gdc_two_numbers(336,360));
console.log(gdc_two_numbers(78,126));





//Medium #4
console.log(" ");
console.log("Medium #4:");

// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles 



class car {

    constructor (make, model, year, mileage) {

        this.make = make ,
        this.model = model, 
        this.year = year, 
        this.mileage = mileage

    }


    driveToWork() {

        console.log(`driveToWork() - old mailage: ${this.mileage} mi | new mileage: ${this.mileage + 33} mi`); 
        return `old mailage: ${this.mileage} mi | new mileage: ${this.mileage + 33} mi`;         

    }


    driveAroundTheWorld() { 

        console.log(`driveAroundTheWorld() - old mailage: ${this.mileage} mi | new mileage: ${this.mileage + 24000} mi`); 
        return `old mailage: ${this.mileage} mi | new mileage: ${this.mileage + 24000} mi`;   

    }


    runErrands() {

        console.log(`runErrands() - old mailage: ${this.mileage} mi | new mileage: ${this.mileage + 30} mi`); 
        return `old mailage: ${this.mileage} mi | new mileage: ${this.mileage + 30} mi`;   

    }


}


let hellcat = new car ("Dodge", "Hellcat", "2022", 100); 


// test: 

hellcat.driveToWork(); 

hellcat.driveAroundTheWorld();

hellcat.runErrands(); 




console.log(" ");
console.log("------------ HARD -----------------");


// var string = "{Welcome to the Jungle}"; 
// var string = "[Welcome to the Jungle]";
// var string = "(Welcome to the Jungle)";  

// var check = string.includes(`{` && `}` || `[` && `]` || `(` && `)`);

// console.log(check); 



var string; 

function check(x) {

    if (x.includes(`{` && `}`)) {

        console.log("True");
        return "True"; 

    } else if (x.includes(`[` && `]`)) {

        console.log("True");
        return "True"; 

    } else if (x.includes(`(` && `)`)) {

        console.log("True");
        return "True"; 

    } else {

        console.log("False");
        return "False"; 

    }

}


// check(`{Welcome to the Jungle}`); 
// check(`[Welcome to the Jungle]`); 
// check(`(Welcome to the Jungle)`); 

check(`Welcome to the Jungle`); 

