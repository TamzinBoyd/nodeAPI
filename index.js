const express = require("express");
const swaggerUI = require("swagger-ui-express");

// import router
const router = require("./routes/students.js");

// import swagger doc
const swaggerDocument = require("./config/swagger.js");

// use express to help build server side app, run it with below
const app = express();
// specify port
const port = process.env.PORT || 3000;

// specify format of retured data
app.use(express.json());
// external router and give base endpoint and state what will run at this endpoint which we've imported above, so when visit this URL you see the object created in student file
// for any addtionanal routes created they would be accessed with /api/students/newrouter
// everything in the imported router will have a path that follows on from below, rather than instead of.
app.use("/api/students", router);

// specify end point for user
app.get("/api", (req, res) => {
  // message for user when reaches it
  res.send("Welcome to my API!");
});

// add route for swagger doc
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// add 404 route (incorrect url will be directed to here)
app.get("*", (req, res) => {
  res.status(404).send("There is no content at this route");
});

// run server and tell it to listen, this is what runs on the port to say it's working
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
