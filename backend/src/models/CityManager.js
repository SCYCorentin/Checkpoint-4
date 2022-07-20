const AbstractManager = require("./AbstractManager");

class CityManager extends AbstractManager {
  static table = "city";

  insert(item) {
    return this.connection.query(
      `insert into ${CityManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${CityManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = CityManager;
