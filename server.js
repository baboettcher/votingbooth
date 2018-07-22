const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 5000;

// ------------------------ firebase ---------------------------- //
const firebaseAdmin = require("firebase-admin");
var serviceAccount = require("./key/votingbooth-50c12-firebase-adminsdk-t4ytx-e66649548e.json");

// Initialize the app with a custom auth variable, limiting the server's access
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://votingbooth-50c12.firebaseio.com"
});

var db = firebaseAdmin.database();

const ballotCreationRoutes = require("./routes/ballotcreationapi");
app.use("/bc-api", ballotCreationRoutes);

app.listen(PORT, () =>
  console.log("Listening on port ", PORT, " ", Date.now().toString())
);
