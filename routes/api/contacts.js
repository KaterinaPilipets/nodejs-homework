const express = require("express");
const { validateBody } = require("../../helpers");
const { schemas } = require("../../models/contact");
const router = express.Router();
const controllers = require("../../controllers/contacts");

const { isValidId, authenticate } = require("../../middlewares");

router.get("/", authenticate, controllers.getListController);

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  controllers.getContactController
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addScheme),
  controllers.postContactController
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  controllers.deleteContactController
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addScheme),
  controllers.putContactController
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavScheme),
  controllers.updateStatusContact
);

module.exports = router;
