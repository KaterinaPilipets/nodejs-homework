
const { Contact } = require("../../models/contact");
async function postContactController(req, res, next) {
  const { _id: owner } = req.user;

  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
}
module.exports = postContactController;
