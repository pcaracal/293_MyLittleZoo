const fs = require('fs');
let files = fs.readdirSync('./');
files.forEach(file => {
    console.log(
        `<img src="res/sogga/${file}" width="400"/>`
    )
});