const express = require("express");
const {
    userById,
    allUsers,
    getUser,
    updateUser,
    deleteUser,
    hasAuthorization,
} = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();


/*router.post("/addModule", addModule);
router.post("/addModuletTo", addModuleTo);*/
router.get("/results", allUsers);
router.get("/user/:userId", requireSignin,getUser);
router.put("/user/:userId",requireSignin,updateUser);
router.delete("/user/:userId",requireSignin, deleteUser);


// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
