
const ExpressError = require("./l3");
const express = require("express");

const app = express();

app.listen(8080, () => {
  console.log("server started");
});

// Middleware to check token
const checkToken = (req, res, next) => {
  const { token } = req.query;

  if (token === "11Ackj23") {
    return next();
  }

  throw new ExpressError(402, "Access denied");
};

// Route to generate an error intentionally
app.use("/err", (req, res, next) => {
  let abc = abc; // ReferenceError: Cannot access 'abc' before initialization
  res.send("This will not execute");
});



// API route with token authentication
app.use("/api", checkToken, (req, res) => {
  res.send("Data");
});

app.use("/admin",(req,res)=>{
    throw new ExpressError(404,"access forbbiden")
})
// Random route middleware
app.use("/random", (req, res, next) => {
  console.log("This is random");
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Root path");
});

app.get("/random", (req, res) => {
  res.send("Random path");
});
// Error-handling middleware
app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).send(message);
});