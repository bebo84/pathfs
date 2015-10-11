/**
 * Created by PHUONG on 10/11/2015.
 */

'use strict';

var fs = require('fs');
var path = require('path');

var name = 'index.html';

var filePath = path.join(__dirname,'fs.js');

console.log(__dirname);
console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.basename(filePath,'.js'));
console.log(path.extname(filePath));
console.log('resolve ' + path.resolve(filePath,'..','cache'));

fs.stat('views', function (err,stats) {
    if(stats.isDirectory()) {
        console.log('thu muc')
    }
    if (stats.isFile()){
        console.log('file')
    }
})
var stats = fs.statSync('views');

console.log(stats);

fs.readdir('views', function (err,listFiles) {
    console.log(listFiles);
})

var processData = process.argv;

var filename = processData[2];
var dirname = processData[3];

console.log(filename,dirname);