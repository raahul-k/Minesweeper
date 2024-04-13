const checkWin = (rows, columns, array, result, colors, numMines) => {
  let foundMines = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (array[i][j].disabled === false) {
        foundMines++;
      }
    }
  }

  console.log(foundMines);

  if (foundMines === numMines) {
    for (let i = 0; i < result.length; i++) {
      array[Math.floor(result[i] / 12)][result[i] % 12].innerHTML =
        '<i class="fa-solid fa-bomb"></i>';
      array[Math.floor(result[i] / 12)][result[i] % 12].style.backgroundColor =
        colors.win;
      array[Math.floor(result[i] / 12)][result[i] % 12].disabled = true;
    }
  } else {
    foundMines = 0;
  }
};

export default checkWin;
