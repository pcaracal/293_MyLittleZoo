/*const fs = require('fs');
let files = fs.readdirSync('./');
console.log(
    JSON.stringify(files)
)*/

const fs = require('fs');
let files = fs.readdirSync('./');
files.forEach(file => {
    console.log(
        `<img src="${file}" />`
    )
});