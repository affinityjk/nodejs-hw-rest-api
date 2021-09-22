const { NotFound } = require("http-errors");
const sendSuccessRes = require("../utils/sendSuccessRes");
const contactsOperation = require("../model/contacts/index");

const listContacts = async (req, res) => {
  const results = await contactsOperation.listContacts();
  sendSuccessRes(res, { results });
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.getContactById(contactId);
  if (!result) {
    throw new NotFound(`Contact with id ${contactId} not found`);
  }
  sendSuccessRes(res, { result });
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.removeContact(contactId);
  if (!result) {
    throw new NotFound(`Contact with id ${contactId} not found`);
  }
  sendSuccessRes(res, { message: `Contact with id ${contactId} deleted` });
};

const addContact = async (req, res) => {
  const result = await contactsOperation.addContact(req.body);
  sendSuccessRes(res, { result, message: "Contact added" }, 201);
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.updateContact(contactId, req.body);
  if (!result) {
    throw new NotFound(`Contact with id ${contactId} not found`);
  }
  sendSuccessRes(res, { result, message: "Contact updated" });
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
