const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const values = {
  zeroToTwenty: [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ],
  double: {
    2: "twenty",
    3: "thirty",
    4: "fourty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  },
};

readline.question("Enter Number:", (input) => {
  console.log(`Your Input: ${input}`);
  //calling the function below
  if (+input) {
    convertNumberToWord(input);
  } else {
    console.log("Please enter a valid number");
  }
  readline.close();
});

const convertNumberToWord = function (input) {
  let unit, ten, hundered;
  let first, second, third;

  // function gets value of single digit
  const writeUnits = function (inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
      values.zeroToTwenty.map((value, index) => {
        if (inputArray[i] === index.toString()) {
          console.log(`Output: ${value}`);
        }
      });
    }
  };
  // function gets value of two digit numbers
  const writeTens = function (inputArray) {
    values.zeroToTwenty.map((value, index) => {
      //gets value of first digit
      if (inputArray[0][0] === index.toString()) {
        const keys = Object.keys(values.double);
        keys.forEach((key) => {
          if (+key === +index && +index != 0 && +index != 1) {
            first = values.double[key];
          }
          if (+index === 0 || +index === 1) {
            first = "";
          }
        });
      }
      //gets value of second digit
      if (inputArray[0][1] === index.toString() && inputArray[0][1] !== 0) {
        second = value;
      } else if (+inputArray[0][1] === 0) {
        second = "";
      }
    });
    console.log(`Output: ${first} ${second}`);
  };
  // Function gets value of three digit numbers
  const writeHundereds = function (inputArray) {
    values.zeroToTwenty.map((value, index) => {
      //gets the value of first digit
      if (inputArray[0][0] === index.toString() && +index != 0) {
        first = value + " hundered";
      }
      // gets the value of second digit
      if (inputArray[0][1] === index.toString()) {
        const keys = Object.keys(values.double);
        keys.forEach((key) => {
          if (+key === +index && +index != 0 && +index != 1) {
            second = values.double[key];
          }
          if (+index === 0 || +index === 1) {
            second = "";
          }
        });
      }
      //gets the value of third digit
      if (inputArray[0][2] === index.toString()) {
        if (+index != 0) {
          third = value;
        } else {
          third = "";
        }
      }
    });
    //loging the output
    console.log(`Output: ${first} ${second} ${third}`);
  };

  //check for Input units and calling the function
  if (input.length < 3) {
    if (+input[0] === 0 || (+input[0] === 0 && +input[1] === 0)) {
      unit = input.split("");
      unit.shift();
      writeUnits(unit);
    } else {
      unit = input.split(" ");
      writeUnits(unit);
    }
  }
  //condition check for two digits
  if (input.length === 2 && input[0] != 1 && input[0] != 0) {
    ten = input.split(" ");
    writeTens(ten);
  }
  //condition check for three digits
  if (input.length === 3 && input[0] != 0) {
    //conversion to array
    hundered = input.split(" ");
    writeHundereds(hundered);
  }
};
