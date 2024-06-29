function checkPassword(password) {
  if (password.length < 8) {
    console.warn('Password is too short.');
  } else {
    console.log('Password length is acceptable.');
  }
}

checkPassword('12345'); // This will trigger the warning message
