const data = [
  {
    name: "Aarav Mehta",
    rollno: 12,
    marks: 87,
  },
  {
    name: "Diya Sharma",
    rollno: 24,
    marks: 92,
  },
  {
    name: "Rohan Patel",
    rollno: 18,
    marks: 76,
  },
  {
    name: "Ishita Reddy",
    rollno: 6,
    marks: 81,
  },
  {
    name: "Kabir Singh",
    rollno: 56,
    marks: 68,
  },
];


// return students name in capital letters
let answer = data.map((student) => student.name.toUpperCase())
console.log(answer)

// student who scored more than 80 marks
answer = data.filter((student) => student.marks > 80)
console.log(answer)

// student who scored more tan 80 marks and roll no greater than 15
answer = data.filter((student) => student.marks > 80 && student.rollno > 15)
console.log(answer)

// sum of marks of all students
answer = data.reduce((acc, curr) => {
    return acc + curr.marks
}, 0)
console.log(answer)

// student's name who scored more than 80 marks
answer = data.filter((student) => student.marks > 80).map((student) => student.name)
console.log(answer)