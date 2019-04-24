let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// The function to do the job
function sumSalaries(department) {
   
  if (Array.isArray(department)) {  console.log(department + " array");// case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {  console.log(department + " not an array");// case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
        console.log(subdep + " subdep");
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 6700