console.group('Student Information');

console.log('Name: John Doe');
console.log('Age: 20');

console.group('Course Information');
console.log('Course: Computer Science');
console.log('Year: Sophomore');

console.group('Subjects');
console.log('Math');
console.log('Physics');
console.log('Computer Programming');
console.groupEnd(); // End of Subjects group

console.groupEnd(); // End of Course Information group

console.groupEnd(); // End of Student Information group

console.group('Additional Information');

console.log('Hobbies: Reading, Swimming, Coding');

console.group('Contact Information');
console.log('Email: john.doe@example.com');
console.log('Phone: 123-456-7890');
console.groupEnd(); // End of Contact Information group

console.groupEnd(); // End of Additional Information group
