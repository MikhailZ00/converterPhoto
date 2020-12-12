const fs = require('fs');
const path = require("path")

const files = ['index.html', 'bundle.js', 'main.css'];
const directories = ['product', 'promoute', 'environment', 'case'];

const copy = (filename, destination) => fs.copyFile(
    path.join(__dirname, 'out', filename),
    path.join(__dirname, `out/${destination}`, filename),
    (e) => {
        if (e) {
            throw e
        }
    }
);

directories.forEach(dir => {
    fs.mkdir(path.join(__dirname, `out/`, dir), (error) => {
        files.forEach(file => {
            copy(file, dir);
        })
    })
})