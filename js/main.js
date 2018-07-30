// ITEM #1 - output the sum of num1 and num2
var num1 = 100;
var num2 = 200;

console.log(num1 + " + " + num2 + " = " + (num1 + num2));

var str1 = "Damian";
var str2 = "Smith";

// concat and output str1 and str2
console.log("My name is " + str1 + " " + str2);

//ITEM #2 multidimensional array with sports teams in NY
var newYorkSportsTeams = [
  ["New York Jets", "New York Giants"],
  ["New York Yankee", "New York Mets"],
  ["New York Islanders", "New York Rangers"],
  ["New York Knicks", "Brooklyn Nets"]
];

// output the football teams in NY
console.log(
  "New York football teams: " +
    newYorkSportsTeams[0][0] +
    " and " +
    newYorkSportsTeams[0][1]
);
// output the hockey teams in NY
console.log(
  "New York Hockey teams: " +
    newYorkSportsTeams[2][0] +
    " and " +
    newYorkSportsTeams[2][1]
);

// ITEMS #3 + #4

var input = parseInt(prompt("Enter a number:"));

// check if the number from prompt is less than or greater than 100
while (input < 100) {
  if (input < 100) {
    input = parseInt(prompt("Your number is less than 100 try again"));
  } else if (input >= 100) {
    console.log("Your number " + input + " is greater than or equal to 100");
  }
}
//  alert that the number is greater than or equal to 100
alert("Your number " + input + " is greater than or equal to 100");
// ITEM #5 - check if something is the same as some other string
var someString = "string";
console.log("james" == someString);
console.log("string" == someString);

//ITEM #6 Function that takes a name as an argument and tell the user the name they enetered.
function theName(name) {
  return alert("You entered " + name);
}
theName(prompt("Please enter a name"));

// ITEM #7 - fnction takes no argument and print something to the console
function noArg() {
  console.log("I take no argument but I can print to the console!");
}

// ITEM #8 - function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert.
var color = prompt(
  "Which door do you want to enter?  Enter: red, green or blue"
);
console.log(color);
function enterDoor(color) {
  if (color === "red") {
    return alert(
      "You have entered the " +
        color +
        " door and you are eligible for a vacation to the " +
        color +
        " ISLAND"
    );
  } else if (color === "green") {
    return alert(
      "You have entered the " +
        color +
        " door and you are eligible for a vacation to the " +
        color +
        " ISLAND"
    );
  } else {
    return alert(
      "You have entered the " +
        color +
        " door and you are eligible for a vacation to the " +
        color +
        " ISLAND"
    );
  }
}

enterDoor(color);
