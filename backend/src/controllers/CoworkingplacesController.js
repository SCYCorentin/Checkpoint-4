const models = require("../models");

class CoworkingplaceController {
  static browse = (req, res) => {
    models.coworkingplaces
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.coworkingplaces
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const coworkingplaces = req.body;

    // TODO validations (length, format...)

    coworkingplaces.id = parseInt(req.params.id, 10);

    models.coworkingplaces
      .update(coworkingplaces)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const coworkingplaces = req.body;

    // TODO validations (length, format...)

    models.coworkingplaces
      .insert(coworkingplaces)
      .then(([result]) => {
        res.status(201).send({ ...coworkingplaces, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.coworkingplaces
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = CoworkingplaceController;
