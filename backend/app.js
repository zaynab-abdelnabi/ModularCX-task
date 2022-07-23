require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
var createError = require("http-errors");
const cors = require("cors");

const mongoose = require("mongoose");

// import routes
var postsRouter = require("./routes/post");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));

// Database connection
mongoose
  .connect(process.env.DB_CONNECTION_URL, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected Successfully to the backend");
  })
  .catch(console.error);

// Routes
app.use("/api/posts", postsRouter);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    success: false,
    message: err.message,
  });
});

// undefined routes error handling
app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
