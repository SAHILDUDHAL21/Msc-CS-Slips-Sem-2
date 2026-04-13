const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'input.txt');
const outputFile = path.join(__dirname, 'output.txt');

fs.writeFileSync(inputFile, 'Hello, this is input data.');

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) throw err;
    const processedData = data.toUpperCase() + " (Processed)";
    
    fs.writeFile(outputFile, processedData, (err) => {
        if (err) throw err;
        console.log('Data successfully written to output.txt check your folder');
    });
});
