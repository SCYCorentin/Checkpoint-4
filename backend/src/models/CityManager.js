const AbstractManager = require("./AbstractManager");

class CityManager extends AbstractManager {
  static table = "city";

  insert(city) {
    return this.connection.query(
      `insert into ${this.table} (cityplace) values (?)`,
      [city.cityplace]
    );
  }

  update(city) {
    return this.connection.query(
      `update ${this.table} set cityplace = ? where id = ?`,
      [city.cityplace, city.id]
    );
  }
}

module.exports = CityManager;
