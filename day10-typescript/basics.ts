let years: number = 7
console.log(years)


function isGoodOffer(salary: number):boolean {
    return (salary > 1500);
}

isGoodOffer(1500);

type job = {
    title: String,
    salary: Number,
    remote: Boolean,
    location?: String 

}


const jobs: job[] = []

function getRemoteJobs(jobs: job[]): job[]{
    return jobs.filter((job)=>job.remote)
}

function formatJob(job:job): string{
    return `${job.title} at ${job.salary}`
}

