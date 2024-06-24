export default (req, res) => {
  res.status(200).json([
    { name: "Daniel"},
    { name: "marira"},
    { name: "Jason"},
  ]
  );
};
