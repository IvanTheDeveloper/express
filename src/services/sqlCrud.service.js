const db = require("./db.service");
const helper = require("../utils/helper.util");

async function getMultiple(page = 1, listPerPage = 10) {
  const offset = helper.getOffset(page, config);
  const rows = await db.query(
    `SELECT field, field 
    FROM table LIMIT ?,?`,
    [offset, listPerPage]
  );

  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(obj) {
  const result = await db.query(
    `INSERT INTO table 
    (field, field) 
    VALUES 
    (?, ?)`,
    [obj.field, obj.field]
  );

  let message = "Error";
  if (result.affectedRows) {
    message = "Success";
  }
  return { message };
}

async function update(id, obj) {
  const result = await db.query(
    `UPDATE table 
    SET field=?, field=? 
    WHERE id=?`,
    [obj.field, obj.field, id]
  );

  let message = "Error";
  if (result.affectedRows) {
    message = "Success";
  }
  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM table WHERE id=?`, [id]);

  let message = "Error";
  if (result.affectedRows) {
    message = "Success";
  }
  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
