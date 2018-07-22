const express = require("express");
const router = express.Router();

// ------------------------ firebase ---------------------------- //

const firebaseAdmin = require("firebase-admin");
var db = firebaseAdmin.database();

// ------------------------ routes --------------------------------- //

// get all names (change to getNames later)
router.get("/getObjectOfNames", function(req, res) {
  db.ref("candidates")
    .once("value", function(snapshot) {
      const candidates = snapshot.val();
      return candidates;
    })
    .then(candidates => {
      res.status(200).json(candidates);
    })
    .catch(err => {
      console.log("error in getArrayOfNames", err);
    });
});

// add name
router.post("/addname", function(req, res) {
  res.send({
    type: "POST"
  });
});

//update name
router.put("/editname/:uid", function(req, res) {
  res.send({
    type: "PUT"
  });
});

// delete name
router.delete("/deletename/:uid", function(req, res) {
  res.send({
    type: "DELETE"
  });
});

module.exports = router;
