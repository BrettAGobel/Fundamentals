/*
*Objects, Interfaces, and API's
 */

/*Objects contain state or current data that describes the object,
and functionality.  These can be understood as nouns and verbs which
are associated with the object
 */

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "small",
    bark: function (typeOfBark){
        console.log("Bark!");
    }
}
// can call objects function by object.function syntax
dog.bark()

/*API = Application program interface.  API allows you to interact with specific
functions from another application
*/

/* here is an example of how a function can modify an object which exists kind of
in a global sense outside that function.  This is passing a value by reference
 */
function x(y) {
    y = y + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);