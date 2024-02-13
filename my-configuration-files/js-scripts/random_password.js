function generateRandomPassword(length) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_-+=<>?,.;:\'\"[]{}|\\/~`';
  // Combine all character sets into one string
  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = '';

  for (let i = 0; i < length; i++) {
    // Choose a random character from the combined set
    const randomIndex = Math.floor(Math.random() * allChars.length);
    const randomChar = allChars.charAt(randomIndex);

    // Append the random character to the password
    password += randomChar;
  }

  return password;
}

// Example usage: Generate a random password of length 12
const randomPassword = generateRandomPassword(100);
console.log(randomPassword);
