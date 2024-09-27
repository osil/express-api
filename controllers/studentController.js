exports.students = async (req, res) => {
  res.json({
    students: [
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
