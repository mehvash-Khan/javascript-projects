let years: number = 7
console.log(years)


function isGoodOffer(salary: number):boolean {
    return (salary > 1500);
}

isGoodOffer(1500);

type Job = {
    title: string,
    company: string,
    salary: number,
    remote: Boolean,
    location?: string 

}


const jobs: Job[] = []

function getRemoteJobs(jobs: Job[]): Job[]{
    return jobs.filter((job)=>job.remote)
}

function formatJob(job:Job): string{
    return `${job.company} at ${job.salary}`
}

type Status = "applied" | "interview" | "rejected" | "offer";

type Application = {
  company: string;
  status: Status;
};

let applications: Application[] = [
    {
        company : "A",
        status : "applied"
    },
    {
        company : "B",
        status : "interview"
    },
    {
        company : "C",
        status : "interview"
    }
]


function company(apps: Application[]): Application[]{
     return apps.filter((app)=> app.status == "interview");
}

console.log(company(applications))