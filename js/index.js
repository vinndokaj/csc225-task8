// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    s = "";
    for(let i = string.length-1; i >= 0; i--){
        s += string[i];
    }
    return s;
}

// console.log(reverseThisString("Hello"));

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    s = "";
    for(let i = 0; i < string.length; i++){
        letter = string[i];
        if(letter === letter.toUpperCase()){
            s += letter.toLowerCase();
        } else {
            s += letter.toUpperCase();
        }
    }
    return s;
}

// console.log(swapCase("Hello World"));

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    return (
        array.map((temp) => {
            return (temp - 32) * (5/9);
        })
    )
}

// console.log(toCelcius([23, 32, 41, 50, 59]))

//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
    return (
        array.map((grade) => {
            return grade >= 75;
        })
    )
}

// console.log(passOrFail([20, 30, 50, 80, 90, 100]))

// write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    let soln = [];

    for(let i = 0; i < cardinalNumbers.length; i++){
        soln.push(cardinalNumbers[i] + ' is ' + germanNumbers[i])
    }

    return soln;
}

// console.log(germanNumbers())

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    return (
        numbers.filter((num) => {
            if(num < 2)
                return false;

            for(let i = 2; i <= num/2; i++){
                if(num%i === 0)
                    return false;
            }
            return true;
        })
    )
}

// console.log(returnPrimeNumbers());

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" 
function rulez() {
    for(let i = 1; i < 101; i++){
        if(i % 5 === 0 && i % 3 === 0){
            console.log("CSC225 RULES I LOVE JAVASCRIPT")
        } else if(i % 5 === 0){
            console.log("I LOVE JAVASCRIPT")
        } else if(i % 3 === 0){
            console.log("CSC225 RULES")
        } else {
            console.log(i)
        }
    } 
}

rulez();