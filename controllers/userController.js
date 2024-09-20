exports.users = (req, res) => {
  res.json({
    users: [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Jane Doe",
      },
    ],
  });
};

exports.createUser = (req, res) => {
  const { name } = req.body;
  res.json({
    message: "User created successfully",
    user: {
      name,
    },
  });
};
