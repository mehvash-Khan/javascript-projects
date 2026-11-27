var years = 7;
console.log(years);
function isGoodOffer(salary) {
    return (salary > 1500);
}
isGoodOffer(1500);
var jobs = [];
function getRemoteJobs(jobs) {
    return jobs.filter(function (job) { return job.remote; });
}
function formatJob(job) {
    return "".concat(job.company, " at ").concat(job.salary);
}
var applications = [
    {
        company: "A",
        status: "applied"
    },
    {
        company: "B",
        status: "interview"
    },
    {
        company: "C",
        status: "interview"
    }
];
function company(apps) {
    return apps.filter(function (app) { return app.status == "interview"; });
}
console.log(company(applications));
