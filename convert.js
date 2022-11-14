const { units, tens, hunderds } = require("./index.js");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Input number:", (inputNumber) => {
  // checking if input is a number and calling the function
  if (+inputNumber) {
    convertNumToWord(inputNumber);
  } else {
    console.log("Enter a valid number");
  }
  readline.close();
});

const convertNumToWord = function (inputNumber) {
  let output = (word) => {
    console.log(`Output: ${word}`);
  };
  // getting units
  const getUnit = function (input) {
    units.map((word, index) => {
      if (+input === index) {
        console.log(`Output: ${word}`);
      }
    });
  };
  // function takes number as arg and converts num ranging from 20 to 99 to words
  const getTens = function (input) {
    // saving the 2 digits in seperate variables
    let index1 = input[0];
    let index2 = input[1];
    //
    let combine;

    //converting the first digit
    for (const key in tens) {
      if (index1 === key) {
        combine = tens[key];
      }
    }
    //converting the second digit
    units.map((word, index) => {
      if (+index2 === index && +index2 != 0) {
        //adding the second word
        combine += " " + word;
      }
    });
    console.log(`Output: ${combine}`);
  };
  // function takes number as arg and converts num ranging from 100 to 999 to words
  const getHundereds = function (input) {
    let inputArray = input.split(" ");
    let first, second, third;
    let combineSecondandThird = [...input].slice(1).join("");

    units.map((word, index) => {
      // getting the first digit value
      if (inputArray[0][0] === index.toString()) {
        first = word;
      }

      // getting the second and third digit
      // if the second digit is zero then output of second = '';
      if (inputArray[0][1] === "0") {
        second = "";
      }
      // if the second digit ranges from 1 to 19
      // if the second digit is 1 then do no output the third digit, run second and third combined.
      if (
        inputArray[0][1] === "1" &&
        combineSecondandThird === index.toString()
      ) {
        second = "and " + word;
      } else {
        // if the second digit is greater than 19 get the value of second
        for (key in tens) {
          if (inputArray[0][1] == key) {
            second = "and " + tens[key];
          }
        }
      }
      // if the third value is not zero and second is not 1
      if (inputArray[0][2] === index.toString() && inputArray[0][2]) {
        if (inputArray[0][1] === "1") {
          third = "";
        } else {
          word === "zero" ? (third = "") : (third = word);
        }
      }
    });

    console.log(`Output: ${first} ${hunderds} ${second} ${third}`);
  };
  /**************************************** */
  // Conditionals for checking input digits  /
  /**************************************** */

  //if digit is less than 3
  if (inputNumber.length < 3) {
    //function converts num from 0 to 19
    getUnit(inputNumber);
  }
  // if the number is 2 digit and is equal to 20 or greater than 20 upto 99.
  if (inputNumber.length === 2 && inputNumber[0] != 0 && inputNumber[0] != 1) {
    //function converts num from 20 to 99 to words
    getTens(inputNumber);
  }
  // if the input number is  3 digit
  if (inputNumber.length === 3 && inputNumber[0] != 0) {
    getHundereds(inputNumber);
  }
};
