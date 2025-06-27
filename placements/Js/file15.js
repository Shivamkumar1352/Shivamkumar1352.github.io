//JSON
// const students = {
//     name: "Shivam",
//     age: "21",
// };
// console.log(JSON.stringify(students));

const students = '{"name":"Shivam", "age":"21"}';
const newStudent = JSON.parse(students);
console.log(newStudent);
console.log(newStudent.name);
