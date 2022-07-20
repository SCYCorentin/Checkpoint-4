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
router.put("/city/:id", CityController.edit);
router.post("/city", CityController.add);
router.delete("/city/:id", CityController.delete);

router.get("/coworkingplaces", CoworkingplacesController.browse);
router.get("/coworkingplaces/:id", CoworkingplacesController.read);
router.put("/coworkingplaces/:id", CoworkingplacesController.edit);
router.post("/coworkingplaces/", CoworkingplacesController.add);
router.delete("/coworkingplaces/:id", CoworkingplacesController.delete);

module.exports = router;
