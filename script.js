const name1 = "Sherry Champaign1";
const name2 = "Sherry Champaign2";
const name3 = "Sherry Champaign3";

const n1 = name1.length;
const n2 = name2.length;
const n3 = name3.length;

if (n1 > n2 && n1 > n3) {
  console.log(`${name1} has the longest name.`);
}

if (n2 > n1 && n2 > n3) {
  console.log(`${name2} has the longest name.`);
}

if (n3 > n1 && n3 > n2) {
  console.log(`${name3} has the longest name.`);
}

if (n1 === n2 && n1 > n3) {
  console.log(`${name1} and ${name2} tie for the longest name.`);
}

if (n1 === n3 && n1 > n2) {
  console.log(`${name1} and ${name3} tie for the longest name.`);
}

if (n2 === n3 && n2 > n1) {
  console.log(`${name2} and ${name3} tie for the longest name.`);
}

if (n1 === n2 && n2 === n3) {
  console.log(
    `All three names ${name1}, ${name2}, and ${name3} are the same length.`
  );
}

console.log("name 1" + name1.length);
console.log("name 2" + name2.length);
console.log("name 3" + name3.length);
