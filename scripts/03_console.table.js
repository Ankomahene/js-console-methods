const students = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 22 },
  { name: 'Jim', age: 21 },
];

console.table(students);

const studentsNested = [
  {
    name: 'John',
    age: 20,
    address: {
      city: 'New York',
      state: 'NY',
    },
  },
  {
    name: 'Jane',
    age: 22,
    address: {
      city: 'Los Angeles',
      state: 'CA',
    },
  },
  {
    name: 'Jim',
    age: 21,
    address: {
      city: 'Chicago',
      state: 'IL',
    },
  },
];

console.table(studentsNested);

// Displaying nested properties by flattening the object
const flattenedStudents = studentsNested.map((student) => ({
  name: student.name,
  age: student.age,
  city: student.address.city,
  state: student.address.state,
}));

console.table(flattenedStudents);
