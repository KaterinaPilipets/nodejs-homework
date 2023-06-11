const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");
async function putContactController(req, res, next) {
  if (!req.body) {
    throw HttpError(400, "missing fields");
  }

  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
}
module.exports = putContactController;
