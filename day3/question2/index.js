// Import the boxen module
import boxen from "boxen";

// Message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1. Classic (default) box
console.log(
  boxen(message, {
    title: title,
    titleAlignment: "center"
  })
);

// 2. SingleDouble style box
console.log(
  boxen(message, {
    title: title,
    titleAlignment: "center",
    borderStyle: "singleDouble"
  })
);

// 3. Round style box
console.log(
  boxen(message, {
    title: title,
    titleAlignment: "center",
    borderStyle: "round"
  })
);
