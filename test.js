a = "1x,2,3"
const equation = []
if(a.indexOf('x') > -1){
    console.log("This is in equation form")
    process.exit(0)
}
const split = a.split(",")
console.log(split)
equation.push(split)
equation.push(split)
equation.push(split)
console.log(equation)
