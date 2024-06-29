function checkAge(age) {
  if (age < 18) {
    console.error('Age must be 18 or older.');
  } else {
    console.log('Age is acceptable.');
  }
}

checkAge(16); // This will trigger the error message
