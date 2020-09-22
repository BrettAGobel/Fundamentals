/*
*Variable, Data Types, and Typing
 */

/* variables contain values.  the = sign does not mean "equals to",
rather it means "contains the value of"
 */

let wordData = "Word Data";
console.log(wordData)

let x = 100;
let y = x * 0.07;
let z = y + x;

/* In Javascript there are 6 main datatypes, 5 primitive and 1 composite.
Primitive:
1.  Boolean
2.  Null
3.  Undefined
4.  Number
5.  String
Composite:
1.  Object
 */

/*  Objects are a datatype that is a collection of other datatypes,
consisting of key's and properties of those keys. A key can be another
object, nested within the first.
 */

let obj = {
    key1: "value",
    key2: 4,
    boolean : true,
    obj2: {
        obj2key1: "Internal Object Value"
    }
};
console.log(obj.key1)


/* Below, not supported in javascript because in a dynamic language
the type of value is determined at the time the program runs,
rather than at compile time
*/

let variable: string = "string";

/* Below, Javascript will attempt to match the datatypes,
converting the 5 to a string to result in the string "25"
 */

let var1 = "2";
let var2 = 5;
let result = var1 + var2

/* Operators are ways to perform mathematical or concatenation operations on values
 */

let add = 1 + 2;
let sub  = 2 - 1;
let mult  = 2 * 4;
let division = 4 / 2;
/*below returns a division with remainder
 */
let mod = 5 % 2;
let string = "String 1" + "String 2";
console.log(string)
