let duplicatedMatrix = (baseMatrix) => {
    const duplicatedMatrix = []
    for (let i = 0; i < baseMatrix.length; i++) {
        duplicatedMatrix.push([])
        for (let j = 0; j < baseMatrix[i].length; j++) {
                duplicatedMatrix[i].push(baseMatrix[i][j])
        }
    }
    return duplicatedMatrix;
}

let transposeMatrix = (matrix) => {
    const transposedMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
  	transposedMatrix.push([])
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
    	transposedMatrix[j].push(matrix[i][j]);
    }
  }
  return transposedMatrix;
}

let clearMatrixFromCrossNumbers = (matrix) => {
    const resultMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
  	resultMatrix.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
    	if (matrix[i][j] !== -1) {
      	resultMatrix[i].push(matrix[i][j])
      }
    }
  }
  return resultMatrix;
}

const isThereAreAnySteps = (matrix) => {
	for (let i = 0; i < matrix.length; i++) {
  	for (let j = 0; j < matrix[i].length; j++) {
	    if (matrix[i][j] === matrix[i][j+1] || (matrix[i][j] + matrix[i][j+1]) === 10) {
            return true
        }
    }
  }
  return false;
}

export let isGameFinished = (state) => {
    // debugger;
    const baseMatrix = duplicatedMatrix(state.numberMatrix);
    const transposedMatrix = transposeMatrix(baseMatrix);
    const baseMatrixWithoutCrossNumbers = clearMatrixFromCrossNumbers(baseMatrix);
    const transposedMatrixWithoutCrossNumbers = clearMatrixFromCrossNumbers(transposedMatrix);
    if (isThereAreAnySteps(baseMatrixWithoutCrossNumbers) 
        || isThereAreAnySteps(transposedMatrixWithoutCrossNumbers)) {
            console.log(false)
            return false;
        }
    
    console.log(true)
    return true;
}

