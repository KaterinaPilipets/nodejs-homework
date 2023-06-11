const getListController = require("./getListController");
const getContactController = require("./getContactController");
const postContactController = require("./postContactController");
const deleteContactController = require("./deleteContactController");
const putContactController = require("./putContactController");
const updateStatusContact = require("./updateStatusContact");
const { ctrlWrapper } = require("../../helpers");
module.exports = {
  getListController: ctrlWrapper(getListController),
  getContactController: ctrlWrapper(getContactController),
  postContactController: ctrlWrapper(postContactController),
  deleteContactController: ctrlWrapper(deleteContactController),
  putContactController: ctrlWrapper(putContactController),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
