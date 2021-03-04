import { initialState } from "../redux/gameReducer";

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

const getCoordinatesAvailableMove = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      for (let k = j + 1; k < matrix[i].length; k++) {
        if (matrix[i][k] !== 0
          && (matrix[i][j] === matrix[i][k]
            || (matrix[i][j] + matrix[i][k]) === (initialState.numbersRange + 1))) {
          return [i, j, i, k]
        }
        else if (matrix[i][k] !== 0) {
          break;
        }
      }
    }
  }
  return null;
}

export let getAvailableMove = (state) => {
  const baseMatrix = duplicatedMatrix(state.numberMatrix);
  const transposedMatrix = transposeMatrix(baseMatrix);
  let coordinatesAvailableMove = null;
  if (getCoordinatesAvailableMove(baseMatrix)) {
    coordinatesAvailableMove = getCoordinatesAvailableMove(baseMatrix)
  } else if (getCoordinatesAvailableMove(transposedMatrix)) {
    let coordinatesAvailableMoveInTransposeMatrix = getCoordinatesAvailableMove(transposedMatrix);
    coordinatesAvailableMove = [];
    coordinatesAvailableMove.push(coordinatesAvailableMoveInTransposeMatrix[1]);
    coordinatesAvailableMove.push(coordinatesAvailableMoveInTransposeMatrix[0]);
    coordinatesAvailableMove.push(coordinatesAvailableMoveInTransposeMatrix[3]);
    coordinatesAvailableMove.push(coordinatesAvailableMoveInTransposeMatrix[2]);
  }
  return coordinatesAvailableMove;
}

export let countScore = (state) => {
  const finishedMatrix = duplicatedMatrix(state.numberMatrix);
  let matrixArrSum = finishedMatrix.map((array) => {
    return array.reduce((accum, current) => accum + current, 0)
  })
  let score = matrixArrSum.reduce((accum, current) => accum + current, 0)
  return score;
}


