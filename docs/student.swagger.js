const findAll = {
  tags: ["Students"],
  description: ["GET all students - receive a list of all the students"],
  operationId: "findAll",
  responses: {
    200: {
      description: "The students list was received",
      content: "application/json",
    },
  },
};

const find = {
  tags: ["Students"],
  description: ["GET one student - receive a student using their id"],
  operationId: "find",
  responses: {
    200: {
      description: "The student was received",
      content: "application/json",
    },
  },
};

const create = {
  tags: ["Students"],
  description: ["POST a student - adds a student to the list of students"],
  operationId: "create",
  responses: {
    201: {
      description: "A student was created",
      content: "application/json",
    },
  },
};

const destroy = {
  tags: ["Students"],
  description: [
    "DELETE a student - removes a student from the list of students using their id",
  ],
  operationId: "destroy",
  responses: {
    202: {
      description: "A student was deleted",
      content: "application/json",
    },
  },
};

module.exports = { findAll, find, create, destroy };
