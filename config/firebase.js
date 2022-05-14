var admin = require("firebase-admin");

// import downloaded file
var serviceAccount = require("./serviceAccount.firebase.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
// create instance of  firestore database
const db = admin.firestore();
module.exports = db;
