const AbstractManager = require("./AbstractManager");

class CoworkingplaceManager extends AbstractManager {
  static table = "coworkingplaces";

  findAll() {
    return this.connection.query(
      `SELECT * from ${this.table} INNER JOIN city ON ${this.table}.city_id = city.id`
    );
  }

  insert(coworkingplaces) {
    return this.connection.query(
      `insert into ${this.table} (name, hoursopen, feedback, services, city_id) values ( ?, ?, ?, ?, ? )`,
      [
        coworkingplaces.name,
        coworkingplaces.hoursopen,
        coworkingplaces.feedback,
        coworkingplaces.services,
        coworkingplaces.city_id,
      ]
    );
  }

  update(coworkingplaces) {
    return this.connection.query(
      `UPDATE ${this.table}  set name, hoursopen, feedback, services, city_id = ?, ?, ?, ?, ? WHERE id = ?`,
      [
        coworkingplaces.name,
        coworkingplaces.hoursopen,
        coworkingplaces.feedback,
        coworkingplaces.services,
        coworkingplaces.city_id,
      ]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = CoworkingplaceManager;
