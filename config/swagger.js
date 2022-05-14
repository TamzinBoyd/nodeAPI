const students = require("../docs/student.swagger.js");
//
const swaggerDocument = {
  // requires us to use openAPI 3.0.1
  openapi: "3.0.3",
  info: {
    // info on our api
    title: "Tamzin's first Node API",
    description:
      "The documentation for _nology self-paced court Node API, designed to teach server-side programming to trainees.",
    version: "1.0.0",

    contact: {
      name: "Tamzin",
      email: "test@test.co.uk",
      url: "tamzin-boyd.co.uk",
    },
  },
  //   if hosted would have 2 here
  servers: [
    {
      url: "https://localhost:3000/",
      description: "Local server",
      //   another server may be production / development
    },
  ],
  tags: {
    name: "Students",
  },
  //   these are what users can interact with
  paths: {
    "/api/students": {
      //   students in our imported file
      get: students.findAll,
      post: students.create,
    },
    "/api/students/:id": {
      get: students.find,
      delete: students.destroy,
    },
  },
};

module.exports = swaggerDocument;
