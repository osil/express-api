const { mysqlConnect } = require("../libs/mysqlConnecttionLib");
exports.departments = async (req, res) => {
  const conn = await mysqlConnect();
  const sql = "SELECT * FROM departments";
  const [result] = await conn.execute(sql);
  conn.end();
  res.json({
    departments: result,
  });
};

exports.departmentsByID = async (req, res) => {
  const { fac_index } = req.params.fac_index;
  try {
    const conn = await mysqlConnect();
    const sql = "SELECT * FROM departments WHERE FAC_INDEX = ?";
    const [result] = await conn.execute(sql, [req.params.fac_index]);
    conn.end();
    console.log(result.length);
    if (result.length == 0) {
      throw new Error("Department not found");
    }
    res.json({
      departments: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
