/*
*Conditionals, FUnctions, Scope and Loops.
 */

/* Conditionals are code that result in a true or false/ boolean
 */

// Equals
let equals = 1 ===1;
console.log(equals);
//Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

//Greater than Equals
let greaterThanEq = 5 >= 5;

//Less Than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 3.10;
let storeB = 4.40;

/* An if block is a control statement.  It allows us to control programatic flow.
 */


let storeAIsLower = storeA > storeB;
/*
The code in curly brackets is executed only if the value
in the parenthesis returns true if it returns false, else is used
instead.  Else if allows you to suppose for multiple scenarios
 */
function compareStorePrices (StoreA,StoreB) {
let storeAIsLower = storeA < StoreB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("their prices are equal.")
    }
}

compareStorePrices(10, 5)
compareStorePrices(7, 10)
/* to reuse if else statements easilly, we encapsulate them in a function and pass
values into it. To have a function give us a value it must have a return statement
 */

function squareNum (number) {
    return number * number
}

squareNum(4)

/* its clean coding to create a function, then pass that entire function to a variable
try to ensure functions achieve 1 single purpouse per function
 */
let squaredNumber = squareNum(4)
console.log(squaredNumberNum()


/* scope is the understanding that variables and values are only
accessible within certain levels of the code.   Below, X is a global variable
whereas n and m are local to the function.  Global variables are
accessible within a function but not the other way around.
Global will override local.
 */

let x = 10;
function addNumbers (n, m, x) {
    console.log(x);
    let b;
    if (1===1) {
        let b = 8;
    }
    return n + m;

}

addNumbers(2, 3, 8)

/* Lexical scoping means that the logic cascades down
 */

/* Arrays are a type of data structure.  An array is a type of object.
Arrays are indexed at 0 (ie. 1 in the array below is indexed at position 0)
 */
//              0  1  2  3  4
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c'];
console.log(ourArray[4] [1]);

/* above 4,1 will find the second indexed value in the 4th indexed value in the array.
 */


/*loops are a structure similar to an if block, that repeat
until certain conditions are met. Putting loops within loops
yeilds the result that an inner loop will loop for each loop of the outer loop.
 */


for (let i = 0; i<ourArray.length; i++) {
    console.log(ourArray[i]);
}

/* while loop runs until a conditional is met false

 */
let x = 0;
while (x < 10) {
    console.log('ran')
    x = x + 1;
}