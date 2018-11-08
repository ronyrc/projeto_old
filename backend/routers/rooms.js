const express = require("express");
const controller = require("../controllers/rooms");
const models = require("../models/");
const router = express.Router();
const { protectByToken } = require("../midd/auth");

//dependencias
const dependencias = {
  ...models,
};
router.get("/", controller.index.bind(null, dependencias));
router.post("/", protectByToken, controller.create.bind(null, dependencias));
router.get("/:id", protectByToken, controller.show.bind(null, dependencias));
router.put("/:id", protectByToken, controller.update.bind(null, dependencias));
router.delete("/:id", protectByToken, controller.destroy.bind(null, dependencias));

module.exports = router;
