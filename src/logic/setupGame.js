let setupGameRunning = false;

function setupGame(tiles, colors) {
  if (setupGameRunning) {
    return;
  }

  setupGameRunning = true;
  const n = 144; //Total tiles
  const rows = 12; //Number of rows in matrix
  const columns = 12; //Number of columns in matrix
  const numMines = 3; //Number of mines in grid
  let flag = false;

  const array = new Array(rows); //Making an array to store buttons in the 2-D space
  for (let i = 0; i < rows; i++) {
    array[i] = new Array(columns);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      array[i][j] = tiles[rows * i + j];
    }
  }
  console.log(`Array:`);
  console.log(array);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      array[i][j].disabled = false;
      array[i][j].innerText = "";
      array[i][j].style.backgroundColor = colors.tile;
    }
  }
  //Generating all indexes from 0-144
  let numbers = Array.from({ length: n }, (_, index) => index);
  console.log(`Numbers:`);
  console.log(numbers);

  //Generating random positions of mines
  let result = [];
  for (let i = 0; i < numMines; i++) {
    let randomIdx = Math.floor(Math.random() * numbers.length);
    let position = numbers.splice(randomIdx, 1)[0];
    result.push(position);
  }
  console.log(`Result:`);
  console.log(result);

  //Storing the random positions of mines in 2-D space
  let hashArray = new Array(rows);
  for (let i = 0; i < rows; i++) {
    hashArray[i] = new Array(columns).fill(0);
  }
  for (let i = 0; i < result.length; i++) {
    hashArray[Math.floor(result[i] / 12)][result[i] % 12] = 1;
  }
  console.log(`HashArray:`);
  console.log(hashArray);

  //Storing the count of mines in the neighboring cells for each cell
  let countArray = new Array(rows);
  for (let i = 0; i < rows; i++) {
    countArray[i] = new Array(columns);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (hashArray[i][j] === 1) {
        countArray[i][j] = -1;
      } else {
        countArray[i][j] = mineCount(countArray, i, j);
      }
    }
  }
  console.log(`CountArray:`);
  console.log(countArray);

  //Function to do the counting. This function checks for every cell if
  //any of the immediate neighboring cells have value 1 in the corresponding hashArray
  function mineCount(matrix, row, col) {
    let count = 0;

    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 &&
        newRow < matrix.length &&
        newCol >= 0 &&
        newCol < matrix[newRow].length
      ) {
        if (hashArray[newRow][newCol] === 1) {
          count += 1;
        }
      }
    }

    return count;
  }

  let visited = new Array(rows); //To keep track if the tile is in its final state
  for (let i = 0; i < rows; i++) {
    visited[i] = new Array(columns).fill(false);
  }

  handleClick(
    array,
    countArray,
    result,
    visited,
    rows,
    columns,
    colors,
    numMines
  );

  checkWin(rows, columns, array, result, colors, numMines);
  toggleFlag(array, rows, columns, flag);

  setupGameRunning = false;
}

export default setupGame;
import handleClick from "./handleClick";
import checkWin from "./checkWin";
import toggleFlag from "./toggleFlag";

export { setupGameRunning };
