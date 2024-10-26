// input sequence

// required setup for input
const read = require("readline")
const rl = read.createInterface({
    input: process.stdin,
    output: process.stdout
})

// promise for the input (if you're reading this don't worry about it, just some js quirks)
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

// initializing the matrix
const equation = []

// menu descriptions
console.log("\nGAUSS-JACOBI/SEIDEL CALCULATOR (3x3)")
console.log("\nPlease enter equations in either Matrix form:\n1,2,3\n3,2,3\n4,5,6\n\nEquation Form:\n1x+2y=3\n3x+2y=3\n4x+5y=6\n");

// this async thing isn't related with much, just needed so `await` clause can be used.
(async() => {
    // n dicatates the nxn size of the matrix input
    const n = 3
    // iterates 3 times for each line of the matrix
    for(let i = 0; i != n; i++){
        // requests for the prompts and waits for prompt to be received
        let raw = await prompt(`Please Enter Equation ${i+1}:\n`)
        // string cleaning to transform equation form (1x+2y=3) into a float array
        raw = raw.toLowerCase()
        // checks if the input has x, if it has x it prolly means the user input an equation form
        if(raw.indexOf("x") > -1){
            temp = []
            // regex for the equation form of input
            temp[0] = parseFloat(/([+-]?\d+(\.\d+)?)(?=x)/g.exec(raw)[1])
            temp[1] = parseFloat(/([+-]?\d+(\.\d+)?)(?=y)/g.exec(raw)[1])
            temp[2] = parseFloat(/(?<=\=)\s*([+-]?\d+(\.\d+)?)/g.exec(raw)[1])
            // pushes the temp array into the equation array
            equation.push(temp)
        } else{
            // matrix form of the input
            raw = raw.split(",")
            // turns string into decimal form
            raw = raw.map(function(str) {
                return parseFloat(str)
            })
            equation.push(raw)
        }
    }
    // closes the input mode
    rl.close()
})()

// this function triggers after input mode is closed. We'll be placing the formula stuff in here
rl.on('close', () => {
    console.log(equation)
    process.exit(0)
})