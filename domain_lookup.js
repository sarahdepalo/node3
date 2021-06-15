const dns = require('dns');
// Readline allows for the reading of an input stream line by line
//To interact with the user you first need to create an interface for input and output. 
const readline = require('readline').createInterface({
    //requires this input and output
    input: process.stdin,
    output: process.stdout
})

readline.question("What domain would you like to look up? ", function(url) {
    readline.close();
    dns.lookup(url, function(error, address) {
        if (error) {
            console.log("ERROR: ",error.message);
            return
        }
        console.log(`The IP address for ${url} is: `, address);
    })

})