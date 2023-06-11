const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

async function getContactController(req, res, next) {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
}
module.exports = getContactController;
