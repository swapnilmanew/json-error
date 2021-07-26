const express = require("express");
const router = express.Router();

// controller file
const blogController = require("../controllers/blogController");

router.get("/", blogController.index);
router.get("/post/:id", blogController.singlePost);
router.post("/create", blogController.create);
router.get("/edit/:id", blogController.edit);
router.post("/update", blogController.update);
router.delete("/delete/:id", blogController.deletePost);

module.exports = router;
