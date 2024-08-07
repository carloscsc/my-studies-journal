const spices = [
  { name: "Emma", nickname: "Baby" },
  { name: "Geri", nickname: "Ginger" },
  { name: "Mel B", nickname: "Scary" },
  { name: "Mel C", nickname: "Sporty" },
  { name: "Victoria", nickname: "Posh" },
];

const { nickname } = spices[0];
nickname; //?

// get the first and return the others grouped
let [uno, ...others] = [1, 2, 3, 4, 5];
uno; //?
others; //?

let [third, , , forty, ...other_others] = [1, 2, 3, 4, 5, 6];
third; //?
forty; //?
other_others; //?

// Exercises
function getBreedFromUrl(url) {
  return url.split("/");
}

// get domain
const [, , domain] = getBreedFromUrl("https://metropolitanafm.com.br");
domain; //?
