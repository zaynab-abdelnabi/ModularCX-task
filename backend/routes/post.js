var express = require("express");
var router = express.Router();
var controller = require("../controllers/postControllers");

/* GET posts listing. */
router.get("/", controller.getAll);

/* GET one post listing by Id. */
router.get("/:id", controller.getById);

/* POST new post. */
router.post("/", controller.post);

/* PUT and update an existing post. */
router.put("/:id", controller.put);

/* DELETE post. */
router.delete("/:id", controller.delete);

module.exports = router;
