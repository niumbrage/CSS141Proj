function seidel(equation, guess, converges){
    let xArray = []
    let errArray = []
    let i = 0, n = 0, a1 = guess[0], a2 = guess[1], a3 = guess[2], oldA = guess
    while(n < 10){
        for(i; i != 3; i+=3) {
            let xTemp = []
            let errTemp = []
            a1 = (equation[0][3]-(equation[0][1]*a2)-equation[0][2]*a3)/equation[0][0]
            a2 = (equation[1][3]-(equation[1][0]*a1)-equation[1][2]*a3)/equation[1][1]
            a3 = (equation[2][3]-(equation[2][0]*a1)-equation[2][1]*a2)/equation[2][2]
            xTemp[i]   = a1
            xTemp[i+1] = a2
            xTemp[i+2] = a3

            errTemp[i]   = Math.abs((a1 - oldA[0])/a1)*100
            errTemp[i+1] = Math.abs(((a2 - oldA[1])/a2)*100)
            errTemp[i+2] = Math.abs(((a3 - oldA[2])/a3)*100)
            xArray.push(xTemp)
            errArray.push(errTemp)
            oldA = [a1, a2, a3]
        }
        n++
        i = 0
    }
    console.log(xArray)
    console.log(errArray)
}

// module.exports = {

// }

module.exports = {
    seidel
}