const AbstractManager = require("./AbstractManager");

class CoworkingplaceManager extends AbstractManager {
  static table = "coworkingplaces";

  insert(item) {
    return this.connection.query(
      `insert into ${CoworkingplaceManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${CoworkingplaceManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = CoworkingplaceManager;
