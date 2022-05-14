// import Router from Express
const Router = require("express");
const students = require("../controllers/students.controller.js");
const router = Router();

// get API end point URL
router.get("/", students.findAll);

// make 3 end points for speccfic student, post - make a new student, delete a student
router.get("/:id", students.find);

// post / make a new student
router.post("/", students.create);

router.delete("/:id", students.destroy);

module.exports = router;
