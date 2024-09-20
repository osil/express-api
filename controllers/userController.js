const axios = require("axios");
exports.users = async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.status(200).json({
      message: "Users fetched successfully",
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  const { name } = req.body;

  res.json({
    message: "User created successfully",
    data: { name },
  });
};
