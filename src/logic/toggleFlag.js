const toggleFlag = (array, rows, columns, flag) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      array[i][j].addEventListener("contextmenu", (event) => {
        event.preventDefault();
        if (array[i][j].disabled === false) {
          if (flag === false) {
            array[i][j].innerHTML =
              '<img class="flag-mark" src="assets/caution.png">';
            array[i][j].disabled = true;
            flag == false;
          }
        } else {
          if (
            array[i][j].innerHTML ==
            '<img class="flag-mark" src="assets/caution.png">'
          ) {
            array[i][j].innerHTML = "";
            array[i][j].disabled = false;
            flag = false;
          }
        }
      });
    }
  }
};

export default toggleFlag;
