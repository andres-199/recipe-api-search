module.exports = (req, _, next) => {
  req.context = {
    page: req.query.page || 1,
    limit: req.query.limit || 3,
    skip: ((req.query.page || 1) - 1) * (req.query.limit || 3),
    searchTerm: req.query.search || "",
    search: new RegExp(req.query.search || "", "gi"),
  };
  next();
};
