//ESERCIZIO STRINGA

let trueStatement = "Cats are better than dogs";
let comparative = trueStatement.substring(9, 15);
console.log(comparative);

let compare = trueStatement.substring(16, 20);
console.log(compare);

let comparison = comparative.concat(" ", compare);
console.log(comparison);

let capitalLetters = comparison.toUpperCase();
console.log(capitalLetters);

//ESERCIZIO ARRAY

let ownNames = ["Paolo", "Simone", "Mario", "Giovanni"];

let giovanniBeGone = ownNames.pop();
console.log(giovanniBeGone);

//let giovanniCameBack = ownNames.push("Giovanni");
//console.log(giovanniCameBack);

let hopelessStatement = [
  "He can still do it!",
  "There is some hope left",
  "It's getting tight",
  "Next year will be OUR year",
];

function getStatement() {
  let racesLeft = document.getElementById("races").value;
  if (racesLeft >= 20) {
    alert(hopelessStatement[0]);
  } else if (racesLeft >= 15) {
    alert(hopelessStatement[1]);
  } else if (racesLeft >= 10) {
    alert(hopelessStatement[2]);
  } else if (racesLeft < 10) {
    alert(hopelessStatement[3]);
  }
}
