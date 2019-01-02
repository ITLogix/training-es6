/**
 * @description Template string
 * @example Using template strings instead of concatenation
 */
function templateStrings() {
    // ES5
    var name = 'Alex';
    var greetings_c = 'Hello ' + name + ', how are you?'; // Using concatenation
    console.log(greetings_c);
    
    // ES6
    var name = 'Alex';
    var greetings_t = `Hello ${name}, how are you?`; // Using template strings
    console.log(greetings_t);
}


/**
 * @description new variable types/declarations
 */

/**
 * @example PI
 */
function constVariables() {
    // constant variables, reassignment gives a type error
    const pi = 3.14;
    try {
        pi = 5;
    } catch (error) {
        console.log(`PI:${pi} is constant, Error: ${error.message}`);
    }
}

/**
 * @example block Scoped ES6 variables
 */
function blockScopedVariables() {
    // ES5, no block scoping
    var a = 'a';
    {
        var a = 'A';
        console.log(a);
    }
    console.log(a);

    // ES6
    let b = 'b';
    {
        let b = 'B';
        console.log(b);
    }
    console.log(b);
}

/**
 * @description arrow function
 */
function arrowFoos() {
    // Simple function
    let hewo_foo = () => {
        console.log('Hello world');
    }
    
    // Arrow function with 1 parameter
    let foo = name => {
        console.log(`Hi dear ${name}`);
    }
    
    // Arrow function with 1+ parameters
    let bar = (x,y,z) => {
        console.log(`x: ${x}, y: ${y}, z: ${z}`);
    }
    
    // quadratic pow function
    let pow = number => number * number;

    hewo_foo();
    foo('John');
    bar(5,9,3);
    let five_pow = pow(5);
    console.log(five_pow);
}

templateStrings();

constVariables();

blockScopedVariables();

arrowFoos();