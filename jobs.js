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

let careem = jobs.find(job => job.company == 'Careem')

console.log(careem)

jobs.forEach((job)=>{
  console.log(`${job.title} at ${job.company}:${job.salary} AED `)
})

