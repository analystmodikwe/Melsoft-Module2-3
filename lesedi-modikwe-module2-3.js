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
//   console.log("\n--- Part B ---");
//   // 1. prediction "53" string. + sees a string so it turns 3 into "3" and joins them
//   show('"5" + 3', "5" + 3);
//   // 2. prediction 2 number. minus only works on numbers so "5" becomes 5
//   show('"5" - 3', "5" - 3);
//   // 3. prediction 10 number. * also forces both strings into numbers
//   show('"5" * "2"', "5" * "2");
//   // 4. prediction 2 number. true becomes 1 in maths
//   show("true + 1", true + 1);
//   // 5. prediction "true1" string. a string is involved so + joins text
//   show('true + "1"', true + "1");
//   // 6. prediction 0 number. false -> 0 and null -> 0
//   show("false + null", false + null);
//   // 7. prediction NaN number. null -> 0 but undefined -> NaN, and anything + NaN is NaN
//   show("null + undefined", null + undefined);
//   // 8. prediction Infinity number. JS doesn't crash on divide by zero
//   show("1 / 0", 1 / 0);
//   // 9. prediction NaN number. 0/0 has no meaningful answer
//   show("0 / 0", 0 / 0);
//   // 10. prediction NaN number. "abc" can't become a number so the minus gives NaN
//   show('"abc" - 1', "abc" - 1);
//   // 11. prediction "" (empty string). both arrays become "" and "" + "" is ""
//   show("[] + []", [] + []);
//   // 12. prediction "12" string. [1] becomes "1", [2] becomes "2", then they join
//   show("[1] + [2]", [1] + [2]);

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
console.log(
  "1. Net salary:",
  netSalary,
  "| left after last R1000:",
  leftoverAfterThousands,
);

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
console.log(
  "5. Age as number:",
  ageNumber,
  typeof ageNumber,
  "| dark mode:",
  isDarkMode,
);

// 6. TERNARY
// Badge text: premium -> 'Premium Member', trial -> 'Trial Member', else 'Free Member'.
const membershipType = "trial";
const badge =
  membershipType === "premium"
    ? "Premium Member"
    : membershipType === "trial"
      ? "Trial Member"
      : "Free Member";
console.log("6. Badge:", badge);

// 7. STRING CONCATENATION (+ and template literal)
const firstName = "Thabo";
const lastName = "Nkosi";
const personAge = 28;
const greetingPlus =
  "Welcome back " +
  firstName +
  " " +
  lastName +
  ", you are " +
  personAge +
  " years old.";
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
{
  let x = 5;
  console.log("prefix/postfix demo:", x++, x);
}
{
  let y = 5;
  console.log("prefix/postfix demo:", ++y, y);
}

// Challenge 4
console.log("n======= Challenge 4 ======");
console.log("n======= Part A ======");
//1. true because its equality, their data types are not checked and false defaults to 0
console.log(0 == false);

// 2 false because its identity it expects each and everything to be equal
console.log(0 === false);

// 3 true, because its not a number and its an empty string which equates to zero
console.log("" == 0);

// 4 false, because its not a number and its an empty string which equates to zero but === will check both the value and datatype
console.log("" === 0);

// 5 true because the value is is the same even though the data type is different == does not not check data type
console.log("0" == 0);

// 6 false because the value is the same but  the data type is different and === expects value and data type to be the same
console.log("0" === 0);

// 7 true because null is just zero and undefined has no value so its also zero even though they are different types == will read them as 0
console.log(null == undefined);

// 8 false because null and undefined are off different types
console.log(null === undefined);

// 9 true, because null is 0 == will read both as zero
console.log(`${9}, ${null == 0}`); // i was wrong here, the answer is false, because javascript doest convert null into a number when using ==

// 10 true because i am using relational operator and it turns null to a number
console.log(`${10}, ${null >= 0}`);

// 11 false because i am using relational operator and it turns null to a number so it will be zero and zero is not greater than zero but equals to
console.log(`${11}, ${null > 0}`);

// 12 false because NaN cannnot be equal to itself it represents an invalid or undefined numeric result.
console.log(`${12}, ${NaN == NaN}`);

// 13 false because NaN cannnot be equal to itself it represents an invalid or undefined numeric result.
console.log(`${13}, ${NaN === NaN}`);

// 14 true because object uses different comparison rule from == and === which makes two NaN values to be the same
console.log(`${14}, ${Object.is(NaN, NaN)}`);

// 15 false because positive zero cannot be = to negative zero
console.log(`${15}, ${+0 === -0}`); // i was wrong here, the answer is true because when using ===, +0 and -0 are considerd equal

// 16 false because +0 and -0 are not the same
console.log(`${16}, ${Object.is(+0, -0)}`);

// 17 true because the values are the same
console.log(`${17}, ${[1, 2, 3] == "1,2,3"}`);

// 18 true because an empty array will be 0 which is false
console.log(`${18}, ${[] == false}`);

// 19 true because an empty array will be 0
console.log(`${19}, ${[] == 0}`);

//20  true because the value in an array is zero and false is also 0
console.log(`${20}, ${[0] == false}`);

// Part B - password reset validator ---------------------------------
const validateResetForm = (form) => {
  // === on everything, so type must match too
  const passwordsMatch = form.newPassword === form.confirmPassword;
  const emailsMatch = form.currentEmail === form.confirmEmail;
  const notSameAsEmail = form.newPassword !== form.currentEmail;
  const longEnough = form.newPassword.length >= 8;

  console.log("  Passwords match:", passwordsMatch ? "PASS" : "FAIL");
  console.log("  Emails match:", emailsMatch ? "PASS" : "FAIL");
  console.log("  Password is not the email:", notSameAsEmail ? "PASS" : "FAIL");
  console.log("  Password at least 8 chars:", longEnough ? "PASS" : "FAIL");
};

console.log("\nTest 1 (should pass all four):");
validateResetForm({
  newPassword: "Str0ng!Pass99",
  confirmPassword: "Str0ng!Pass99",
  currentEmail: "lesedi@example.com",
  confirmEmail: "lesedi@example.com",
});

console.log("Test 2 (should fail at least two):");
validateResetForm({
  newPassword: "short",
  confirmPassword: "shorT", // capital T, so it doesn't match
  currentEmail: "lesedi@example.com",
  confirmEmail: "lesedi@exmaple.com", // typo in the domain
});
/*
 * I used === (strict equality). For passwords this matters because the
 * match has to be EXACT. With == JavaScript would quietly convert types, so
 * a number 12345678 and the string "12345678" would count as "matching"
 * even though they aren't the same value. A security check shouldn't be
 * guessing what I meant, it should be strict.
 */

//  CHALLENGE 5

console.log("\n===== CHALLENGE 5 =====");

// 1. prediction 13. steps: 3*4=12 first, then 2+12=14, then 14-1=13
console.log("1.", 2 + 3 * 4 - 1);
// 2. prediction 15. brackets first: (5) and (3), then 5*3=15
console.log("2.", (2 + 3) * (4 - 1));
// 3. prediction 4. same precedence, left to right: 10-4=6, then 6-2=4
console.log("3.", 10 - 4 - 2);
// 4. prediction 512. ** goes right to left: 3**2=9 first, then 2**9=512
console.log("4.", 2 ** (3 ** 2));
// 5. prediction 3. % and * are equal so left to right: 10%3=1, then 1*2=2, then 2+1=3
console.log("5.", (10 % 3) * 2 + 1);
// 6. prediction 5. left to right: 100/4=25, then 25/5=5
console.log("6.", 100 / 4 / 5);
// 7. prediction true. maths first: 5+2=7, then comparisons: 7>6 true and 3<4 true, then && gives true
console.log("7.", 5 + 2 > 6 && 3 < 4);
// 8. prediction true. && fires before ||: (true&&false)=false, (true&&true)=true, then false||true = true
console.log("8.", (true && false) || (true && true));
// 9. prediction false. ! first: !false=true, !!0=false, then true&&false=false
console.log("9.", !false && !!0);
// 10. prediction true. 5>3 true, 10<20 true, (2==="2") is false so !(false)=true. (true&&true)||true = true
console.log("10.", (5 > 3 && 10 < 20) || !(2 === "2"));
// 11. prediction about 1035. left to right: 1000*1.15, then times 0.9 (could have a tiny float error)
console.log("11.", 1000 * 1.15 * 0.9);
// 12. prediction "number1". typeof binds tighter than +, so it's (typeof 5) + 1 = "number" + 1
console.log("12.", typeof 5 + 1);
// 13. prediction "number". brackets first: 5+1=6, then typeof 6
console.log("13.", typeof (5 + 1));
// 14. prediction "56". * first: 3*2=6, then "5"+6 joins as text
console.log("14.", "5" + 3 * 2);
// 15. prediction 4. left to right: "5"-3=2 (number), then 2+2=4
console.log("15.", "5" - 3 + 2);

/*
 * When should I add parentheses even if precedence doesn't need them?
 * Whenever someone reading the line has to stop and think about the order.
 * The computer doesn't care about extra brackets, but the next developer
 * (or me in 3 months) does, and mixing && with || or doing money maths are
 * places where a wrong assumption costs real money. Clear beats clever.
 */

// challenge 6
console.log("PART A")
let Grade=95 //A
    Grade=82 //B
    Grade=73  //C
    Grade=65 //D
    Grade=54 //E
    Grade=42 //F
    Grade=0 //F
    Grade=100 //A
console.log(
    Grade >=90 ? "A" : 
    Grade >=80 ? "B" :
    Grade >= 70 ? "C" :
    Grade >= 60 ? "D" :
    Grade >= 50 ? "E" :
    "F" 
);

console.log("n==== Part B test 1 ===");
 // || uses the default when the left side is FALSY (undefined, null, "", 0, false)
// ?? uses the default ONLY when the left side is null or undefined

let user1 = {}; //an empty object, so every property is undefined
let displayName1 = user1.displayName || "Guest User"; // undefined is falsy -> "Guest User"
let theme1 = user1.theme || "light";                  // undefined is falsy -> "light"
let maxResults1 = user1.maxResults || 10;             // undefined is falsy -> 10
let lastLogin1 = user1.lastLogin ?? "Never";          // undefined -> "Never"
let notificationCount1 = user1.notificationCount ?? 0; // undefined -> 0

console.log("Test 1 displayName:", displayName1);           // Guest User
console.log("Test 1 theme:", theme1);                       // light
console.log("Test 1 maxResults:", maxResults1);             // 10
console.log("Test 1 lastLogin:", lastLogin1);               // Never
console.log("Test 1 notificationCount:", notificationCount1); // 0

console.log("n==== test2 =====")
//  test 2  notificationCount is 0 and theme is "

let user2 = {
    displayName: "Lesedi",
    theme: "",              // empty string is falsy
    maxResults: 25,
    lastLogin: "2026-10-05",
    notificationCount: 0    // zero is falsy, but it is a real value
};

let displayName2 = user2.displayName || "Guest User";
let theme2 = user2.theme || "light";                   // "" is falsy -> replaced with "light"
let maxResults2 = user2.maxResults || 10;
let lastLogin2 = user2.lastLogin ?? "Never";
let notificationCount2 = user2.notificationCount ?? 0; // 0 is NOT null/undefined -> stays 0

console.log("Test 2 displayName:", displayName2);           // Lesedi
console.log("Test 2 theme:", theme2);                       // light
console.log("Test 2 maxResults:", maxResults2);             // 25
console.log("Test 2 lastLogin:", lastLogin2);               // 2026-10-05
console.log("Test 2 notificationCount:", notificationCount2); // 0

// WHY ?? and || behave differently:
// || treats ANY falsy value as "missing", so theme "" became "light".
// That is fine for theme, because an empty theme is not useful.
// ?? only treats null and undefined as "missing", so notificationCount
// stayed 0. Zero is a valid count (no notifications), and using || here
// would wrongly replace it with the default.

console.log("n=== PART C ===");

// Three test users: full data, missing address, and user is null
let fullUser = { name: "Thabo", address: { city: "Johannesburg" } };
let noAddress = { name: "Naledi" };
let nullUser = null;

// ---------- Full data ----------
// Technique 1: && stops at the first falsy value, so we never read a property of undefined/null
console.log("Full data, 1 (&&):", fullUser && fullUser.address && fullUser.address.city);
// Technique 2: ?. stops and returns undefined as soon as something is null/undefined
console.log("Full data, 2 (?.):", fullUser?.address?.city);
// Technique 3: ?. plus ?? gives a default when the result is null/undefined
console.log("Full data, 3 (?. ??):", fullUser?.address?.city ?? "Unknown city");

// ---------- Missing address ----------
console.log("No address, 1 (&&):", noAddress && noAddress.address && noAddress.address.city);
console.log("No address, 2 (?.):", noAddress?.address?.city);
console.log("No address, 3 (?. ??):", noAddress?.address?.city ?? "Unknown city");

// ---------- User is null ----------
console.log("Null user, 1 (&&):", nullUser && nullUser.address && nullUser.address.city);
console.log("Null user, 2 (?.):", nullUser?.address?.city);
console.log("Null user, 3 (?. ??):", nullUser?.address?.city ?? "Unknown city");

// Note: technique 1 prints null for the null user, because && returns the
// first falsy value it meets (the null itself). ?. always returns undefined.

section ("PART D");
// 1. Prediction: "finally" (string)
// null, undefined, 0 and "" are all falsy, so || keeps going to the last value
let r1 = null || undefined || 0 || "" || "finally";
console.log("1:", r1, typeof r1);

// 2. Prediction: 0 (number)
// null and undefined are skipped by ??, but 0 is NOT nullish, so it stops there
let r2 = null ?? undefined ?? 0 ?? "" ?? "finally";
console.log("2:", r2, typeof r2);

// 3. Prediction: "first truthy" (string)
// 0 is falsy, so || moves on to the right side
let r3 = 0 || "first truthy";
console.log("3:", r3, typeof r3);

// 4. Prediction: 0 (number)
// 0 is not null/undefined, so ?? keeps it and never looks at the right side
let r4 = 0 ?? "first non-nullish";
console.log("4:", r4, typeof r4);

// 5. Prediction: false (boolean)
// true is truthy so && continues, false is falsy so && stops and returns it
// "never reached" is never evaluated (short-circuit)
let r5 = true && false && "never reached";
console.log("5:", r5, typeof r5);

// 6. Prediction: "third" (string)
// All three are truthy, so && returns the last value
let r6 = "first" && "second" && "third";
console.log("6:", r6, typeof r6);

// 7. Prediction: "yes" (string)
// Brackets first: true && "yes" gives "yes"
// Then false || "yes": false is falsy, so || returns "yes"
let r7 = false || (true && "yes");
console.log("7:", r7, typeof r7);

// 8. Prediction: "yes" (string)
// Brackets first: false || true gives true
// Then true && "yes": true is truthy, so && returns the last value, "yes"
let r8 = (false || true) && "yes";
console.log("8:", r8, typeof r8);

// 9. Prediction: 3 (number)
// All values are truthy, so && returns the last one
let r9 = 1 && 2 && 3;
console.log("9:", r9, typeof r9);

// 10. Prediction: undefined (undefined)
// null?.foo stops right away because the left side is null,
// so the rest of the chain (?.bar?.baz) is skipped
let r10 = null?.foo?.bar?.baz;
console.log("10:", r10, typeof r10);

// CHALLENGE 7
console.log ("n=== CHALLENGE 7 ==")
console.log ("n=== PART A==")

// typeof returns a STRING naming the type of a value

// 1. Prediction: "number"
console.log("1:", typeof 42);

// 2. Prediction: "string"
console.log("2:", typeof "hello");

// 3. Prediction: "boolean"
console.log("3:", typeof true);

// 4. Prediction: "undefined"
console.log("4:", typeof undefined);

// 5. Prediction: "object" 
// null is not really an object. This is a mistake from the first version of
// JavaScript that was never fixed, because fixing it would break old websites.
console.log("5:", typeof null);

// 6. Prediction: "object"
console.log("6:", typeof {});

// 7. Prediction: "object" 
// Arrays are a special kind of object, so typeof cannot tell them apart from {}
console.log("7:", typeof []);

// 8. Prediction: "function"
// Functions are objects too, but typeof gives them their own result
console.log("8:", typeof function() {});

// 9. Prediction: "number"
// NaN means "Not a Number", but it is still a value of the number type
console.log("9:", typeof NaN);

// 10. Prediction: "undefined"
// It does not throw because typeof is built to be safe: if the variable
// was never declared, it just reports "undefined" instead of crashing.
// Using the variable by itself (console.log(undeclaredVariable)) WOULD
// throw a ReferenceError, because JavaScript tries to read it.
console.log("10:", typeof undeclaredVariable);

// One-liner to tell an array from an object:
// Array.isArray() returns true only for real arrays
console.log("Array.isArray([]):", Array.isArray([]));   // true
console.log("Array.isArray({}):", Array.isArray({}));   // false