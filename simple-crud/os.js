import express from "express"
const os = require('os');
const path = require('path');

console.log("OS type:", os.type());
console.log("Home directory:", os.homedir());
console.log("File name:", path.basename(__filename));
console.log("Directory name:", path.dirname(__filename));
