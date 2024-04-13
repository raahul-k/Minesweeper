const handleClick = (
  array,
  countArray,
  result,
  visited,
  rows,
  columns,
  colors,
  numMines
) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      array[i][j].addEventListener("click", () => {
        array[i][j].innerHTML = "";
        console.log(`Tile [${i}, ${j}] was clicked`); //To keep track of the tile clicked
        // visited[i][j] = true; //Mark the tile as visited
        array[i][j].disabled = true; //Disable the tile
        if (countArray[i][j] === -1) {
          array[i][j].style.backgroundColor = colors.mine;
          array[i][j].innerHTML = '<i class="fa-solid fa-bomb"></i>';
          //Once a mine is clicked, all mines are revealed and the rest of the buttons are disabled.
          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
              array[i][j].disabled = true;
            }
          }
          for (let i = 0; i < result.length; i++) {
            array[Math.floor(result[i] / 12)][
              result[i] % 12
            ].style.backgroundColor = colors.mine;
            array[Math.floor(result[i] / 12)][result[i] % 12].innerHTML =
              '<i class="fa-solid fa-bomb"></i>';
          }
        }
        //If an empty cell is clicked
        if (countArray[i][j] === 0) {
          showAllEmptyCells(i, j, visited);
        }

        //Function to reveal all empty cells next to each other once an empty cell is clicked
        function showAllEmptyCells(i, j, visited) {
          if (i < 0 || i >= rows || j < 0 || j >= columns) {
            return;
          }
          if (countArray[i][j] > 0) {
            visited[i][j] = true;
            array[i][j].disabled = true;
            array[i][j].innerText = countArray[i][j];
            array[i][j].style.color = "green";
            return;
          }
          if (countArray[i][j] < 0) {
            return;
          }
          if (visited[i][j]) {
            return;
          }

          if (i >= 0 && i < rows && j >= 0 && j < columns) {
            if (countArray[i][j] === 0) {
              visited[i][j] = true;
              array[i][j].disabled = true;
              array[i][j].style.backgroundColor = colors.lightblush;
              showAllEmptyCells(i - 1, j - 1, visited);
              showAllEmptyCells(i - 1, j, visited);
              showAllEmptyCells(i - 1, j + 1, visited);
              showAllEmptyCells(i, j - 1, visited);
              showAllEmptyCells(i, j + 1, visited);
              showAllEmptyCells(i + 1, j - 1, visited);
              showAllEmptyCells(i + 1, j, visited);
              showAllEmptyCells(i + 1, j + 1, visited);
            }
          }
        }

        //If a cell with mines nearby is clicked
        if (countArray[i][j] > 0) {
          array[i][j].innerText = countArray[i][j];
          array[i][j].style.color = "green";
        }

        checkWin(rows, columns, array, result, colors, numMines);
      });
    }
  }
};

export default handleClick;
import checkWin from "./checkWin";
