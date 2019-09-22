let job = "developer";

function name(name) {
    console.log("My name is: " + name)
}

module.exports = {
    job,
    name
}
// or
module.exports.myJob = job;
