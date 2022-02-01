const books = ["fiction", ["horror", "literary"], "science"];

let fiction, horror, literary, science;
[fiction, [horror, literary], science] = books;
console.log(fiction);
console.log(horror);
console.log(literary);
console.log(science);

const Student = {
  firstName: "Joe",
  university: "MIT",
  studentInfo: {
    studentid: 555,
  },
};

let firstName, university, studentid;
({firstName, university, studentInfo: {studentid}} = Student);

console.log(firstName);
console.log(university);
console.log(studentid);

if (typeof module !== "undefined") {
  module.exports = {
    fiction,
    horror,
    literary,
    science,
    firstName,
    university,
    studentid,
  };
}
