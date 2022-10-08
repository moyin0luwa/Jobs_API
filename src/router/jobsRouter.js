const router = require("express").Router();
const {
	getAllJobs,
	getJob,
	createJob,
	updateJob,
	deleteJob,
} = require("../controllers/jobsController");
const authMiddleware = require("../middleware/auth");

router
	.get("/" , getAllJobs)
	.get("/:id", getJob)
	.post("/", createJob)
	.patch("/:id", updateJob)
	.delete("/:id", deleteJob);

module.exports = router;
