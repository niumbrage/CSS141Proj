function isDiagonallyDominant(matrix) {
    for (let i = 0; i < 3; i++) {
        const diagonalElement = Math.abs(matrix[i][i]);
        const sumOfOthers = Math.abs(matrix[i][(i + 1) % 3]) + Math.abs(matrix[i][(i + 2) % 3]);
        if (diagonalElement <= sumOfOthers) {
            return false;
        }
    }
    return true;
}

function permute(array, start, result) {
    if (start === array.length - 1) {
        result.push(array.slice());
        return;
    }
    
    for (let i = start; i < array.length; i++) {
        [array[start], array[i]] = [array[i], array[start]]; // Swap
        permute(array, start + 1, result);
        [array[start], array[i]] = [array[i], array[start]]; // Swap back
    }
}

function reformat(matrix) {
    const permutations = [];
    permute(matrix.map(row => row.slice()), 0, permutations); // Get all row permutations
    
    for (const permutedMatrix of permutations) {
        if (isDiagonallyDominant(permutedMatrix)) {
            return permutedMatrix; // Return the first diagonally dominant matrix found
        }
    }
    
    return false;
}

module.exports = {
    reformat
}