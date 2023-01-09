// ! ASSIGMENT  
const people =  {
    person1: {
        name: "Can",
        surname: "Canan",
        dob: "1990",
        job: "developer",
        salary: "140000",
        drivingLicense: true,
      },
      person2: {
        name: "John",
        surname: "Sweet",
        dob: "1990",
        job: "tester",
        salary: "110000",
        drivingLicense: false,
      },
      person3: {
        name: "Steve",
        surname: "Job",
        dob: "2000",
        job: "developer",
        salary: "90000",
        drivingLicense: true,
      }
    }
   
console.log(people.person2.salary, people.person2.name);

for (item in people) {
    console.log(people[item].salary);
}

for (item in people) {
    
    if (people[item].job === "developer") {
        console.log(people[item].dob);
    }

}

