const math = require('./math');
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

console.log("=== Dynamic Custom Module ===");
readline.question('Enter first numeric value: ', num1 => {
    readline.question('Enter second numeric value: ', num2 => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        
        if(isNaN(a) || isNaN(b)) {
            console.log("Invalid numbers! Exiting.");
        } else {
            console.log(`Addition (${a}+${b}):`, math.add(a, b));
            console.log(`Subtraction (${a}-${b}):`, math.subtract(a, b));
        }
        readline.close();
    });
});
