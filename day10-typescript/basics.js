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
    return "".concat(job.title, " at ").concat(job.salary);
}
