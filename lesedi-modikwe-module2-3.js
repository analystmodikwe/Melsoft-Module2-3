// CHALLENGE 1
console.log("\n===== CHALLENGE 1 =====");

// PART A
// string. const because my name is not going to change while the script runs
const fullName = "Lesedi Modikwe";

 // number. let because age changes every birthday, so it makes sense to reassign
  let age = 25; // <- put your real age here

  // boolean. let because how I feel about JS could change (hopefully stays true)
  let enjoysJavaScript = true;

  // number with decimals. const because a favourite temperature is a fixed fact
  const favouriteTemp = 22.5;

  // number (yes, NaN is a number, that one confused me). const because the
  // result of a failed conversion is not something I want to overwrite
  const notANumber = Number("not a number");

  // number. const because Infinity is a fixed value
  const infinityValue = 1 / 0;

  // number. const because MAX_SAFE_INTEGER is a built-in constant
  const biggestSafeInt = Number.MAX_SAFE_INTEGER;

  // null is its own "empty on purpose" value. const since I'm saying "nothing here" deliberately
  const emptyOnPurpose = null;

  // undefined. I used let because normally this is a variable you plan to fill in later
  let notAssignedYet = undefined;

  // template literal (string) that uses 3 of the variables above. const, it's just a message
  const intro = `Hi, I'm ${fullName}, I'm ${age} years old and the temperature I like is ${favouriteTemp}°C.`;

//   part B
console.log("--- typeof on my 10 variables ---");
  console.log("fullName:", typeof fullName);
  console.log("age:", typeof age);
  console.log("enjoysJavaScript:", typeof enjoysJavaScript);
  console.log("favouriteTemp:", typeof favouriteTemp);
  console.log("notANumber:", typeof notANumber);
  console.log("infinityValue:", typeof infinityValue);
  console.log("biggestSafeInt:", typeof biggestSafeInt);
  console.log("emptyOnPurpose:", typeof emptyOnPurpose); // surprise: 'object'
  console.log("notAssignedYet:", typeof notAssignedYet);
  console.log("intro:", typeof intro);
  console.log(intro);

    console.log("--- PART B ---");
  // prediction: 'object' (I know this one is a famous bug)
  console.log("typeof null:", typeof null);
  // prediction: 'number' (weird but I read it's true)
  console.log("typeof NaN:", typeof NaN);
  // prediction: 'undefined'
  console.log("typeof undefined:", typeof undefined);
  // prediction: 'string' because the quotes make it text, the 42 inside doesn't matter
  console.log('typeof "42":', typeof "42");
  // prediction: 'string'. typeof 42 gives 'number' which is text, so typeof of that is 'string'
  console.log("typeof (typeof 42):", typeof (typeof 42));
  // prediction: 'object' (arrays aren't their own type in typeof)
  console.log("typeof [1, 2, 3]:", typeof [1, 2, 3]);
  // prediction: 'function' (functions DO get their own answer, even though they're objects too)
  console.log("typeof function() {}:", typeof function () {});