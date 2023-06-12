
const { HttpError } = require("../../helpers");
const {Contact}=require("../../models/contact")
async function deleteContactController(req, res, next) {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
}
module.exports = deleteContactController;
