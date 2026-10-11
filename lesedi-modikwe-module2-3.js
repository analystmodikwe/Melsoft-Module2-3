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