const mysql = require("mysql2/promise");
const { mysqlConfig } = require("../config");

const mysqlConnect = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    return connection;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { mysqlConnect };
