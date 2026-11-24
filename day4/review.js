const jobs = [
    { title: "Frontend Developer", company: "Noon", salary: 18000, remote: false },
    { title: "React Developer", company: "Careem", salary: 22000, remote: true },
    { title: "UI Developer", company: "Emirates", salary: 14000, remote: true },
  ];

  const highestSalary = jobs.reduce((max,job)=> max > job.salary ? max : job.salary, jobs[0].salary)
  
const remoteJobs = jobs.reduce((remote, job)=>job.remote? remote+1:remote ,0 )

console.log(remoteJobs)


function summary({ title, company, salary }){
    console.log(title, company,salary);

}


for(job in jobs){
summary(jobs[job])
}


const updatedJobs = jobs.map((job)=>{
    if(job.company == 'Emirates')
        return {...job,salary:1600}
return jobs
})

