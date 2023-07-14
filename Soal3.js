const divideAndSort = (number) => {
  const numberArray = number.toString().split("0");
  for (let i = 0; i < numberArray.length; i++) {
    numberArray[i] = numberArray[i].split("").sort().join("");
  }
  const sortedNumber = parseInt(numberArray.join(""));
  console.log(sortedNumber);
}

// Contoh penggunaan
divideAndSort(5956560159466056);
