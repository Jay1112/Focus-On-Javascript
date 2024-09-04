const stu1 = {
  name: "Jay",
  age: 25,
  getDetails: function (phyMarks, chemMarks) {
    console.log("* - * - * - * -");
    console.log("Name : ", this.name);
    console.log("Age  : ", this.age);
    console.log("Phy  : ", phyMarks);
    console.log("Chem  : ", chemMarks);
    console.log("* - * - * - * -");
  },
};

const stu2 = {
  name: "John",
  age: 37,
};
console.log("Call");
stu1.getDetails.call(stu2, 56, 45);
console.log("Apply");
stu1.getDetails.apply(stu2, [56, 45]);
console.log("Bind");
const bindedVersion = stu1.getDetails.bind(stu2);
console.log(bindedVersion(56, 45));
