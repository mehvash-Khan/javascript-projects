const jobs = [
  { title: "Frontend Developer", company: "Noon", salary: 18000, remote: false },
  { title: "React Developer", company: "Careem", salary: 22000, remote: true },
  { title: "UI Developer", company: "Emirates", salary: 14000, remote: false },
  { title: "Web Developer", company: "Talabat", salary: 16000, remote: true },
];

let newarr = jobs.filter(job => job.remote)
console.log(newarr)

let mapArr = jobs.map(job => job.title  )

console.log(mapArr)

let careemJob = jobs.find(job => job.company == 'Careem')

console.log(careemJob)

jobs.forEach((job)=>{
  console.log(`${job.title} at ${job.company}:${job.salary} AED `)
})

let {title, salary} = careemJob

console.log(title,salary)


let salaries = jobs.map(job => job.salary)
let totalSalary = salaries.reduce((sum,salary) => sum+salary,0)
console.log(totalSalary)

let newArr = {...careemJob}
newArr.salary = 25000
console.log(newArr)