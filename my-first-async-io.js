const fs = require('fs');
fs.readFile (process.argv[2], function callback (err, data){
    if(err){
        return console.log(err);
    }
    const stringData = data.toString();
    const dataArr = stringData.split('\n');
    console.log(dataArr.length-1);
});