const os = require('os');

console.log("=== System Information ===");
console.log("Operating System:", os.platform(), os.release());
console.log("CPU:", os.cpus()[0].model);
console.log("Total Memory:", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("Free Memory:", (os.freemem() / 1024 / 1024 / 1024).toFixed(2), "GB");
