const execSync = require('child_process').execSync;
execSync('npm install express');
execSync('npm install body-parser');
console.log('Dependencies installed successfully!');