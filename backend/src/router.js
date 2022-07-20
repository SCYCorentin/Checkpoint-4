const express = require("express");

const {
  ItemController,
  CityController,
  CoworkingplacesController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/city", CityController.browse);
router.get("/city/:id", CityController.read);

router.get("/coworkingplaces", CoworkingplacesController.browse);
router.get("/coworkingplaces/:id", CoworkingplacesController.read);

module.exports = router;
