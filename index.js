const express = require("express");
require("./db/connect");

const logger = require("./middlewares/logger");
const { errorHandler, notFound } = require("./middlewares/errors");
const dotenv = require("dotenv");
dotenv.config();
const helmet =require("helmet");
const path =require("path");
const cors=require("cors");

//init app
const app = express();

//port 
const port = process.env.PORT || 3000;
//apply midlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger)

//helmet
app.use(helmet());
//cors
app.use(cors());

    //Routes
app.use("/api/annonce", require("./routers/enonce"));
app.use("/api/auth", require("./routers/auth"));
app.use("/api/users",require("./routers/users"));

//Error Handler Middleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`server is running in ${process.env.NODE_ENV} on port ${port}!`));