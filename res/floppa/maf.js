/*const fs = require('fs');
let files = fs.readdirSync('./');
console.log(
    JSON.stringify(files)
)*/

const fs = require('fs');
let files = fs.readdirSync('./');
files.forEach(file => {
    console.log(
        `<img src="res/floppa/${file}" width="800"/>`
    )
});