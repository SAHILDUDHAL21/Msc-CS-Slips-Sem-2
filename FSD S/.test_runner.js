const { fork } = require('child_process');
const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const folders = fs.readdirSync(baseDir).filter(f => f.startsWith('Slip ') && fs.statSync(path.join(baseDir, f)).isDirectory());

async function testFolder(folder) {
    const fullPath = path.join(baseDir, folder);
    const indexJsFile = path.join(fullPath, 'index.js');
    if (!fs.existsSync(indexJsFile)) {
        console.log(`[ ] ${folder}: Skipped (No index.js)`);
        return;
    }

    return new Promise((resolve) => {
        // Run as a separate process in its directory
        const child = fork(indexJsFile, [], { cwd: fullPath, silent: true });
        
        let errorOutput = '';
        child.stderr.on('data', data => errorOutput += data.toString());
        
        let didCrashed = false;
        
        child.on('exit', (code) => {
            if (code !== 0 && code !== null) {
                console.log(`[X] ${folder}: FAILED with code ${code}. Error: ${errorOutput.split('\\n')[0]}`);
                didCrashed = true;
            } else {
                console.log(`[V] ${folder}: PASSED (Exited cleanly)`);
                didCrashed = true; // Exited correctly
            }
            resolve();
        });

        // Wait 1.5 seconds. If it hasn't exited, it's a server running correctly
        setTimeout(() => {
            if (!didCrashed) {
                console.log(`[V] ${folder}: PASSED (Server is successfully running)`);
                child.kill();
                resolve();
            }
        }, 1500);
    });
}

async function runTests() {
    console.log("Starting tests over", folders.length, "folders...");
    for (const folder of folders) {
        await testFolder(folder);
    }
    console.log("All tests completed!");
}

runTests();
