const fs = require('fs');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("filename: ", function(fileName) {
    rl.close();
    fs.readFile(fileName, function(err, buffer) {
        if (err) {
            console.log("ERROR: ", err.message);
        }
        const content = buffer.toString(); //converts the buffer message you got earlier into a readable string. 
        const upperContent = content.toUpperCase();
        console.log(upperContent);
    });

})