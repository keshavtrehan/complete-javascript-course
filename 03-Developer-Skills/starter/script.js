// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const array1 = [17, 21, 23];

const printForecast = function (arr) {
  for (day = 0; day <= array1.length - 1; day++) {
    const temp = array1[day];
    const dayNumber = day + 1;

    console.log("${temp}*C in ${dayNumber} days");
  }
};

printForecast(array1);
