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

console.log("\n===== CHALLENGE 2 =====");

 // ---- 1. "123" ----
  console.log("--- Starting value: \"123\" ---");
  console.log('Number("123"):', Number("123"), typeof Number("123"));           // 123 number
  console.log('parseInt("123"):', parseInt("123"), typeof parseInt("123"));     // 123 number
  console.log('parseFloat("123"):', parseFloat("123"), typeof parseFloat("123")); // 123 number
  console.log('Boolean("123"):', Boolean("123"), typeof Boolean("123"));        // true boolean (non-empty string)
  console.log('String("123"):', String("123"), typeof String("123"));           // "123" string (already a string)

  // ---- 2. "3.14" ----
  console.log("--- Starting value: \"3.14\" ---");
  console.log('Number("3.14"):', Number("3.14"), typeof Number("3.14"));           // 3.14 number
  console.log('parseInt("3.14"):', parseInt("3.14"), typeof parseInt("3.14"));     // 3 number (chops off the decimals!)
  console.log('parseFloat("3.14"):', parseFloat("3.14"), typeof parseFloat("3.14")); // 3.14 number
  console.log('Boolean("3.14"):', Boolean("3.14"), typeof Boolean("3.14"));        // true boolean
  console.log('String("3.14"):', String("3.14"), typeof String("3.14"));           // "3.14" string

   // ---- 3. "hello" ----
  console.log("--- Starting value: \"hello\" ---");
  console.log('Number("hello"):', Number("hello"), typeof Number("hello"));           // NaN number
  console.log('parseInt("hello"):', parseInt("hello"), typeof parseInt("hello"));     // NaN number
  console.log('parseFloat("hello"):', parseFloat("hello"), typeof parseFloat("hello")); // NaN number
  console.log('Boolean("hello"):', Boolean("hello"), typeof Boolean("hello"));        // true boolean (any non-empty string is truthy)
  console.log('String("hello"):', String("hello"), typeof String("hello"));           // "hello" string

// ---- 5. "" (empty string) ----
  console.log("--- Starting value: \"\" (empty string) ---");
  console.log('Number(""):', Number(""), typeof Number(""));           // 0 number (the sneaky one, not NaN!)
  console.log('parseInt(""):', parseInt(""), typeof parseInt(""));     // NaN number (nothing to read)
  console.log('parseFloat(""):', parseFloat(""), typeof parseFloat("")); // NaN number
  console.log('Boolean(""):', Boolean(""), typeof Boolean(""));        // false boolean (empty string is falsy)
  console.log('String(""):', String(""), typeof String(""));           // "" string (prints as a blank)









