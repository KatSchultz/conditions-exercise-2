const name1 = "Sherry Champaign";
const name2 = "Tom";
const name3 = "Charlie";

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

if (n1 === n2 && n2 === n3) {
  console.log(
    `All three names ${name1}, ${name2}, and ${name3} are the same length.`
  );
} else if (n1 === n2 && n1 > n3) {
  console.log(`${name1} and ${name2} tie for the longest name.`);
} else if (n1 === n3 && n1 > n2) {
  console.log(`${name1} and ${name3} tie for the longest name.`);
} else if (n2 === n3 && n2 > n1) {
  console.log(`${name2} and ${name3} tie for the longest name.`);
}
