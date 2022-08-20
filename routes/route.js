const express = require('express')
const router = express.Router()
const { createUser, loginUser, getUserProfile, updateUser, getAllUserProfile} = require("../controllers/userController") 

// User APIs
router.post("/register",createUser)
router.post("/login", loginUser)
router.get("/user/:userId/profile", getUserProfile)
router.get("/user/:userId/profile",  getAllUserProfile)
router.put("/user/:userId/profile", authorisation, updateUser )

// if api is invalid OR wrong URL
router.all("/*", function (req, res) {
    res
      .status(404)
      .send({ status: false, message: "The api you requested is not available" });
  });
  
module.exports =router