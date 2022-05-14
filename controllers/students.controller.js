const req = require("express/lib/request");
const Student = require("../models/student.js");

const findAll = async (req, res) => {
  // use the methods declared in class from model folder
  const students = await Student.findAll();
  // configure status code for home path, means everything ran ok & returned to user
  res.status(200).send({ students });
};

const find = async (req, res) => {
  // get value of id which is passed from the URL, params is a keyword, populated from url path

  const student = await Student.find(req.params.id);
  // configure status code for home path, means everything ran ok & returned to user
  res.status(200).send({
    student,
  });
};

// below is instance not static method on class so need to create an object before running it
const create = (req, res) => {
  // in the body is the data/info
  const newStudent = new Student(req.body);
  const message = newStudent.save();
  //  201 means resource has been created
  res.status(201).send({
    message,
    newStudent,
  });
};

const destroy = async (req, res) => {
  const message = await Student.destroy(req.params.id);
  // 204 status for deletion
  res.status(202).send({
    message,
  });
};

module.exports = { findAll, find, create, destroy };
