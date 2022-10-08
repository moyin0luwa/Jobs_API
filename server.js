require("dotenv").config();
require('express-async-errors')
const express = require("express");
const app = express();
// const connectDB = require('./src/db/connect')
// const appRoute = require('./src/router/router')

// Error Handling
const notFoundMiddleware = require("./src/middleware/not-found");
const errorMiddleware = require("./src/middleware/error-handler");

//JSON Middleware for the POST routes
app.use(express.json());

// Route
// app.use('/', appRoute )
app.get("/", (req, res) => {
	res.send("Welcome to the Jobs API");
});

// using the error handlers
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		// connectDB
        // await connectDB(process.env.MONGO_URI)
		app.listen(port, () => console.log(`Server listening on PORT ${port}...`));
	} catch (error) {
		console.log(error); 
	}
};

start();