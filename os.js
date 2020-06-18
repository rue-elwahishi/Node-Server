// Core Module
const myOs = require('os');

const freeMemory = myOs.freemem();
console.log(freeMemory)

const fullMemory = myOs.totalmem()
console.log(fullMemory)

const myPlatform = myOs.platform()
console.log(myPlatform)

const cpus = myOs.cpus()
console.log(cpus)

const myArch = myOs.arch()
console.log(myArch)