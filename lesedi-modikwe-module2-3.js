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
console.log("typeof (typeof 42):", typeof typeof 42);
// prediction: 'object' (arrays aren't their own type in typeof)
console.log("typeof [1, 2, 3]:", typeof [1, 2, 3]);
// prediction: 'function' (functions DO get their own answer, even though they're objects too)
console.log("typeof function() {}:", typeof function () {});

console.log("\n===== CHALLENGE 2 =====");

// ---- 1. "123" ----
console.log('--- Starting value: "123" ---');
console.log('Number("123"):', Number("123"), typeof Number("123")); // 123 number
console.log('parseInt("123"):', parseInt("123"), typeof parseInt("123")); // 123 number
console.log('parseFloat("123"):', parseFloat("123"), typeof parseFloat("123")); // 123 number
console.log('Boolean("123"):', Boolean("123"), typeof Boolean("123")); // true boolean (non-empty string)
console.log('String("123"):', String("123"), typeof String("123")); // "123" string (already a string)

// ---- 2. "3.14" ----
console.log('--- Starting value: "3.14" ---');
console.log('Number("3.14"):', Number("3.14"), typeof Number("3.14")); // 3.14 number
console.log('parseInt("3.14"):', parseInt("3.14"), typeof parseInt("3.14")); // 3 number (chops off the decimals!)
console.log(
  'parseFloat("3.14"):',
  parseFloat("3.14"),
  typeof parseFloat("3.14"),
); // 3.14 number
console.log('Boolean("3.14"):', Boolean("3.14"), typeof Boolean("3.14")); // true boolean
console.log('String("3.14"):', String("3.14"), typeof String("3.14")); // "3.14" string

// ---- 3. "hello" ----
console.log('--- Starting value: "hello" ---');
console.log('Number("hello"):', Number("hello"), typeof Number("hello")); // NaN number
console.log('parseInt("hello"):', parseInt("hello"), typeof parseInt("hello")); // NaN number
console.log(
  'parseFloat("hello"):',
  parseFloat("hello"),
  typeof parseFloat("hello"),
); // NaN number
console.log('Boolean("hello"):', Boolean("hello"), typeof Boolean("hello")); // true boolean (any non-empty string is truthy)
console.log('String("hello"):', String("hello"), typeof String("hello")); // "hello" string

// ---- 5. "" (empty string) ----
console.log('--- Starting value: "" (empty string) ---');
console.log('Number(""):', Number(""), typeof Number("")); // 0 number (the sneaky one, not NaN!)
console.log('parseInt(""):', parseInt(""), typeof parseInt("")); // NaN number (nothing to read)
console.log('parseFloat(""):', parseFloat(""), typeof parseFloat("")); // NaN number
console.log('Boolean(""):', Boolean(""), typeof Boolean("")); // false boolean (empty string is falsy)
console.log('String(""):', String(""), typeof String("")); // "" string (prints as a blank)

// ---- 6. 0 ----
console.log("--- Starting value: 0 ---");
console.log("Number(0):", Number(0), typeof Number(0)); // 0 number
console.log("parseInt(0):", parseInt(0), typeof parseInt(0)); // 0 number (0 gets turned into "0" first)
console.log("parseFloat(0):", parseFloat(0), typeof parseFloat(0)); // 0 number
console.log("Boolean(0):", Boolean(0), typeof Boolean(0)); // false boolean (0 is falsy)
console.log("String(0):", String(0), typeof String(0)); // "0" string

// ---- 7. null ----
console.log("--- Starting value: null ---");
console.log("Number(null):", Number(null), typeof Number(null)); // 0 number (null becomes 0, careful!)
console.log("parseInt(null):", parseInt(null), typeof parseInt(null)); // NaN number (null becomes the text "null", which isn't a number)
console.log("parseFloat(null):", parseFloat(null), typeof parseFloat(null)); // NaN number
console.log("Boolean(null):", Boolean(null), typeof Boolean(null)); // false boolean
console.log("String(null):", String(null), typeof String(null)); // "null" string

// ---- 8. undefined ----
console.log("--- Starting value: undefined ---");
console.log("Number(undefined):", Number(undefined), typeof Number(undefined)); // NaN number
console.log(
  "parseInt(undefined):",
  parseInt(undefined),
  typeof parseInt(undefined),
); // NaN number
console.log(
  "parseFloat(undefined):",
  parseFloat(undefined),
  typeof parseFloat(undefined),
); // NaN number
console.log(
  "Boolean(undefined):",
  Boolean(undefined),
  typeof Boolean(undefined),
); // false boolean
console.log("String(undefined):", String(undefined), typeof String(undefined)); // "undefined" string

// Part B ----------------------------------------
  console.log("\n--- Part B ---");
  // 1. prediction "53" string. + sees a string so it turns 3 into "3" and joins them
  show('"5" + 3', "5" + 3);
  // 2. prediction 2 number. minus only works on numbers so "5" becomes 5
  show('"5" - 3', "5" - 3);
  // 3. prediction 10 number. * also forces both strings into numbers
  show('"5" * "2"', "5" * "2");
  // 4. prediction 2 number. true becomes 1 in maths
  show("true + 1", true + 1);
  // 5. prediction "true1" string. a string is involved so + joins text
  show('true + "1"', true + "1");
  // 6. prediction 0 number. false -> 0 and null -> 0
  show("false + null", false + null);
  // 7. prediction NaN number. null -> 0 but undefined -> NaN, and anything + NaN is NaN
  show("null + undefined", null + undefined);
  // 8. prediction Infinity number. JS doesn't crash on divide by zero
  show("1 / 0", 1 / 0);
  // 9. prediction NaN number. 0/0 has no meaningful answer
  show("0 / 0", 0 / 0);
  // 10. prediction NaN number. "abc" can't become a number so the minus gives NaN
  show('"abc" - 1', "abc" - 1);
  // 11. prediction "" (empty string). both arrays become "" and "" + "" is ""
  show("[] + []", [] + []);
  // 12. prediction "12" string. [1] becomes "1", [2] becomes "2", then they join
  show("[1] + [2]", [1] + [2]);

// Part C - the three questions --------------------------------------
  /*
   * 1. Number('42abc') vs parseInt('42abc')
   *    Number('42abc') returns NaN, because Number() is strict: the WHOLE string
   *    must be a valid number. parseInt('42abc') returns 42, because parseInt
   *    reads from the left and just stops at the first character that doesn't
   *    fit. So parseInt is forgiving and Number is strict.
   *
   * 2. parseFloat vs parseInt in real code
   *    Any time the value can have decimals, like prices. If a form sends
   *    "19.99" and I use parseInt I get 19, so I silently lose 99 cents per
   *    item. On a store doing thousands of orders, that is real money gone
   *    (and the books won't balance). Same for interest rates like "7.5" turning
   *    into 7.
   *
   * 3. Number('') returns 0, not NaN.
   *    This is a classic bug because an empty form field is "" and people check
   *    Number.isNaN() to see if the input is valid. It passes, because 0 is a
   *    real number. Example: an "Amount to transfer" field left blank becomes
   *    R0, the validation says fine, and the app submits an empty transfer
   *    (or worse, an empty "age" field becomes age 0). I need to check for the
   *    empty string BEFORE converting.
   */

//   challenge 3
console.log("\n===== CHALLENGE 3 =====");

  // 1. ARITHMETIC (with modulo)
  // Works out the monthly net salary: take off 25% tax, 1% UIF and the
  // fixed medical aid. The % at the end tells me how much is left over
  // after the last full R1,000 (handy if payroll rounds down to thousands).
  const grossSalary = 45000;
  const tax = grossSalary * 0.25;
  const uif = grossSalary * 0.01;
  const medicalAid = 2500;
  const netSalary = grossSalary - tax - uif - medicalAid;
  const leftoverAfterThousands = netSalary % 1000;
  console.log("1. Net salary:", netSalary, "| left after last R1000:", leftoverAfterThousands);

  // 2. ASSIGNMENT (compound operators)
  // Cart starts at 0. += adds each item, *= 0.9 takes 10% off,
  // then *= 1.15 adds 15% VAT.
  let cart = 0;
  cart += 150;
  cart += 85;
  cart += 220;
  cart *= 0.9;
  cart *= 1.15;
  // fun fact: the exact answer is 470.925, but toFixed gives 470.92 because
  // of floating-point (I come back to this in Challenge 9)
  console.log("2. Cart total:", cart.toFixed(2));

  // 3. COMPARISON
  // Signup validation: 18+, password at least 8 characters, and the
  // confirmed email must match EXACTLY (=== so the type has to match too).
  const signupAge = 19;
  const signupPassword = "mypassw0rd";
  const typedEmail = "thabo@example.com";
  const confirmedEmail = "thabo@example.com";
  const ageOk = signupAge >= 18;
  const passwordOk = signupPassword.length >= 8;
  const emailsMatch = typedEmail === confirmedEmail;
  console.log("3. Signup valid?", ageOk && passwordOk && emailsMatch);

  // 4. LOGICAL
  // Premium dashboard: (logged in AND verified) OR admin. The brackets make it
  // obvious which part belongs together.
  const isLoggedIn = true;
  const emailVerified = false;
  const isAdmin = true;
  const canSeePremium = (isLoggedIn && emailVerified) || isAdmin;
  console.log("4. Can see premium dashboard?", canSeePremium);

  // 5. UNARY
  // Unary + turns the string from the form into a number. ! flips the dark mode flag.
  const ageFromForm = "25";
  const ageNumber = +ageFromForm;
  let isDarkMode = false;
  isDarkMode = !isDarkMode;
  console.log("5. Age as number:", ageNumber, typeof ageNumber, "| dark mode:", isDarkMode);

  // 6. TERNARY
  // Badge text: premium -> 'Premium Member', trial -> 'Trial Member', else 'Free Member'.
  const membershipType = "trial";
  const badge =
    membershipType === "premium" ? "Premium Member" :
    membershipType === "trial" ? "Trial Member" :
    "Free Member";
  console.log("6. Badge:", badge);

  // 7. STRING CONCATENATION (+ and template literal)
  const firstName = "Thabo";
  const lastName = "Nkosi";
  const personAge = 28;
  const greetingPlus = "Welcome back " + firstName + " " + lastName + ", you are " + personAge + " years old.";
  const greetingTemplate = `Welcome back ${firstName} ${lastName}, you are ${personAge} years old.`;
  console.log("7a.", greetingPlus);
  console.log("7b.", greetingTemplate);
  // The template literal is better. With + it's easy to forget a space or a
  // quote, and the line is hard to read. With backticks it reads like the real sentence.

  /*
   * Q1. Prefix (++x) vs postfix (x++)
   *   let x = 5; console.log(x++, x);  // prints 5 6  (uses 5 first, THEN adds 1)
   *   let y = 5; console.log(++y, y);  // prints 6 6  (adds 1 FIRST, then uses it)
   *
   * Q2. Three real uses of modulo
   *   - even/odd check: n % 2 === 0
   *   - wrapping around, e.g. an image carousel: nextIndex = (current + 1) % images.length
   *   - converting seconds to a clock: seconds % 60 gives the leftover seconds
   *     after the whole minutes are taken out (also good for "every 3rd row" striping)
   *
   * Q3. Nested ternaries
   *   A flat chain like my badge example (one condition per line, always going
   *   to the "else" side) is fine and readable. I would NOT use one when
   *   conditions are nested inside the "true" branch, when each branch has long
   *   logic, or when other people will need to debug it. 
   */
  { let x = 5; console.log("prefix/postfix demo:", x++, x); }
  { let y = 5; console.log("prefix/postfix demo:", ++y, y); }