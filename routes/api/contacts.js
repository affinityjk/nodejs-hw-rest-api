const express = require("express");
const router = express.Router();
const { controllersWrapper, validation } = require("../../middlewares");
const { contactsSchema } = require("../../validationSchemas");
const ctrl = require("../../controllers/contacts");

router.get("/", controllersWrapper(ctrl.listContacts));

router.get("/:contactId", controllersWrapper(ctrl.getContactById));

router.post(
  "/",
  validation(contactsSchema),
  controllersWrapper(ctrl.addContact)
);

router.delete("/:contactId", controllersWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validation(contactsSchema),
  controllersWrapper(ctrl.updateContact)
);

module.exports = router;
