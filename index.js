// Password Generator Programme

function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const LowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%&+-?"

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? LowerCaseChars : "";
  allowedChars += includeUpperCase ? UpperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (length <= 0) {
    return `(Password length must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    return `(at least one set of characters needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  

  return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password: ${password}`);
