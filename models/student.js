// model for data
// import our firestore database
const db = require("../config/firebase.js");

class Student {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.age = data.age;
    this.interests = data.interests;
    // use inbuilt class of Date and format returned info into nice date format
    this.dateCreated = new Date().toUTCString();
  }
  static async findAll() {
    // making call to the api database, so we are returned a promise.  if successful .then is ran
    return db
      .collection("students")
      .get()
      .then((res) => {
        // .docs is an array of all responses that have come back
        return res.docs.map((doc) => doc.data());
      });
  }

  static async find(id) {
    const response = await db
      .collection("students")
      // does key in object (could be name etc)match parameter id passed in
      .where("id", "==", id)
      .get();
    return response.docs.map((doc) => doc.data());
  }

  async save() {
    // create new key with new date
    // this.dateModified = new Date().toUTCString();
    const student = {
      // copy of current student
      ...this,
    };
    // add Firebase collection students and set to the above student object
    const res = await db.collection("students").doc().set(student);
  }

  static async destroy(id) {
    // wait for data back from Firestore
    await db
      .collection("students")
      .where("id", "==", id)
      .get()
      // loop over data, delete student if id matches
      .then((res) => res.forEach((r) => r.ref.delete()));

    return "Deleted a student with id " + id;
  }
}

module.exports = Student;
