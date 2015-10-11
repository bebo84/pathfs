/**
 * Created by PHUONG on 10/11/2015.
 */

'use strict';

var fs = require('fs');
var path = require('path');

function searchFile(name, directory)
{

    fs.readdir(directory, function (err, listFiles)
    {
        for (var i = 0; i < listFiles.length; i ++)
        {
            var stats = fs.statSync(path.join(directory, listFiles[i]));
            if(stats.isFile())
            {
                if(name == listFiles[i])
                {
                    console.log("File exist");
                    process.exit(1);
                }

            }
            if(stats.isDirectory())
            {
                var dirpath = path.join(directory, listFiles[i]);
                searchFile(name, dirpath);

            }

        }
    })
}

console.log("Danh duog dan theo mau: E:\\CLONE_GIT\\PathandFs\\search");
var processData = process.argv;

var name = processData[2];
var directory = processData[3];

searchFile(name, directory);

