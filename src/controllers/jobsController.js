const getAllJobs = async (req, res) => {
	res.send("Jobs gotten");
};

const getJob = async (req, res) => {
	res.send("Job gotten");
};

const createJob = async (req, res) => {
	res.send("Job created");
};

const updateJob = async (req, res) => {
	res.send("Job updated");
};

const deleteJob = async (req, res) => {
	res.send("Job deleted");
};

module.exports = {
	getAllJobs,
	getJob,
	createJob,
	updateJob,
	deleteJob,
};
