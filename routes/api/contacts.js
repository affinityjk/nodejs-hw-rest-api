const express = require("express");
const router = express.Router();
const { validation } = require("../../middlewares");
const { contactsSchema } = require("../../validationSchemas");
const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validation(contactsSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validation(contactsSchema), ctrl.updateContact);

module.exports = router;